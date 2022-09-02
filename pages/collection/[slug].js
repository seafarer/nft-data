import { useRouter } from 'next/router'
import Image from "next/future/image";
import Link from "next/link"
import Sales from "../../components/sales";
import CollectionLinks from "../../components/collection-links";
import Marketplaces from "../../components/marketplaces";
import MainStats from "../../components/mainstats";
import Description from "../../components/description";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import StatsGrid from "../../components/statsgrid";

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
      <div className="relative w-full h-vh-33" style={style}>
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

