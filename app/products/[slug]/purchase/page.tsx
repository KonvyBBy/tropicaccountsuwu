import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { ArrowLeft, LockIcon, AlertCircle } from "lucide-react"

// This would typically come from a database or API
const getProductBySlug = (slug: string) => {
  const products = [
    {
      id: 1,
      name: "Rare Account Bundle",
      price: 19.99,
      image: "/images/tropicfn-logo.png",
      description: "Collection of rare skins including Black Knight and Renegade Raider.",
      slug: "rare-account-bundle",
      stock: 7,
    },
    {
      id: 2,
      name: "OG Black Knight Account",
      price: 29.99,
      image: "/images/tropicfn-logo.png",
      description: "Original Black Knight account with Season 2 Battle Pass complete.",
      slug: "og-black-knight-account",
      stock: 3,
    },
    {
      id: 3,
      name: "Season 1 Account",
      price: 39.99,
      image: "/images/tropicfn-logo.png",
      description: "Authentic Season 1 account with Renegade Raider and other rare items.",
      slug: "season-1-account",
      stock: 2,
    },
    {
      id: 4,
      name: "Premium Skin Collection",
      price: 49.99,
      image: "/images/tropicfn-logo.png",
      description: "Massive collection of premium skins from all seasons, perfect for collectors.",
      slug: "premium-skin-collection",
      stock: 5,
    },
    {
      id: 5,
      name: "Rare Emotes Account",
      price: 24.99,
      image: "/images/tropicfn-logo.png",
      description: "Account focused on rare and exclusive emotes that are no longer available.",
      slug: "rare-emotes-account",
      stock: 4,
    },
    {
      id: 6,
      name: "OG Galaxy Skin Account",
      price: 34.99,
      image: "/images/tropicfn-logo.png",
      description: "Exclusive Galaxy skin account with additional rare cosmetics.",
      slug: "og-galaxy-skin-account",
      stock: 2,
    },
    {
      id: 7,
      name: "Stacked Account Bundle",
      price: 59.99,
      image: "/images/tropicfn-logo.png",
      description: "Fully stacked account with items from every season since the beginning.",
      slug: "stacked-account-bundle",
      stock: 1,
    },
    {
      id: 8,
      name: "Limited Edition Account",
      price: 44.99,
      image: "/images/tropicfn-logo.png",
      description: "Account with limited edition items that were only available for a short time.",
      slug: "limited-edition-account",
      stock: 3,
    },
  ]

  return products.find((product) => product.slug === slug) || null
}

export default function PurchasePage({ params }: { params: { slug: string } }) {
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

  // Generate a random order ID
  const orderId = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")

  return (
    <main className="min-h-screen bg-pro-900 text-white">
      <Navbar />

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <Link href={`/products/${product.slug}`} className="flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to product
          </Link>

          <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* PayPal Checkout Section */}
            <div className="md:col-span-2 bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-700">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <LockIcon className="h-5 w-5 mr-2 text-pro-500" />
                Secure Checkout
              </h2>

              {/* Payment Method Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Payment Method</span>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#0070ba] text-white px-3 py-1 rounded-md flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                        <path d="M3 10h18"></path>
                      </svg>
                      PayPal
                    </div>
                  </div>
                </div>

                {/* PayPal Information */}
                <div className="bg-slate-700/50 p-4 rounded-lg mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-[#0070ba] rounded-full flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                        <path d="M3 10h18"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Pay with PayPal</h3>
                      <p className="text-sm text-slate-300">Fast, secure payment processing</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">Send payment to the following PayPal account:</p>
                  <div className="bg-slate-800 p-3 rounded-md border border-slate-600 flex items-center justify-between mb-3">
                    <span className="font-medium text-pro-400">paypal.me/KonvyAccounts</span>
                    <button className="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded transition">
                      Copy
                    </button>
                  </div>
                  <div className="text-sm text-slate-300">
                    <p className="mb-2">Please include the following in your payment note:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Product: {product.name}</li>
                      <li>Order ID: {orderId}</li>
                      <li>Your email address for delivery</li>
                    </ul>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email Address (for account delivery)
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full px-3 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pro-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="discord" className="block text-sm font-medium mb-1">
                      Discord Username (optional, for support)
                    </label>
                    <input
                      type="text"
                      id="discord"
                      placeholder="username#0000"
                      className="w-full px-3 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pro-500"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-600">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-pro-600 focus:ring-pro-500 border-slate-600 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-slate-300">
                    I agree to the{" "}
                    <Link href="/tos" className="text-pro-500 hover:text-pro-400">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/refund" className="text-pro-500 hover:text-pro-400">
                      Refund Policy
                    </Link>
                  </label>
                </div>

                <div className="space-y-4">
                  <a
                    href={`https://www.paypal.me/KonvyAccounts/${product.price.toFixed(2)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white py-3 px-6 rounded-md flex items-center justify-center font-semibold text-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                      <path d="M3 10h18"></path>
                    </svg>
                    Pay with PayPal - ${product.price.toFixed(2)}
                  </a>

                  <p className="text-center text-sm text-slate-400">
                    After payment, please allow up to 5 minutes for account delivery
                  </p>
                </div>

                <div className="flex items-center justify-center mt-4 text-xs text-slate-400">
                  <LockIcon className="h-3 w-3 mr-1" />
                  Secure payment processing
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg h-fit border border-slate-700">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="border-b border-slate-700 pb-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-slate-700">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-slate-400 line-clamp-2">{product.description}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Subtotal</span>
                  <span>${product.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Processing Fee</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="border-t border-slate-700 mt-4 pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${product.price.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 bg-slate-700 rounded-lg p-4 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-warning-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white mb-1">Important Information</p>
                    <p>
                      After purchase, you'll receive account login details via email. Please change the password as soon
                      as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                <div className="text-sm">
                  <p className="font-medium mb-2">Order Details:</p>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Order ID:</span>
                    <span>{orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Date:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h2 className="text-xl font-semibold mb-4">Payment Instructions</h2>
            <div className="text-sm text-slate-300 space-y-3">
              <p>To complete your purchase, please follow these steps:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Click the "Pay with PayPal" button above to be redirected to PayPal</li>
                <li>Log in to your PayPal account or pay as a guest with your credit/debit card</li>
                <li>
                  <strong>Important:</strong> In the payment notes, include:
                  <ul className="list-disc pl-5 mt-1">
                    <li>Your email address</li>
                    <li>Order ID: {orderId}</li>
                    <li>Product name: {product.name}</li>
                  </ul>
                </li>
                <li>Complete the payment process on PayPal</li>
                <li>Once payment is confirmed, your account details will be sent to your email</li>
              </ol>
              <div className="bg-pro-500/20 p-3 rounded-lg mt-4 border border-pro-500/30">
                <p className="font-medium text-white">Need help? Contact us on Discord or email support@tropicfn.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
