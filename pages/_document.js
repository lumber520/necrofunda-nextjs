import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
                            <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet"/>
                    <link rel='icon' type='image/png' sizes='32x32' href='/icon-32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/icon-32.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='apple-touch-icon' href='/icon-512x512.png' />
                    <meta name='theme-color' content='#000000' />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
