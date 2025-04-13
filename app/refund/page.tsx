import Image from "next/image"
import Navbar from "@/components/navbar"

export default function Refund() {
  return (
    <main className="min-h-screen bg-ocean-900 text-white relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-800/50 to-ocean-900/80 z-0"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-[-1] opacity-30">
        <Image src="/images/background.jpg" alt="Background" fill className="object-cover" priority />
      </div>

      <Navbar />

      {/* Refund Policy Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-tropic-500 mb-8 text-center">Refund Policy</h1>

          <div className="bg-ocean-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg shadow-tropic-500/10">
            <div className="space-y-6 text-gray-200">
              <p>
                At TropicFN, we strive to ensure customer satisfaction with every purchase. Please read our refund
                policy carefully before making a purchase.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-tropic-400">Eligibility for Refunds</h3>
                <p>Refunds are available under the following circumstances:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>The account credentials provided do not work at the time of delivery</li>
                  <li>The account does not match the description or missing advertised items</li>
                  <li>Technical issues prevent access to the purchased content</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-tropic-400">Refund Process</h3>
                <p>To request a refund, please follow these steps:</p>
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Contact our support team within 24 hours of purchase</li>
                  <li>Provide your order number and reason for refund</li>
                  <li>Our team will review your request within 48 hours</li>
                  <li>If approved, refunds will be processed to the original payment method</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-tropic-400">Non-Refundable Situations</h3>
                <p>Refunds will not be issued in the following cases:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>More than 24 hours have passed since purchase</li>
                  <li>Account credentials have been changed by the customer</li>
                  <li>The account has been used extensively after purchase</li>
                  <li>Customer violated our Terms of Service</li>
                </ul>
              </div>

              <div className="bg-tropic-700/30 p-4 rounded-lg border border-tropic-500/30">
                <p className="font-semibold text-tropic-300">
                  Please note: All refund decisions are final and at the discretion of TropicFN management.
                </p>
              </div>

              <p>
                For any questions regarding our refund policy, please contact our support team through Discord or email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
