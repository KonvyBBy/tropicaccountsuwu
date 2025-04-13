import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ShoppingCart, AlertCircle } from "lucide-react"

// This would typically come from a database or API
const getProductBySlug = (slug: string) => {
  const products = [
    {
      id: 1,
      name: "Rare Account Bundle",
      price: 19.99,
      originalPrice: 29.99,
      image: "/images/tropicfn-logo.png",
      description:
        "This exclusive Rare Account Bundle includes some of the most sought-after skins in Fortnite, including the legendary Black Knight and Renegade Raider. With over 50 rare skins from the earliest seasons, this account is perfect for collectors and serious players who want to stand out in the game. All accounts come with full email access and are guaranteed to be secure.",
      highlights: ["50+ Rare Skins", "Season 1-3 Battle Passes", "Exclusive Emotes", "Full Email Access"],
      longDescription: `
        <p>The Rare Account Bundle is our premium collection featuring the most coveted items from Fortnite's earliest seasons. This account includes:</p>
        
        <h4>Rare Skins:</h4>
        <ul>
          <li>Black Knight (Season 2 Battle Pass)</li>
          <li>Renegade Raider (Season 1 Shop)</li>
          <li>Aerial Assault Trooper (Season 1 Shop)</li>
          <li>Sparkle Specialist (Season 2 Battle Pass)</li>
          <li>And 45+ more rare skins</li>
        </ul>
        
        <h4>Battle Passes:</h4>
        <ul>
          <li>Season 1 - Complete</li>
          <li>Season 2 - Complete</li>
          <li>Season 3 - Complete</li>
        </ul>
        
        <h4>Extras:</h4>
        <ul>
          <li>Full email access guaranteed</li>
          <li>Account security details provided</li>
          <li>Instructions for secure transfer</li>
        </ul>
        
        <p>All accounts are thoroughly verified before listing to ensure they meet our quality standards. We guarantee secure transfer and provide 24/7 support for any questions or concerns.</p>
      `,
      slug: "rare-account-bundle",
      stock: 7,
      features: ["Instant Delivery", "24/7 Support", "Secure Payment"],
    },
    {
      id: 2,
      name: "OG Black Knight Account",
      price: 29.99,
      originalPrice: 39.99,
      image: "/images/tropicfn-logo.png",
      description:
        "Original Black Knight account with Season 2 Battle Pass complete. This account features the iconic Black Knight skin that has become one of the most sought-after items in Fortnite. Complete with rare pickaxes and other Season 2 cosmetics.",
      highlights: ["Black Knight Skin", "Season 2 Battle Pass", "Rare Pickaxes", "Full Email Access"],
      longDescription: `
        <p>The OG Black Knight Account is a treasure for any Fortnite enthusiast. This account includes:</p>
        
        <h4>Primary Features:</h4>
        <ul>
          <li>Black Knight Outfit (Tier 70 Season 2 Battle Pass)</li>
          <li>Complete Season 2 Battle Pass with all rewards</li>
          <li>AC/DC Pickaxe and other rare harvesting tools</li>
          <li>Exclusive Season 2 emotes and sprays</li>
        </ul>
        
        <h4>Additional Content:</h4>
        <ul>
          <li>Several shop skins from early seasons</li>
          <li>Rare back blings and gliders</li>
          <li>Limited-time event items</li>
        </ul>
        
        <p>The Black Knight is one of the most recognizable symbols of an OG Fortnite player. This account gives you immediate status as a veteran of the game. All accounts come with full email access and detailed instructions for secure transfer.</p>
      `,
      slug: "og-black-knight-account",
      stock: 3,
      features: ["Instant Delivery", "24/7 Support", "Secure Payment"],
    },
    {
      id: 3,
      name: "Season 1 Account",
      price: 39.99,
      originalPrice: 49.99,
      image: "/images/tropicfn-logo.png",
      description:
        "Authentic Season 1 account with Renegade Raider and other rare items from the very beginning of Fortnite Battle Royale. A true collector's account with items that will never be available again.",
      highlights: ["Renegade Raider", "Season 1 Exclusive Items", "Rare Pickaxes", "Full Email Access"],
      longDescription: `
        <p>Our Season 1 Account is a genuine piece of Fortnite history, featuring:</p>
        
        <h4>Ultra-Rare Content:</h4>
        <ul>
          <li>Renegade Raider outfit (Season 1 Level 20 reward)</li>
          <li>Aerial Assault Trooper (Season 1 Level 15 reward)</li>
          <li>Mako Glider and other Season 1 exclusives</li>
          <li>Original default pickaxe variants</li>
        </ul>
        
        <h4>Historical Value:</h4>
        <ul>
          <li>Items from Fortnite's very first season (October-December 2017)</li>
          <li>Original seasonal shop purchases</li>
          <li>Early adopter rewards and recognition</li>
        </ul>
        
        <p>Season 1 accounts are extremely scarce as they represent the earliest days of Fortnite Battle Royale when the game was just beginning. These items will never return to the game, making this account a true collector's item. Full email access ensures complete ownership transfer.</p>
      `,
      slug: "season-1-account",
      stock: 2,
      features: ["Instant Delivery", "24/7 Support", "Secure Payment"],
    },
    {
      id: 4,
      name: "Premium Skin Collection",
      price: 49.99,
      originalPrice: 69.99,
      image: "/images/tropicfn-logo.png",
      description:
        "Massive collection of premium skins from all seasons, perfect for collectors. This account has over 100 premium skins including legendary outfits and limited time items from every season of Fortnite.",
      highlights: ["100+ Premium Skins", "All Battle Passes", "Exclusive Emotes", "Full Email Access"],
      longDescription: `
        <p>The Premium Skin Collection is our most comprehensive account, featuring:</p>
        
        <h4>Extensive Cosmetic Library:</h4>
        <ul>
          <li>Over 100 premium skins including legendary outfits</li>
          <li>Complete Battle Pass collections from multiple seasons</li>
          <li>Limited time event items and promotional exclusives</li>
          <li>Rare shop items that have only appeared once or twice</li>
        </ul>
        
        <h4>Account Highlights:</h4>
        <ul>
          <li>High account level with numerous accomplishments</li>
          <li>Extensive emote and wrap collection</li>
          <li>Multiple exclusive gliders and contrails</li>
          <li>Save the World access included</li>
        </ul>
        
        <p>This account represents thousands of hours of gameplay and hundreds of dollars in purchases. It provides incredible value for players who want an instant collection of the best cosmetics Fortnite has offered throughout its history. As with all our accounts, it includes full email access and secure transfer.</p>
      `,
      slug: "premium-skin-collection",
      stock: 5,
      features: ["Instant Delivery", "24/7 Support", "Secure Payment"],
    },
    {
      id: 5,
      name: "Rare Emotes Account",
      price: 24.99,
      originalPrice: 34.99,
      image: "/images/tropicfn-logo.png",
      description:
        "Account focused on rare and exclusive emotes that are no longer available. Perfect for players who value unique expressions and want to show off rare dances and emotes in the game.",
      highlights: ["50+ Rare Emotes", "Limited Edition Dances", "Exclusive Cosmetics", "Full Email Access"],
      slug: "rare-emotes-account",
      longDescription: `
        <p>Our Rare Emotes Account is perfect for players who appreciate Fortnite's extensive emote library:</p>
        
        <h4>Emote Collection:</h4>
        <ul>
          <li>Over 50 rare emotes including discontinued items</li>
          <li>Original Season 2-3 dance moves</li>
          <li>Limited time collaboration emotes</li>
          <li>Holiday special expressions</li>
        </ul>
        
        <h4>Additional Features:</h4>
        <ul>
          <li>Various skins to showcase your emotes</li>
          <li>Matching cosmetic sets for full effect</li>
          <li>Several traversal emotes for movement</li>
        </ul>
        
        <p>Emotes are one of the most social aspects of Fortnite, and this account lets you express yourself with movements and dances that few other players can access. Many of these emotes will never return to the item shop, making them increasingly rare as time goes on.</p>
      `,
      stock: 4,
      features: ["Instant Delivery", "24/7 Support", "Secure Payment"],
    },
    {
      id: 6,
      name: "OG Galaxy Skin Account",
      price: 34.99,
      originalPrice: 44.99,
      image: "/images/tropicfn-logo.png",
      description:
        "Exclusive Galaxy skin account with additional rare cosmetics. This account features the Samsung Galaxy promotional skin that was only available to Samsung device owners for a limited time.",
      highlights: ["Galaxy Skin", "Exclusive Back Blings", "Limited Edition Items", "Full Email Access"],
      slug: "og-galaxy-skin-account",
      longDescription: `
        <p>The OG Galaxy Skin Account features one of Fortnite's most distinctive promotional outfits:</p>
        
        <h4>Promotional Exclusives:</h4>
        <ul>
          <li>Galaxy Skin (Samsung promotion only)</li>
          <li>Galaxy Back Bling and harvesting tool</li>
          <li>Complete Galaxy cosmetic set</li>
          <li>Other device-specific promotional items</li>
        </ul>
        
        <h4>Additional Content:</h4>
        <ul>
          <li>Several Battle Pass completions</li>
          <li>Shop skins to complement the Galaxy theme</li>
          <li>Matching wraps and contrails</li>
        </ul>
        
        <p>The Galaxy skin represents one of Fortnite's most successful brand collaborations and was only available to purchasers of specific Samsung devices during a promotional period. This skin cannot be obtained anymore, making it one of the true status symbols in the game.</p>
      `,
      stock: 2,
      features: ["Instant Delivery", "24/7 Support", "Secure Payment"],
    },
    {
      id: 7,
      name: "Stacked Account Bundle",
      price: 59.99,
      originalPrice: 79.99,
      image: "/images/tropicfn-logo.png",
      description:
        "Fully stacked account with items from every season since the beginning. This is our most comprehensive account with over 200 skins and cosmetics from Season 1 through the current season.",
      highlights: ["200+ Skins", "Complete Collection", "All Battle Passes", "Full Email Access"],
      slug: "stacked-account-bundle",
      longDescription: `
        <p>The Stacked Account Bundle is our ultimate offering, featuring:</p>
        
        <h4>Comprehensive Collection:</h4>
        <ul>
          <li>Over 200 skins from all seasons and events</li>
          <li>Complete Battle Pass unlocks from every season</li>
          <li>Extensive library of pickaxes, gliders, and back blings</li>
          <li>Nearly every emote ever released in the game</li>
        </ul>
        
        <h4>Account Statistics:</h4>
        <ul>
          <li>High account level with numerous achievements</li>
          <li>Various competitive mode accomplishments</li>
          <li>Save the World: Ultimate Edition with all heroes</li>
          <li>Thousands of V-Bucks worth of cosmetics</li>
        </ul>
        
        <p>This account represents the absolute pinnacle of Fortnite collecting. It includes items from limited time events, promotional exclusives, battle passes, item shop rarities, and more. For the serious collector who wants it all, this is the definitive account.</p>
      `,
      stock: 1,
      features: ["Instant Delivery", "24/7 Support", "Secure Payment"],
    },
    {
      id: 8,
      name: "Limited Edition Account",
      price: 44.99,
      originalPrice: 54.99,
      image: "/images/tropicfn-logo.png",
      description:
        "Account with limited edition items that were only available for a short time. Features exclusive collaboration skins and items from special events that will never return to the game.",
      highlights: ["Exclusive Skins", "Limited Time Items", "Rare Pickaxes", "Full Email Access"],
      slug: "limited-edition-account",
      longDescription: `
        <p>Our Limited Edition Account focuses on items that were only available for brief windows:</p>
        
        <h4>Time-Limited Exclusives:</h4>
        <ul>
          <li>Special event skins from limited-time modes</li>
          <li>Brand collaboration outfits no longer available</li>
          <li>Holiday-specific items from past years</li>
          <li>Tournament reward cosmetics</li>
        </ul>
        
        <h4>Value Proposition:</h4>
        <ul>
          <li>Items that cannot be obtained through any means today</li>
          <li>Increasing rarity as time passes</li>
          <li>Conversation starters and status symbols</li>
        </ul>
        
        <p>Limited edition items represent Fortnite's most elusive cosmetics - things that appeared once for a specific purpose and will never return. This account collects these rare gems together, giving you access to a truly unique visual experience in the game.</p>
      `,
      stock: 3,
      features: ["Instant Delivery", "24/7 Support", "Secure Payment"],
    },
  ]

  return products.find((product) => product.slug === slug) || null
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return (
      <main className="min-h-screen bg-pro-900 text-white relative">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/products"
            className="bg-pro-500 hover:bg-pro-600 text-white px-6 py-3 rounded text-lg font-medium"
          >
            Back to Products
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-pro-900 text-white relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-pro-900/80 z-0"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-[-1] opacity-20">
        <Image src="/images/tropicfn-logo.png" alt="Background" fill className="object-cover" priority />
      </div>

      <Navbar />

      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/products" className="hover:text-white">
              Products
            </Link>{" "}
            / <span className="text-white">{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="bg-slate-800 rounded-lg overflow-hidden relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
              {product.stock <= 3 && (
                <div className="absolute top-4 right-4 bg-warning-500 text-white px-3 py-1 rounded-full font-medium text-sm">
                  Only {product.stock} left!
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold text-pro-500 mr-3">${product.price.toFixed(2)}</div>
                {product.originalPrice && (
                  <div className="text-lg text-slate-400 line-through">${product.originalPrice.toFixed(2)}</div>
                )}
                {product.originalPrice && (
                  <Badge className="ml-3 bg-warning-500 hover:bg-warning-600 text-white">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                )}
              </div>

              <p className="text-slate-300 mb-6">{product.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Highlights:</h3>
                <ul className="space-y-2">
                  {product.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pro-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center text-sm">
                  <span className="text-slate-400 w-24">Availability:</span>
                  <span className={product.stock > 0 ? "text-accent-500" : "text-warning-500"}>
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-slate-400 w-24">Product ID:</span>
                  <span>#{product.id.toString().padStart(4, "0")}</span>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {product.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center bg-slate-800 rounded-lg p-3 text-center"
                  >
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Shopify Integration Buttons */}
              <div className="mt-auto space-y-4">
                <Link
                  href={`/products/${product.slug}/purchase`}
                  className="w-full bg-pro-500 hover:bg-pro-600 text-white py-3 px-6 rounded-lg flex items-center justify-center font-semibold text-lg transition-colors"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now - ${product.price.toFixed(2)}
                </Link>

                {/* This would be replaced with your actual Shopify buy button integration */}
                <div
                  id="shopify-buy-button-container"
                  className="w-full h-12 bg-slate-800 rounded-lg flex items-center justify-center text-sm text-slate-400"
                >
                  {/* Shopify buy button would be inserted here via their JavaScript */}
                  <span className="text-xs">Powered by Shopify Secure Checkout</span>
                </div>

                <div className="text-sm text-center text-slate-400 flex items-center justify-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  Secure payment and instant delivery
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-12 bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold mb-6">Product Details</h2>
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: product.longDescription }}
            ></div>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4]
                .filter((id) => id !== product.id)
                .slice(0, 4)
                .map((id) => {
                  const relatedProduct = getProductBySlug(
                    ["rare-account-bundle", "og-black-knight-account", "season-1-account", "premium-skin-collection"][
                      id % 4
                    ],
                  )
                  if (!relatedProduct) return null

                  return (
                    <div
                      key={relatedProduct.id}
                      className="bg-slate-800/90 rounded-lg overflow-hidden shadow-lg hover:shadow-pro-500/20 transition border border-slate-700 hover:border-pro-500/30 group"
                    >
                      <div className="h-40 bg-slate-700 relative overflow-hidden">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          width={400}
                          height={300}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1 group-hover:text-pro-500 transition-colors truncate">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex justify-between items-center">
                          <span className="text-pro-500 font-bold">${relatedProduct.price.toFixed(2)}</span>
                          <Link
                            href={`/products/${relatedProduct.slug}`}
                            className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded text-sm transition"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
