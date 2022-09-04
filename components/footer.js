
export default function Footer() {
  return (
    <footer className="bg-indigo-900 p-4 flex flex-col md:flex-row flex-nowrap justify-between">
      <p className="text-xs text-slate-400 text-center md:text-left mb-2 md:mb-0">Powered by Next.js | Search by Algolia | Data from OpenSea | Hosted on Vercel | CMS from Cosmic</p>
      <p className="text-xs text-slate-400 text-center md:text-left">Built by <a href="https://www.highfidelity.dev" target="_blank" rel="noreferrer">High Fidelity</a></p>
    </footer>
  )
}