import React from 'react'
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core'
import TodoApp from './components/app/TodoApp'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          margin: 0,
          padding: 0,
        },
      },
    },
  },
})

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoApp />
    </ThemeProvider>
  )
}

export default App
