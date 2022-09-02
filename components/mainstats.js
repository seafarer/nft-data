export default function MainStats({...item}) {
  return (
    <div className="flex items-start lg:gap-12 gap-6">
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-slate-500">{item.stats.total_supply.toLocaleString("en-US")}</p>
        <p className="condensed text-slate-400">Supply</p>
      </div>
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-slate-500">{item.stats.num_owners.toLocaleString("en-US")}</p>
        <p className="condensed text-slate-400">Owners</p>
      </div>
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-slate-500">{Math.round((item.stats.num_owners / item.stats.total_supply) * 100)}%</p>
        <p className="condensed text-slate-400">Owner percent</p>
      </div>
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-slate-500">{item.dev_seller_fee_basis_points * .01}%</p>
        <p className="condensed text-slate-400">Creator royalty</p>
      </div>
    </div>
  )
}