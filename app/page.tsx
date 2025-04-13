import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Testimonials data for the scrolling section
  const testimonials = [
    {
      id: 1,
      name: "Alex M.",
      avatar: "/images/tropicfn-logo.png",
      rating: 5,
      text: "Best Fortnite account service I've used! Fast delivery and exactly as described.",
    },
    {
      id: 2,
      name: "Sarah K.",
      avatar: "/images/tropicfn-logo.png",
      rating: 5,
      text: "Amazing selection of rare skins. Customer service was super helpful when I had questions.",
    },
    {
      id: 3,
      name: "Mike T.",
      avatar: "/images/tropicfn-logo.png",
      rating: 4,
      text: "Great prices compared to other sites. Will definitely buy from here again!",
    },
    {
      id: 4,
      name: "Jessica R.",
      avatar: "/images/tropicfn-logo.png",
      rating: 5,
      text: "Smooth transaction and the account had even more skins than advertised!",
    },
    {
      id: 5,
      name: "Chris B.",
      avatar: "/images/tropicfn-logo.png",
      rating: 5,
      text: "Been looking for a Black Knight account for ages. TropicFN delivered exactly what I wanted.",
    },
  ]

  return (
    <main className="min-h-screen bg-pro-900 text-white relative">
      {/* Background overlay with slight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-pro-900/80 z-0"></div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
              Tropic<span className="text-pro-500">FN</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-8">Premium Fortnite accounts marketplace</p>
            <Link
              href="/products"
              className="inline-flex items-center bg-pro-500 hover:bg-pro-600 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-pro-500/20 transition"
            >
              Browse Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-[400px] h-[400px] bg-slate-800/50 rounded-lg overflow-hidden border-2 border-pro-500/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-pro-500/20 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-pro-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Premium Fortnite Accounts</h3>
                  <p className="text-slate-300">
                    Rare skins, exclusive items, and complete battle passes from all seasons
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pro-900/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-pro-900/80 to-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Why Choose TropicFN?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-pro-500/5 transition border border-slate-700">
              <div className="w-16 h-16 bg-pro-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Premium Accounts</h3>
              <p className="text-slate-300 text-center">
                All our accounts come with rare skins, emotes, and other exclusive items that will make you stand out in
                the game.
              </p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-pro-500/5 transition border border-slate-700">
              <div className="w-16 h-16 bg-pro-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Secure & Reliable</h3>
              <p className="text-slate-300 text-center">
                We ensure all accounts are secure and ready to use. Our delivery system is automated for instant access.
              </p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-pro-500/5 transition border border-slate-700">
              <div className="w-16 h-16 bg-pro-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Best Prices</h3>
              <p className="text-slate-300 text-center">
                We offer the most competitive prices on the market. Regular sales and special discounts for our loyal
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Scrolling */}
      <section className="relative z-10 py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">What Our Customers Say</h2>

          <div className="relative">
            {/* Gradient overlays for scroll effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-pro-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-pro-900 to-transparent z-10"></div>

            {/* Scrolling testimonials */}
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide animate-scroll">
              <div className="flex gap-6 animate-scroll">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 w-80 bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-slate-700 rounded-full overflow-hidden mr-4">
                        <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 ${i < testimonial.rating ? "text-warning-500" : "text-slate-600"}`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300">{testimonial.text}</p>
                  </div>
                ))}

                {/* Duplicate testimonials for infinite scroll effect */}
                {testimonials.map((testimonial) => (
                  <div
                    key={`duplicate-${testimonial.id}`}
                    className="flex-shrink-0 w-80 bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-slate-700 rounded-full overflow-hidden mr-4">
                        <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 ${i < testimonial.rating ? "text-warning-500" : "text-slate-600"}`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300">{testimonial.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-slate-900/50 to-pro-900/80">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Level Up Your Game?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Browse our selection of premium Fortnite accounts and find the perfect one for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button className="bg-pro-500 hover:bg-pro-600 text-white px-8 py-3 text-lg">Shop Now</Button>
            </Link>
            <Link href="/discord">
              <Button variant="outline" className="border-pro-500 text-pro-500 hover:bg-pro-500/10 px-8 py-3 text-lg">
                Join Discord
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">TropicFN</h3>
              <p className="text-slate-400 text-sm">The #1 source for premium Fortnite accounts at the best prices.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-slate-400 hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-slate-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="text-slate-400 hover:text-white">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tos" className="text-slate-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/discord" className="text-slate-400 hover:text-white">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="text-slate-400 hover:text-white">
                    Feedback
                  </Link>
                </li>
                <li>
                  <a href="mailto:support@tropicfn.com" className="text-slate-400 hover:text-white">
                    Email Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} TropicFN. All rights reserved.</p>
            <p className="mt-2">Not affiliated with Epic Games or Fortnite.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
