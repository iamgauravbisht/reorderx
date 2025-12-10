import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      messages: "1,500 messages/month",
      description: "Perfect for small shops getting started",
      features: [
        "Up to 100 customers",
        "Smart refill reminders",
        "1-tap reorders",
        "Basic CRM",
        "WhatsApp support",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "₹2,499",
      period: "/month",
      messages: "6,000 messages/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 500 customers",
        "Smart refill reminders",
        "1-tap reorders",
        "Advanced CRM & analytics",
        "Automatic feedback collection",
        "Priority WhatsApp support",
        "Custom message templates",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "₹4,999",
      period: "/month",
      messages: "15,000 messages/month",
      description: "For established businesses at scale",
      features: [
        "Unlimited customers",
        "All Growth features",
        "API access",
        "Multiple shop locations",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            No hidden fees. No setup costs. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-blue-500 shadow-2xl scale-105"
                  : "border-gray-200 shadow-lg hover:border-blue-200 hover:shadow-xl"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: plan.popular ? 0 : -8 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-4xl text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 mb-1">{plan.period}</span>
                </div>
                <p className="text-sm text-blue-600 mb-2">{plan.messages}</p>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 rounded-xl transition-all ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-gray-500 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          All plans include 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
