import { createGlobalStyle } from 'styled-components';

import { media } from './media';

const GlobalStyle = createGlobalStyle`
    :root {
        /* Base colors */
        --base-blue: 230, 94%;
        --base-orange: 31, 94%;
        --base-white: 0, 0%, 100%; // only one lightness value
        --base-black: 0, 0%, 0%; // only one lightness value
        /* Palettes */
        --palette-blue-56: var(--base-blue), 56%;
        --palette-blue-12: var(--base-blue), 12%;

        --palette-orange-56: var(--base-orange), 56%;

        /* Main vars */
        --color-primary: hsla(var(--base-white), 100%);
        --text-primary: hsla(var(--base-black), 100%);
        --headline-primary: hsla(var(--palette-blue-56), 100%);
        --color-secondary: hsla(var(--palette-blue-12), 100%);
        --text-secondary: hsla(var(--base-white), 100%);
        --headline-secondary: hsla(var(--palette-orange-56), 100%);
        /* Spacing */
        --basic-spacing: 20px;
        --full-screen-h: calc(100vh - 2*var(--basic-spacing)); // minus global padding (top+bottom)
        /* Font */
        --font-serif: 'IBM Plex Serif', 'Times New Roman', Times, serif;
        --font-headline: 'Press Start 2P', 'Roboto', -apple-system, system-ui, BlinkMacSystemFont, 'Helvetica Neue', 'Helvetica', sans-serif;
        --basic-font-weight: 500;
        --headline-font-weight: 400;
        --basic-font-size: 28px;
        --basic-line-height: auto;
    }

    @media ${media.md} {
        :root {
            --basic-spacing: 80px;

            --basic-font-size: 36px;
            --basic-line-height: 55px;
        }
    }

    [data-theme='dark'] {
        // dark theme style vars
        --color-primary: hsla(var(--palette-blue-12), 100%);
        --text-primary: hsla(var(--base-white), 100%);
        --headline-primary: hsla(var(--palette-orange-56), 100%);

        --color-secondary: hsla(var(--base-white), 100%);
        --text-secondary: hsla(var(--base-black), 100%);
        --headline-secondary: hsla(var(--palette-blue-56), 100%);
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html {
        height: 100%;
        box-sizing: border-box;
        touch-action: manipulation;
        /* font-feature-settings: 'case' 1, 'rlig' 1, 'calt' 0; */
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html,
    body {
        font-family: var(--font-serif);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--color-primary);
        color: var(--text-primary);
        overscroll-behavior-x: none;
    }

    body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-size: var(--basic-font-size);
        font-weight: var(--basic-font-weight);
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-headline);
        color: var(--headline-primary);
        font-size: 32px;
        font-weight: var(--headline-font-weight);

        @media ${media.md} {
            font-size: 40px;
        }
    }

    h1 {
        font-size: 50px;

        @media ${media.md} {
            font-size: 80px;
        }
    }

    a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* подсветка при касании (мобильные платформы) */
    }
`;

export default GlobalStyle;
