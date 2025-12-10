import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do my customers need to install any app?",
      answer:
        "No! That's the beauty of ReorderX. Everything works through WhatsApp, which your customers already have. They just get a message with a reorder button — one tap and they're done.",
    },
    {
      question: "How much do WhatsApp messages cost?",
      answer:
        "Our pricing includes all WhatsApp message costs. Starter plan includes 1,500 messages/month, Growth includes 6,000, and Pro includes 15,000. We use official WhatsApp Business API for reliable delivery.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most businesses are up and running in under 30 minutes. Just add your shop details, import customer numbers, set up a few products with refill intervals, and you're done. We also offer free onboarding calls if needed.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, absolutely. No contracts, no commitments. Cancel anytime from your dashboard. Your subscription will continue until the end of your billing period.",
    },
    {
      question: "What if I run out of messages?",
      answer:
        "You can upgrade your plan anytime, or purchase additional message packs. We'll notify you when you're approaching your limit so you're never caught off guard.",
    },
    {
      question: "Is this legal? Can I send WhatsApp messages to customers?",
      answer:
        "Yes, completely legal when done right. We use WhatsApp Business API and follow all compliance requirements. Customers can opt-out anytime, and we only send messages to customers who have purchased from you before.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">Frequently asked questions</h2>
          <p className="text-gray-600 text-xl">
            Everything you need to know about ReorderX.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                className="w-full px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-gray-900 pr-8">{faq.question}</span>
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Plus className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
