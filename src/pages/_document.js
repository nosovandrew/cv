import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    // add styled-components supporting
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='true'
                    />
                    {/* Press Start 2P 400 */}
                    <link
                        href='https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
                        rel='stylesheet'
                    />
                    {/* IBM Plex Serif 300, 500, 700 */}
                    <link
                        href='https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@300;500;700&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body data-theme='light'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
