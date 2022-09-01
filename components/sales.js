import Image from "next/future/image";

const Sales = ({ ...sales }) => {

  const tokens = sales.asset_events

  function saleDate(timestamp) {
    const time = new Date(timestamp)
    return time.toLocaleString()
  }


  return (
    <div className="mt-10">
      <h1 className="text-3xl mb-6">Latest Sales <span className="text-xl font-normal text-slate-500">Over the last seven days</span></h1>
      <div className="grid grid-cols-5">
        {tokens.map(token => (
          <div className="flex flex-col" key={token.id}>
            <a href={`https://opensea.io/assets/ethereum/${token.asset.asset_contract.address}/${token.asset.token_id}`} target="_blank" rel="noreferrer">
              <Image className="block" src={token.asset.image_thumbnail_url} alt="token image" width={128} height={128} />
            </a>
            Sale price: {(token.total_price * (10 ** -18)).toFixed(3)}<br />
            Sale date: {saleDate(token.event_timestamp)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sales
