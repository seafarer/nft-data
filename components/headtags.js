import Head from 'next/head'

function HeadTags({ title, description, image, pageslug }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={pageslug} />
        <meta property="og:site_name" content="NFT Lookup" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="shortcut icon" href="/favicon_512.png" />
        <link rel="icon" href="/favicon_32.png" sizes="32x32" />
        <link rel="icon" href="/favicon_192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon_512.png" />
        <meta name="msapplication-TileImage" content="/favicon_512.png" />
      </Head>
    </div>
  )
}

export default HeadTags