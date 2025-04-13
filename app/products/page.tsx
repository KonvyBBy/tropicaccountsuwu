import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"

export default function Products() {
  // Sample product data with more details for the product listings
  const products = [
    {
      id: 1,
      name: "Rare Account Bundle",
      price: 19.99,
      image: "/images/tropicfn-logo.png",
      description: "Collection of rare skins including Black Knight and Renegade Raider.",
      highlights: ["50+ Rare Skins", "Season 1-3 Battle Passes", "Exclusive Emotes", "Full Email Access"],
      slug: "rare-account-bundle",
      stock: 7,
    },
    {
      id: 2,
      name: "OG Black Knight Account",
      price: 29.99,
      image: "/images/tropicfn-logo.png",
      description: "Original Black Knight account with Season 2 Battle Pass complete.",
      highlights: ["Black Knight Skin", "Season 2 Battle Pass", "Rare Pickaxes", "Full Email Access"],
      slug: "og-black-knight-account",
      stock: 3,
    },
    {
      id: 3,
      name: "Season 1 Account",
      price: 39.99,
      image: "/images/tropicfn-logo.png",
      description: "Authentic Season 1 account with Renegade Raider and other rare items.",
      highlights: ["Renegade Raider", "Season 1 Exclusive Items", "Rare Pickaxes", "Full Email Access"],
      slug: "season-1-account",
      stock: 2,
    },
    {
      id: 4,
      name: "Premium Skin Collection",
      price: 49.99,
      image: "/images/tropicfn-logo.png",
      description: "Massive collection of premium skins from all seasons, perfect for collectors.",
      highlights: ["100+ Premium Skins", "All Battle Passes", "Exclusive Emotes", "Full Email Access"],
      slug: "premium-skin-collection",
      stock: 5,
    },
    {
      id: 5,
      name: "Rare Emotes Account",
      price: 24.99,
      image: "/images/tropicfn-logo.png",
      description: "Account focused on rare and exclusive emotes that are no longer available.",
      highlights: ["50+ Rare Emotes", "Limited Edition Dances", "Exclusive Cosmetics", "Full Email Access"],
      slug: "rare-emotes-account",
      stock: 4,
    },
    {
      id: 6,
      name: "OG Galaxy Skin Account",
      price: 34.99,
      image: "/images/tropicfn-logo.png",
      description: "Exclusive Galaxy skin account with additional rare cosmetics.",
      highlights: ["Galaxy Skin", "Exclusive Back Blings", "Limited Edition Items", "Full Email Access"],
      slug: "og-galaxy-skin-account",
      stock: 2,
    },
    {
      id: 7,
      name: "Stacked Account Bundle",
      price: 59.99,
      image: "/images/tropicfn-logo.png",
      description: "Fully stacked account with items from every season since the beginning.",
      highlights: ["200+ Skins", "Complete Collection", "All Battle Passes", "Full Email Access"],
      slug: "stacked-account-bundle",
      stock: 1,
    },
    {
      id: 8,
      name: "Limited Edition Account",
      price: 44.99,
      image: "/images/tropicfn-logo.png",
      description: "Account with limited edition items that were only available for a short time.",
      highlights: ["Exclusive Skins", "Limited Time Items", "Rare Pickaxes", "Full Email Access"],
      slug: "limited-edition-account",
      stock: 3,
    },
  ]

  return (
    <main className="min-h-screen bg-pro-900 text-white relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-pro-900/80 z-0"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-[-1] opacity-20">
        <Image src="/images/tropicfn-logo.png" alt="Background" fill className="object-cover" priority />
      </div>

      <Navbar />

      {/* Products Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Products</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-slate-800/90 rounded-lg overflow-hidden shadow-lg hover:shadow-pro-500/20 transition border border-slate-700 hover:border-pro-500/30 group"
              >
                <div className="h-48 bg-slate-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-slate-700">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {product.stock <= 3 && (
                    <div className="absolute top-2 right-2 bg-warning-500 text-white text-xs px-2 py-1 rounded-full">
                      Only {product.stock} left!
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-pro-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-pro-500 font-bold">${product.price.toFixed(2)}</span>
                    <div className="space-x-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded text-sm transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  <Link
                    href={`/products/${product.slug}/purchase`}
                    className="mt-3 block w-full bg-pro-500 hover:bg-pro-600 text-white py-2 rounded text-center font-semibold transition-colors"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
