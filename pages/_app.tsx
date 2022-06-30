import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../themes';
import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setDarkmode] = useState(false);
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  )
}

export default MyApp;
