import { useState, createContext } from 'react';
import GlobalStyle from '@/styles/global';
import { DefaultSeo } from 'next-seo';

import { SEO } from '../../seo.config';
import { ThemeContextProvider } from '@/contexts/theme/context';

export default function App({ Component, pageProps }) {

    return (
        <>
            <DefaultSeo {...SEO} />
            <GlobalStyle />
            <ThemeContextProvider>
                <Component {...pageProps} />
            </ThemeContextProvider>
        </>
    );
}
