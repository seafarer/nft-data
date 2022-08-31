
const Sales = ({ ...sales }) => {

  const tokens = sales.asset_events

  function saleDate(timestamp) {
    const time = new Date(timestamp)
    return time.toLocaleString()
  }


  return (
    <div>
      <h1>20 Latest Sales</h1>
      <h2>Over the last seven days</h2>
      <div className="grid grid-cols-5">
        {tokens.map(token => (
          <div key={token.id}>
          <a href={`https://opensea.io/assets/ethereum/${token.asset.asset_contract.address}/${token.asset.token_id}`} target="_blank">
            <img src={token.asset.image_thumbnail_url} />
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
