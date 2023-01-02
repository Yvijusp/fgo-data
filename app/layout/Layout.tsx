import { Theme, useTheme } from '~/utils/themeProvider'
import { MdDarkMode, MdLightMode } from 'react-icons/md/index'
import { Link } from '@remix-run/react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useTheme()
  return (
    <div className='px-4 overflow-hidden'>
      <header className='flex justify-between py-3'>
        <Link to='/' className='font-bold text-2xl hover:text-secondary'>
          Home
        </Link>
        <div className='flex items-center gap-1'>
          <label htmlFor='theme-toggle'>
            {theme === Theme.DARK ? (
              <MdDarkMode size={24} />
            ) : (
              <MdLightMode size={24} />
            )}
          </label>
          <input
            type='checkbox'
            checked={theme === Theme.DARK}
            className='toggle toggle-primary'
            name='theme-toggle'
            id='theme-toggle'
            onChange={() =>
              setTheme((prev) =>
                prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
              )
            }
          />
        </div>
      </header>
      <div>{children}</div>
    </div>
  )
}
