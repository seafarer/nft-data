export default function StatsGrid({...item}) {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-3 mx-3">
      <div className="bg-gradient-to-b from-slate-100 to-slate-50 border-slate-200 border p-5 rounded-lg relative">
        <div className="absolute right-0 top-0 text-white text-6xl font-bold leading-statbox z-0">24<span className="font-normal">h</span></div>
        <div className="relative grid grid-cols-2 gap-4 z-10">
          <div>
            <p className="font-bold display text-xl text-slate-500">{item.stats.one_day_sales}</p>
            <p className="text-sm narrow text-slate-400">One day sales</p>
          </div>
          <div>
            <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.one_day_volume)}Ξ </p>
            <p className="text-sm narrow text-slate-400">One day volume</p>
          </div>
          <div>
            <p className="font-bold display text-xl text-slate-500">{(item.stats.one_day_change).toFixed(2)}%</p>
            <p className="text-sm narrow text-slate-400">One day change</p>
          </div>
          <div>
            <p className="font-bold display text-xl text-slate-500">{item.stats.one_day_average_price.toFixed(2)}Ξ</p>
            <p className="text-sm narrow text-slate-400">One day average</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-slate-100 to-slate-50 border-slate-200 border p-5 rounded-lg relative">
        <div className="absolute right-0 top-0 text-white text-6xl font-bold leading-statbox z-0">7<span className="font-normal">d</span></div>
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div>
            <p className="font-bold display text-xl text-slate-500">{item.stats.seven_day_sales}</p>
            <p className="text-sm narrow text-slate-400">Seven day sales</p>
          </div>
          <div>
            <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.seven_day_volume).toLocaleString("en-US")}Ξ</p>
            <p className="text-sm narrow text-slate-400">Seven day volume</p>
          </div>
          <div>
            <p className="font-bold display text-xl text-slate-500">{item.stats.seven_day_change.toFixed(2)}%</p>
            <p className="text-sm narrow text-slate-400">Seven day change</p>
          </div>
          <div>
            <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.seven_day_average_price)}Ξ</p>
            <p className="text-sm narrow text-slate-400">Seven day avg. price</p>
          </div>
          <div>
            <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.seven_day_difference)}Ξ</p>
            <p className="text-sm narrow text-slate-400">Seven day difference</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-slate-100 to-slate-50 border-slate-200 border p-5 rounded-lg relative">
        <div className="absolute right-0 top-0 text-white text-6xl font-bold leading-statbox z-0">30<span className="font-normal">d</span></div>
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div>
            <p className="font-bold display text-xl text-slate-500">{item.stats.thirty_day_sales}Ξ</p>
            <p className="text-sm narrow text-slate-400">30 day sales</p>
          </div>
          <div>
            <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.thirty_day_volume).toLocaleString("en-US")}Ξ</p>
            <p className="text-sm narrow text-slate-400">30 day volume</p>
          </div>
          <div>
            <p className="font-bold display text-xl text-slate-500">{item.stats.thirty_day_change.toFixed(2)}%</p>
            <p className="text-sm narrow text-slate-400">30 day change</p>
          </div>
          <div>
            <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.thirty_day_average_price)}Ξ</p>
            <p className="text-sm narrow text-slate-400">30 day avg. price</p>
          </div>
          <div>
            <p className="font-bold display text-xl text-slate-500">{Math.round(item.stats.thirty_day_difference).toLocaleString("en-US")}Ξ</p>
            <p className="text-sm narrow text-slate-400">30 day difference</p>
          </div>
        </div>
      </div>
    </div>
  )
}