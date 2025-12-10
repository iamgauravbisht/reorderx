import { motion } from "motion/react";
import {
  Clock,
  Calendar,
  Zap,
  MessageCircle,
  Users,
  DollarSign,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Clock,
      title: "Smart refill reminders",
      description:
        "Automatically remind customers when it's time to restock their usual products based on purchase history.",
    },
    {
      icon: Calendar,
      title: "Visit reminders",
      description:
        "Send timely reminders for appointments, services, or regular visits to keep your schedule full.",
    },
    {
      icon: Zap,
      title: "1-tap reorders",
      description:
        "Customers can confirm their order with a single tap — no app installation or complex checkout needed.",
    },
    {
      icon: MessageCircle,
      title: "Automatic feedback collection",
      description:
        "Get reviews and feedback automatically after each order to improve service and build trust.",
    },
    {
      icon: Users,
      title: "Simple customer CRM",
      description:
        "Manage all your customers, orders, and preferences in one clean, easy-to-use dashboard.",
    },
    {
      icon: DollarSign,
      title: "WhatsApp cost control",
      description:
        "Track message usage, set budgets, and control costs with transparent pricing and real-time monitoring.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">
            Everything you need to turn one-time buyers into regulars
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            All the tools to automate customer retention and maximize repeat
            sales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-2xl hover:border-orange-200 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
