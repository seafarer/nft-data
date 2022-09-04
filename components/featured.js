import { useState, useEffect } from "react";
import Image from "next/future/image";
import Link from "next/link";

export default function Featured({ collection }) {

  const [featuredData, setFeaturedData] = useState([])

  useEffect(() => {
    const options = {method: 'GET'};

    const urls = collection.map(slug => (
      'https://api.opensea.io/api/v1/collection/' + slug.collection_slug
    ))

    Promise.all(urls.map(url =>
      fetch(url, options)
        .then(response => response.json())
      )).then(data => setFeaturedData(data))
        .catch((error) => {
        console.error(error.message)
    })
  }, [])

  return (
    <div className="grid md:grid-cols-2 gap-5 mx-3 mb-8">
      {featuredData.map(item => (
        <div className="card flex items-center border border-indigo-300 rounded-xl p-2.5" key={item.collection.slug}>
          <Link href={`/collection/${item.collection.slug}`}>
            <a className="mr-3 block">
              <Image className="rounded-lg" src={item.collection.image_url} alt={`${item.name} thumbnail`} width={64} height={64}  />
            </a>
          </Link>
          <div className="flex justify-between w-full align-baseline">
            <h2 className="condensed text-lg font-bold text-slate-500 leading-none">
              <Link href={`/collection/${item.collection.slug}`}>
                <a>{item.collection.name}</a>
              </Link>
            </h2>
            <p className="leading-none text-right font-bold text-slate-400">{item.collection.stats.floor_price}Ξ</p>
          </div>
        </div>
      ))}
    </div>
  )
}
