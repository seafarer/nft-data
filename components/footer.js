import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 p-4 flex justify-between">
      <p className="text-xs text-slate-400">Powered by Next.js | Search by Algolia | Data from OpenSea | Hosted on Vercel | CMS from Cosmic</p>
      <p className="text-xs text-slate-400">Built by <Link href="https://www.highfidelity.dev" target="_blank" rel="noreferrer">High Fidelity</Link></p>
    </footer>
  )
}