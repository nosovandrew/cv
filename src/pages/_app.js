import { useState, createContext } from 'react';
import GlobalStyle from '@/styles/global';

import { ThemeContextProvider } from '@/contexts/theme/context';

export default function App({ Component, pageProps }) {

    return (
        <ThemeContextProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeContextProvider>
    );
}
