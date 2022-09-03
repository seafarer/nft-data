import { useRouter } from 'next/router'
import Image from "next/future/image";
import Sales from "../../components/sales";
import Layout from "../../components/layout";
import CollectionLinks from "../../components/collection-links";
import Marketplaces from "../../components/marketplaces";
import MainStats from "../../components/mainstats";
import Description from "../../components/description";
import StatsGrid from "../../components/statsgrid";
import Breadcrumb from "../../components/breadcrumb";
import Headtags from "../../components/headtags";

const Collection = ({ collections, sales }) => {
  const router = useRouter()
  const slug = router.query

  const item = collections.collection
  const style = {
    backgroundImage: `url(${item.banner_image_url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }

  return (
    <article>
      <Headtags
        title={`NFT stats for ${item.name}`}
        description={`Floor price, latest sales and data for ${item.name}. 24 hour, 7 day, and 30 days tracked with average price, num of sales and more`}
        pageslug={`https://www.nftlookup.app/collection/${item.slug}`}
        image={item.image_url.replace('=s120', '=s512')}
      />
      <div className="relative w-full h-vh-33" style={style}>
        <Breadcrumb {...item} />
        <div className="external-links absolute bottom-0 bg-opacity-80 w-full py-2 bg-slate-100">
          <div className="container mx-auto flex justify-between items-center">
            <CollectionLinks {...item} />
            <Marketplaces {...item} />
          </div>
        </div>
      </div>


      <div className="container mx-auto relative">

        <div className="flex flex-col lg:flex-row justify-between items-center my-8 mx-3">

          <div className="flex justify-start items-center mb-10">
            <div className="w-32 mr-8 md:w-auto">
              <Image className="border border-white border-4 drop-shadow-lg rounded-full" src={item.image_url.replace('=s120', '=s180')} priority={true} alt={`${item.name} thumbnail`} width={180} height={180} />
            </div>
            <div>
              <div className="flex">
                <h1 className="text-2xl lg:text-4xl mb-4 mr-2">{item.name}</h1>
              </div>
              <h2 className="text-3xl font-bold text-slate-500">{item.stats.floor_price}Ξ </h2>
              <p className="condensed text-slate-400 mb-2">current floor</p>
              <Description {...item} />
            </div>
          </div>

          <MainStats {...item} />

        </div>

        <StatsGrid {...item} />

        <Sales {...sales} />
      </div>
    </article>
  )
}

Collection.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getServerSideProps(slug) {
  const options = {
    method: 'GET',
    headers: {Accept: 'application/json', 'X-API-KEY': '6659c81f7e1642978e6102cda8c20e58'}
  };
  const today = Date.now()
  const past = today - 604800000
  const collectionUrl = `https://api.opensea.io/api/v1/collection/${slug.query.slug}`
  const salesUrl = `https://api.opensea.io/api/v1/events?only_opensea=false&collection_slug=${slug.query.slug}&event_type=successful&occurred_before=${today}&occurred_after=${past}`
  const [collectionRes, salesRes] = await Promise.all([
    fetch(collectionUrl, options),
    fetch(salesUrl, options)
  ])
  const [collections, sales] = await Promise.all([
    collectionRes.json(),
    salesRes.json()
  ])
  slug.res.setHeader(
    'Cache-Control',
    'public, s-maxage=300, stale-while-revalidate=59'
  )

  return {
    props: { collections, sales }
  }
}

export default Collection

