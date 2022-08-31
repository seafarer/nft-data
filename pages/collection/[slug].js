import { useRouter } from 'next/router'
import Image from "next/image";
import Sales from "../../components/sales";

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
      <div className="relative w-full h-56" style={style}>&nbsp;</div>
      <div className="container mx-auto">
        <div className="flex items-center justify-center my-8">
          <Image className="pr-5" src={item.image_url} alt={`${item.name} thumbnail`} width={128} height={128} />
          <div>
            <h1 className="">{item.name}</h1>
            <h2 className="">Floor price: {item.stats.floor_price}Ξ</h2>
          </div>
          <div>
            {item.external_url && <p>Website: {item.external_url}</p>}
            {item.twitter_username && <p>Twitter: twitter.com/{item.twitter_username}</p>}
            {item.discord_url && <p>Discord: {item.discord_url}</p>}
            {item.instagram_username && <p>Twitter: twitter.com/{item.instagram_username}</p>}
            <p><a href={`https://etherscan.io/address/${item.primary_asset_contracts[0].address}`} target="_blank" rel="noreferrer">Etherscan</a></p>

          </div>
          <div>
            <ul>
              <li><a href={`https://opensea.io/collection/${item.slug}`} target="_blank" rel="noreferrer">OpenSea</a></li>
              <li><a href={`https://x2y2.io/collection/${item.slug}/items`} target="_blank" rel="noreferrer">X2Y2</a></li>
              <li><a href={`https://looksrare.org/collections/${item.primary_asset_contracts[0].address}`} target="_blank" rel="noreferrer">Looksrare</a></li>
            </ul>
          </div>
        </div>
        <div>
          {item.description}
        </div>
        <div className="flex justify-around">
          <p>Supply: {item.stats.total_supply}</p>
          <p>Owners: {item.stats.num_owners}</p>
          <p>Owner percent: {Math.round((item.stats.num_owners / item.stats.total_supply) * 100)}%</p>
          <p>Creator royalty: {item.dev_seller_fee_basis_points * .01}%</p>
        </div>
        <div className="flex justify-around">
          <div>
            <p>One day sales: {item.stats.one_day_sales}</p>
            <p>One day volume: {Math.round(item.stats.one_day_volume)}Ξ</p>
            <p>One day change: {(item.stats.one_day_change).toFixed(2)}%</p>
            <p>One day avg price: {item.stats.one_day_average_price.toFixed(2)}Ξ</p>
          </div>
          <div>
            <p>Seven day sales: {item.stats.seven_day_sales}</p>
            <p>Seven day volume: {Math.round(item.stats.seven_day_volume).toLocaleString("en-US")}Ξ</p>
            <p>Seven day change: {item.stats.seven_day_change.toFixed(2)}%</p>
            <p>Seven day avg. price: {Math.round(item.stats.seven_day_average_price)}Ξ</p>
            <p>Seven day difference: {Math.round(item.stats.seven_day_difference)}Ξ</p>
          </div>
          <div>
            <p>30 day sales: {item.stats.thirty_day_sales}Ξ</p>
            <p>30 day volume: {Math.round(item.stats.thirty_day_volume).toLocaleString("en-US")}Ξ</p>
            <p>30 day change: {item.stats.thirty_day_change.toFixed(2)}%</p>
            <p>30 day avg. price: {Math.round(item.stats.thirty_day_average_price)}Ξ</p>
            <p>30 day difference{Math.round(item.stats.thirty_day_difference).toLocaleString("en-US")}Ξ</p>
          </div>
        </div>
      </div>
      <Sales {...sales} />
    </article>
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

