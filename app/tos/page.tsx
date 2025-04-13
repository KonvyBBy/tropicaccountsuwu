import Image from "next/image"
import Navbar from "@/components/navbar"

export default function TOS() {
  return (
    <main className="min-h-screen bg-ocean-900 text-white relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-800/50 to-ocean-900/80 z-0"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-[-1] opacity-30">
        <Image src="/images/background.jpg" alt="Background" fill className="object-cover" priority />
      </div>

      <Navbar />

      {/* Terms of Service Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-tropic-500 mb-8 text-center">Terms of Service</h1>

          <div className="bg-ocean-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg shadow-tropic-500/10">
            <div className="space-y-6 text-gray-200">
              <p>
                Welcome to TropicFN. By accessing our website and services, you agree to comply with and be bound by the
                following terms and conditions.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-tropic-400">1. Account Usage</h3>
                <p>By purchasing an account from TropicFN, you agree to the following:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You will not share the account credentials with any third party</li>
                  <li>You will change the password and email immediately after purchase</li>
                  <li>You understand that TropicFN is not affiliated with Epic Games or Fortnite</li>
                  <li>You accept all risks associated with using third-party accounts</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-tropic-400">2. Payment and Delivery</h3>
                <p>
                  All payments are processed securely through our payment providers. Account details will be delivered
                  automatically after payment confirmation. In some cases, manual delivery may be required, which can
                  take up to 24 hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-tropic-400">3. Refunds</h3>
                <p>
                  Please refer to our Refund Policy for detailed information about our refund process and eligibility
                  criteria.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-tropic-400">4. Account Security</h3>
                <p>
                  TropicFN cannot guarantee the long-term security of accounts after purchase. We recommend taking the
                  following steps to secure your account:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Change the password immediately</li>
                  <li>Update the email address to your own</li>
                  <li>Enable two-factor authentication if available</li>
                  <li>Do not share account details with others</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-tropic-400">5. Limitation of Liability</h3>
                <p>
                  TropicFN shall not be liable for any direct, indirect, incidental, special, or consequential damages
                  resulting from the use or inability to use our services, including but not limited to account bans,
                  loss of data, or service interruptions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-tropic-400">6. Changes to Terms</h3>
                <p>
                  TropicFN reserves the right to modify these terms at any time. Continued use of our services after any
                  changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div className="bg-tropic-700/30 p-4 rounded-lg border border-tropic-500/30">
                <p className="font-semibold text-tropic-300">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these
                  Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
