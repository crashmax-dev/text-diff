import React from 'react'
import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'
import { App } from './application'

const root = document.getElementById('root')!
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <MantineProvider
      theme={{ colorScheme: 'dark' }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
)
