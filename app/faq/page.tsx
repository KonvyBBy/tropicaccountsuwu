import Image from "next/image"
import Navbar from "@/components/navbar"

export default function FAQ() {
  const faqs = [
    {
      question: "How do I purchase an account?",
      answer:
        "You can browse our products, select the account you want, and proceed to checkout. After payment, you'll receive the account details via email.",
    },
    {
      question: "Are the accounts safe to use?",
      answer:
        "We ensure all accounts are secure and ready to use. However, we recommend changing the password immediately after purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and cryptocurrency.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer refunds under certain conditions. Please check our refund policy for more details.",
    },
    {
      question: "How quickly will I receive my account?",
      answer:
        "Most accounts are delivered instantly after payment confirmation. In some cases, it might take up to 24 hours.",
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

      {/* FAQ Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h1>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-2 text-pro-400">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
