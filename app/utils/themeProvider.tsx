import { createContext, useContext, useEffect, useRef, useState } from 'react'
import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { useFetcher } from '@remix-run/react'

enum Theme {
  DARK = 'night',
  LIGHT = 'light',
}

type ThemeContextType = [Theme | null, Dispatch<SetStateAction<Theme | null>>]

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function ThemeProvider({
  children,
  savedTheme,
}: {
  children: ReactNode
  savedTheme: Theme | null
}) {
  const [theme, setTheme] = useState<Theme | null>(() => {
    if (savedTheme) {
      if (themes.includes(savedTheme)) {
        return savedTheme
      } else {
        return null
      }
    }
    return Theme.LIGHT
  })

  const persistTheme = useFetcher()

  const persistThemeRef = useRef(persistTheme)

  useEffect(() => {
    persistThemeRef.current = persistTheme
  }, [persistTheme])

  const mountRun = useRef(false)

  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true
      return
    }
    if (!theme) {
      return
    }

    persistThemeRef.current.submit(
      { theme },
      { action: 'action/setTheme', method: 'post' }
    )
  }, [theme])

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const themes: Theme[] = Object.values(Theme)

function isTheme(value: unknown): value is Theme {
  return typeof value === 'string' && themes.includes(value as Theme)
}

export { isTheme, Theme, ThemeProvider, useTheme }
