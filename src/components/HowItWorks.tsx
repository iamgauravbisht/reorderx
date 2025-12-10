import { motion } from "motion/react";
import { Store, Package, Send } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Store,
      title: "Add shop & customers",
      description:
        "Set up your shop profile and import your existing customer phone numbers in minutes.",
    },
    {
      number: "2",
      icon: Package,
      title: "Set products & refill cycles",
      description:
        "Define your products and typical reorder intervals (e.g., 15 days for milk, 30 days for dry fruits).",
    },
    {
      number: "3",
      icon: Send,
      title: "WhatsApp reminders & reorders",
      description:
        "ReorderX automatically sends smart reminders and 1-tap reorder options at the perfect time.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">How ReorderX works</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Get started in 3 simple steps. No technical knowledge required.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      <span className="text-2xl">{step.number}</span>
                    </div>
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-blue-200 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
