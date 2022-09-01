export default function Marketplaces() {
  return (
    <div>
      <ul>
        <li><a href={`https://opensea.io/collection/${item.slug}`} target="_blank" rel="noreferrer">OpenSea</a></li>
        <li><a href={`https://x2y2.io/collection/${item.slug}/items`} target="_blank" rel="noreferrer">X2Y2</a></li>
        <li><a href={`https://looksrare.org/collections/${item.primary_asset_contracts[0].address}`} target="_blank" rel="noreferrer">Looksrare</a></li>
      </ul>
    </div>
  )
}