import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="relative z-10 flex justify-center items-center p-4 backdrop-blur-sm bg-slate-900/80">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-white">Tropic</span>
            <span className="text-pro-500">FN</span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-slate-200 hover:text-white transition">
            Home
          </Link>
          <Link href="/products" className="text-slate-200 hover:text-white transition">
            Products
          </Link>
          <Link href="/faq" className="text-slate-200 hover:text-white transition">
            FAQ
          </Link>
          <Link href="/refund" className="text-slate-200 hover:text-white transition">
            Refund
          </Link>
          <Link href="/tos" className="text-slate-200 hover:text-white transition">
            T.O.S
          </Link>
          <Link href="/feedback" className="text-slate-200 hover:text-white transition">
            Feedback
          </Link>
          <Link
            href="/discord"
            className="bg-pro-500 hover:bg-pro-600 text-white px-4 py-2 rounded-md transition shadow-md"
          >
            Discord
          </Link>
        </div>
      </div>
    </nav>
  )
}
