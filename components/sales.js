import Image from "next/future/image";

const Sales = ({ ...sales }) => {

  const tokens = sales.asset_events

  function saleDate(timestamp) {
    const time = new Date(timestamp + '.000Z')
    return time.toLocaleString()
  }


  return (
    <div className="my-10 mx-3">
      <h1 className="text-3xl pb-2 mb-4 border-b-2">Latest Sales <span className="text-xl font-normal text-slate-500 block md:inline">Over the last seven days</span></h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
        {tokens.map(token => (
          <div className="flex flex-col" key={token.id}>
            <a href={`https://opensea.io/assets/ethereum/${token.asset.asset_contract.address}/${token.asset.token_id}`} target="_blank" rel="noreferrer">
              <div className="relative">
                <Image className="block rounded-t-lg object-cover w-full" src={token.asset.image_thumbnail_url.replace("=s128", "=s288")} alt="token image" width={288} height={288} />
              </div>
            </a>
            <div className="content border-b border-l border-r rounded-b-lg p-4 text-right">
              <span className="text-xs text-slate-400">sale price</span> <span className="font-display font-bold text-2xl text-slate-600">{+(token.total_price * (10 ** -18)).toFixed(3)}</span><br />
              <span className="text-xs text-slate-400">{saleDate(token.event_timestamp)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sales
