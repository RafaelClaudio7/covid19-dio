import React from 'react';
import { StylesProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material/CssBaseline'
import GlobalStyle from './commons/styles/global-style'
import Main from './containers/Main'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
