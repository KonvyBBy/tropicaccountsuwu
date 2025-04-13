"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function Feedback() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <main className="min-h-screen bg-pro-900 text-white relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-pro-900/80 z-0"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-[-1] opacity-20">
        <Image src="/images/tropicfn-logo.png" alt="Background" fill className="object-cover" priority />
      </div>

      <Navbar />

      {/* Feedback Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Submit Your Feedback</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-700">
              <h2 className="text-2xl font-semibold mb-4 text-pro-400">Leave a Review</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pro-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pro-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="rating" className="block text-sm font-medium mb-1">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="text-2xl focus:outline-none"
                      >
                        <span className={`${(hoverRating || rating) >= star ? "text-warning-500" : "text-slate-600"}`}>
                          ★
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium mb-1">
                    Your Feedback
                  </label>
                  <textarea
                    id="feedback"
                    rows={5}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pro-500"
                    placeholder="Tell us about your experience..."
                  ></textarea>
                </div>

                <Button className="w-full bg-pro-500 hover:bg-pro-600">Submit Feedback</Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-700">
                <h2 className="text-2xl font-semibold mb-4 text-pro-400">Why Your Feedback Matters</h2>
                <p className="text-slate-300">
                  At TropicFN, we value your opinion and continuously strive to improve our services. Your feedback
                  helps us:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1 text-slate-300">
                  <li>Enhance our product offerings</li>
                  <li>Improve customer experience</li>
                  <li>Address any issues or concerns</li>
                  <li>Develop new features based on your needs</li>
                </ul>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-700">
                <h2 className="text-2xl font-semibold mb-4 text-pro-400">Contact Support</h2>
                <p className="text-slate-300 mb-4">
                  Need immediate assistance? Reach out to our support team through these channels:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pro-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <span>support@tropicfn.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pro-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Live Chat (9AM - 5PM EST)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pro-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                      </svg>
                    </div>
                    <span>Discord Server</span>
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
