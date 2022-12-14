import Link from 'next/link'
import SearchModal from "./searchmodal";

export function NavbarHome() {
  return (
    <header className="border-t-4 border-indigo-400 bg-gradient-to-r from-indigo-900 to-blue-900 py-2 px-3 flex justify-between align-center">
      <h1 className="text-gray-100 font-bold text-xl">
        <Link href="/">
          NFT LOOKUP
        </Link>
      </h1>
      <h2 className="text-indigo-300 text-base hidden md:block">Quick stats for your favorite NFT collections on the Ethereum blockchain</h2>
    </header>
  )
}

export function Navbar() {
  return (
    <header className="border-t-4 border-indigo-400 bg-gradient-to-r from-indigo-900 to-blue-900 py-2 px-3 flex justify-between align-center">
      <h1 className="text-gray-100 font-bold text-xl">
        <Link href="/">
          NFT LOOKUP
        </Link>
      </h1>
      <h2 className="text-indigo-300 text-base hidden md:block">Quick stats for your favorite NFT collections on the Ethereum blockchain</h2>
      <SearchModal />
    </header>
  )
}