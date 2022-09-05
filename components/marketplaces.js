import LooksRare from "./svgs/looksrare";
import Opensea from "./svgs/opensea";
import X2y2 from "./svgs/x2y2";

export default function Marketplaces({ ...item }) {
  return (
    <ul className="list-none flex mr-3">
      <li className="ml-4 relative flex flex-col items-center group">
        <a href={`https://opensea.io/collection/${item.slug}`} target="_blank" rel="noreferrer">
          <Opensea width={20} height={20} className="text-slate-400 fill-current" />
        </a>
        <div className="absolute bottom-0 flex flex-col items-center hidden mb-7 group-hover:flex">
          <span className="relative z-10 p-2 text-xs leading-none text-slate-400 whitespace-no-wrap bg-white shadow-sm">OpenSea</span>
          <div className="w-3 h-3 -mt-2 rotate-45 bg-white z-10"></div>
        </div>
      </li>
      <li className="ml-4 relative flex flex-col items-center group">
        <a href={`https://x2y2.io/collection/${item.slug}/items`} target="_blank" rel="noreferrer">
          <X2y2 width={20} height={20} className="text-slate-400 fill-current" />
        </a>
        <div className="absolute bottom-0 flex flex-col items-center hidden mb-7 group-hover:flex">
          <span className="relative z-10 p-2 text-xs leading-none text-slate-400 whitespace-no-wrap bg-white shadow-sm">X2Y2</span>
          <div className="w-3 h-3 -mt-2 rotate-45 bg-white z-10"></div>
        </div>
      </li>
      {item.primary_asset_contracts.length > 0 ? (
        <li className="ml-4 relative flex flex-col items-center group">
          <a href={`https://looksrare.org/collections/${item.primary_asset_contracts[0].address}`} target="_blank" rel="noreferrer">
            <LooksRare width={20} height={20} className="text-slate-400 fill-current"/>
          </a>
          <div className="absolute bottom-0 flex flex-col items-center hidden mb-7 group-hover:flex">
            <span className="relative z-10 p-2 text-xs leading-none text-slate-400 whitespace-no-wrap bg-white shadow-sm">LooksRare</span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-white z-10"></div>
          </div>
        </li>
      ) : ('')}
    </ul>
  )
}