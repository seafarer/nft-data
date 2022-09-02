import LooksRare from "./svgs/looksrare";
import Opensea from "./svgs/opensea";
import X2y2 from "./svgs/x2y2";

export default function Marketplaces({ ...item }) {
  return (
    <ul className="list-none flex mr-3">
      <li className="ml-4">
        <a href={`https://opensea.io/collection/${item.slug}`} target="_blank" rel="noreferrer">
          <Opensea width={20} height={20} className="text-slate-400 fill-current" />
        </a>
      </li>
      <li className="ml-4">
        <a href={`https://x2y2.io/collection/${item.slug}/items`} target="_blank" rel="noreferrer">
          <X2y2 width={20} height={20} className="text-slate-400 fill-current" />
        </a>
      </li>
      <li className="ml-4">
        <a href={`https://looksrare.org/collections/${item.primary_asset_contracts[0].address}`} target="_blank" rel="noreferrer">
          <LooksRare width={20} height={20} className="text-slate-400 fill-current" />
        </a>
      </li>
    </ul>
  )
}