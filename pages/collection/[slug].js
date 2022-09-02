import { useRouter } from 'next/router'
import Image from "next/future/image";
import Link from "next/link"
import ReactMarkdown from 'react-markdown';
import Sales from "../../components/sales";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/pro-solid-svg-icons'
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons'

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
      <div className="relative w-full h-vh-25" style={style}>
        <div className="absolute top-0 left-0 bg-indigo-100 p-1.5 pr-2.5">
          <div className="text-xs flex align-center text-slate-500">
            <Link href="/">
              <a className="text-slate-800">Home</a>
            </Link>
            <span className="text-slate-600 mx-1">
              <FontAwesomeIcon icon={faChevronRight} className="w-1.5 inline" />
            </span> Collections
            <span className="text-slate-600 mx-1">
              <FontAwesomeIcon icon={faChevronRight} className="inline w-1.5" />
            </span> {item.name}
          </div>
        </div>
      </div>


      <div className="container mx-auto">

        <div className="flex justify-between items-center my-4">

          <div className="flex items-center">
            <Image className="mr-8 border border-white border-4 drop-shadow-lg rounded-full" src={item.image_url.replace('=s120', '=s180')} priority={true} alt={`${item.name} thumbnail`} width={180} height={180} />
            <div>
              <h1 className="text-4xl mb-4">{item.name}</h1>
              <h2 className="text-3xl font-bold text-slate-500">{item.stats.floor_price}Ξ </h2>
              <p className="condensed text-slate-400">current floor</p>
            </div>
          </div>

          <div className="flex gap-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-500">{item.stats.total_supply.toLocaleString("en-US")}</p>
              <p className="condensed text-slate-400">Supply</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-500">{item.stats.num_owners.toLocaleString("en-US")}</p>
              <p className="condensed text-slate-400">Owners</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-500">{Math.round((item.stats.num_owners / item.stats.total_supply) * 100)}%</p>
              <p className="condensed text-slate-400">Owner percent</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-500">{item.dev_seller_fee_basis_points * .01}%</p>
              <p className="condensed text-slate-400">Creator royalty</p>
            </div>
          </div>

        </div>


        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="bg-gradient-to-b from-slate-100 to-slate-50 border-slate-200 border p-5 rounded-lg relative">
            <div className="absolute right-0 top-0 text-white text-6xl font-bold leading-statbox">24<span className="font-normal">h</span></div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold display text-xl text-slate-500">{item.stats.one_day_sales}</p>
                <p className="text-sm narrow text-slate-400">One day sales</p>
              </div>
              <div>
                <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.one_day_volume)}Ξ </p>
                <p className="text-sm narrow text-slate-400">One day volume</p>
              </div>
              <div>
                <p className="font-bold display text-xl text-slate-500">{(item.stats.one_day_change).toFixed(2)}%</p>
                <p className="text-sm narrow text-slate-400">One day change</p>
              </div>
              <div>
                <p className="font-bold display text-xl text-slate-500">{item.stats.one_day_average_price.toFixed(2)}Ξ</p>
                <p className="text-sm narrow text-slate-400">One day average</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-slate-100 to-slate-50 border-slate-200 border p-5 rounded-lg relative">
            <div className="absolute right-0 top-0 text-white text-6xl font-bold leading-statbox">7<span className="font-normal">d</span></div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold display text-xl text-slate-500">{item.stats.seven_day_sales}</p>
                <p className="text-sm narrow text-slate-400">Seven day sales</p>
              </div>
              <div>
                <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.seven_day_volume).toLocaleString("en-US")}Ξ</p>
                <p className="text-sm narrow text-slate-400">Seven day volume</p>
              </div>
              <div>
                <p className="font-bold display text-xl text-slate-500">{item.stats.seven_day_change.toFixed(2)}%</p>
                <p className="text-sm narrow text-slate-400">Seven day change</p>
              </div>
              <div>
                <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.seven_day_average_price)}Ξ</p>
                <p className="text-sm narrow text-slate-400">Seven day avg. price</p>
              </div>
              <div>
                <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.seven_day_difference)}Ξ</p>
                <p className="text-sm narrow text-slate-400">Seven day difference</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-slate-100 to-slate-50 border-slate-200 border p-5 rounded-lg relative">
            <div className="absolute right-0 top-0 text-white text-6xl font-bold leading-statbox">30<span className="font-normal">d</span></div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold display text-xl text-slate-500">{item.stats.thirty_day_sales}Ξ</p>
                <p className="text-sm narrow text-slate-400">30 day sales</p>
              </div>
              <div>
                <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.thirty_day_volume).toLocaleString("en-US")}Ξ</p>
                <p className="text-sm narrow text-slate-400">30 day volume</p>
              </div>
              <div>
                <p className="font-bold display text-xl text-slate-500">{item.stats.thirty_day_change.toFixed(2)}%</p>
                <p className="text-sm narrow text-slate-400">30 day change</p>
              </div>
              <div>
                <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.thirty_day_average_price)}Ξ</p>
                <p className="text-sm narrow text-slate-400">30 day avg. price</p>
              </div>
              <div>
                <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.thirty_day_difference).toLocaleString("en-US")}Ξ</p>
                <p className="text-sm narrow text-slate-400">30 day difference</p>
              </div>
            </div>
          </div>
        </div>

        <Sales {...sales} />
      </div>
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

