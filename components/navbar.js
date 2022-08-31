import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-blue-100 p-4">
      <h1 className="text-gray-700 font-bold text-3xl">
        <Link href="/">
          NFT DATA
        </Link>
      </h1>
    </header>
  )
}