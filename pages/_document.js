import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://use.typekit.net/ftk1knh.css"
            rel="stylesheet"
          />
          <link crossOrigin="use-credentials" href={`https://${process.env.NEXT_PUBLIC_ALGOLIA_APPID}-dsn.algolia.net`} rel="preconnect"/>
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
