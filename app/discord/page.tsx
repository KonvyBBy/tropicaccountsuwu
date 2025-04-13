import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function Discord() {
  return (
    <main className="min-h-screen bg-ocean-900 text-white relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-800/50 to-ocean-900/80 z-0"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-[-1] opacity-30">
        <Image src="/images/background.jpg" alt="Background" fill className="object-cover" priority />
      </div>

      <Navbar />

      {/* Discord Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-tropic-500 mb-4">Join Our Discord Community</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with other players, get support, and stay updated on the latest products and promotions.
            </p>
          </div>

          <div className="bg-ocean-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg shadow-tropic-500/10">
            <div className="grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2 text-tropic-400">Why Join Our Discord?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tropic-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>24/7 Customer Support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tropic-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span>Exclusive Deals & Giveaways</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tropic-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                      <span>Community of Fortnite Players</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tropic-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>Latest News & Updates</span>
                    </li>
                  </ul>
                </div>

                <Link href="https://discord.gg/tropicfn" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#5865F2] hover:bg-[#4752c4] text-white py-3 flex items-center justify-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                        fill="currentColor"
                      />
                    </svg>
                    Join Discord Server
                  </Button>
                </Link>
              </div>

              <div className="bg-[#36393f] p-8 flex items-center justify-center">
                <div className="w-full max-w-sm bg-[#2f3136] rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-[#5865F2] h-16 flex items-center px-4">
                    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23.7069 1.63953C21.9262 0.836453 20.0224 0.25 18.0453 0C17.7853 0.46875 17.4786 1.09687 17.2654 1.59844C15.1624 1.36719 13.0782 1.36719 11.0178 1.59844C10.8046 1.09687 10.4886 0.46875 10.2286 0C8.24237 0.25 6.33862 0.836453 4.56706 1.64844C0.65737 7.57813 -0.402793 13.3688 0.127457 19.0781C2.36862 20.7594 4.53737 21.7469 6.67456 22.4219C7.20268 21.6875 7.67456 20.9063 8.08112 20.0781C7.31081 19.7969 6.57987 19.4531 5.89393 19.0625C6.08112 18.9219 6.26362 18.7719 6.43737 18.6219C10.7286 20.6219 15.4418 20.6219 19.6796 18.6219C19.8534 18.7719 20.0359 18.9219 20.2231 19.0625C19.5371 19.4531 18.8062 19.7969 18.0359 20.0781C18.4424 20.9063 18.9143 21.6875 19.4424 22.4219C21.5796 21.7469 23.7484 20.7594 25.9896 19.0781C26.6046 12.4844 24.9418 6.75 23.7069 1.63953ZM8.70268 15.5938C7.41081 15.5938 6.35737 14.4063 6.35737 12.9688C6.35737 11.5313 7.38112 10.3438 8.70268 10.3438C10.0243 10.3438 11.0782 11.5313 11.048 12.9688C11.048 14.4063 10.0243 15.5938 8.70268 15.5938ZM19.5143 15.5938C18.2224 15.5938 17.169 14.4063 17.169 12.9688C17.169 11.5313 18.1928 10.3438 19.5143 10.3438C20.8359 10.3438 21.8896 11.5313 21.8596 12.9688C21.8596 14.4063 20.8359 15.5938 19.5143 15.5938Z"
                        fill="white"
                      />
                    </svg>
                    <div className="ml-3">
                      <div className="text-white font-semibold">TropicFN Official</div>
                      <div className="text-gray-400 text-xs">Online - 1,245 members</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-white text-sm mb-4">
                      <div className="font-semibold text-[#8e9297] text-xs mb-2">CHANNELS</div>
                      <div className="flex items-center mb-1 text-[#8e9297] hover:text-white cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                            clipRule="evenodd"
                          />
                        </svg>
                        announcements
                      </div>
                      <div className="flex items-center mb-1 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                        general
                      </div>
                      <div className="flex items-center mb-1 text-[#8e9297] hover:text-white cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                        support
                      </div>
                    </div>
                    <div className="text-white text-sm">
                      <div className="font-semibold text-[#8e9297] text-xs mb-2">STORE</div>
                      <div className="flex items-center mb-1 text-[#8e9297] hover:text-white cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        new-accounts
                      </div>
                      <div className="flex items-center mb-1 text-[#8e9297] hover:text-white cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        deals
                      </div>
                      <div className="flex items-center mb-1 text-[#8e9297] hover:text-white cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        help
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
