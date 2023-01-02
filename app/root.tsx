import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import type { LinksFunction } from '@remix-run/react/dist/routeModules'
import Layout from './layout/Layout'

import styles from './tailwind.css'
import { ThemeProvider, useTheme } from './utils/themeProvider'
import type { Theme } from './utils/themeProvider'
import { getThemeSession } from './utils/theme.server'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'FGO',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export type LoaderData = {
  theme: Theme | null
}

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request)

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  }

  return data
}

function App() {
  const [theme] = useTheme()
  return (
    <html lang='en' data-theme={theme}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  )
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>()
  return (
    <ThemeProvider savedTheme={data.theme}>
      <App />
    </ThemeProvider>
  )
}
