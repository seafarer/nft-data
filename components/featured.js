import { useState, useEffect } from "react";
import Link from "next/link";

export default function Featured({ collection }) {

  const [featuredData, setFeaturedData] = useState([])

  const options = {method: 'GET'};

  const urls = collection.map(slug => (
    'https://api.opensea.io/api/v1/collection/' + slug.collection_slug
  ))

  useEffect(() => {
    Promise.all(urls.map(url =>
      fetch(url, options)
        .then(response => response.json())
    )).then(data => setFeaturedData(data))
      .catch((error) => {
        console.error(error.message)
      })
  }, [])

  return (
    <div className="grid grid-cols-3">
      {featuredData.map(item => (
        <div className="card" key={item.collection.slug}>
          <Link href={`/collection/${item.collection.slug}`}>
            <a><Image src={item.collection.image_url} alt={`${item.name} thumbnail`} /></a>
          </Link>
          <h1>
            <Link href={`/collection/${item.collection.slug}`}>
              <a>{item.collection.name}</a>
            </Link>
          </h1>
          <p>Floor: {item.collection.stats.floor_price}</p>
        </div>
      ))}
    </div>
  )
}
