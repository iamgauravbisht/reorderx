import { motion } from "motion/react";
import { Store, ShoppingBag, Apple, Scissors, Pill } from "lucide-react";

export function ForWhom() {
  const businesses = [
    {
      icon: Store,
      title: "Restaurants",
      description:
        "Get regular customers to order their favorite meals more often with timely reminders.",
      examples: "Home delivery, tiffin services, cloud kitchens",
    },
    {
      icon: ShoppingBag,
      title: "Grocery & Daily Shops",
      description:
        "Remind customers to restock essentials like milk, vegetables, and household items.",
      examples: "Kirana stores, supermarkets, dairy shops",
    },
    {
      icon: Apple,
      title: "Dry Fruit Shops",
      description:
        "Turn seasonal buyers into regular customers with smart refill reminders.",
      examples: "Dry fruits, nuts, spices, specialty foods",
    },
    {
      icon: Scissors,
      title: "Salons",
      description:
        "Keep appointment slots full with automatic visit reminders for haircuts and services.",
      examples: "Hair salons, spas, beauty parlors",
    },
    {
      icon: Pill,
      title: "Pharmacies",
      description:
        "Help customers remember to refill prescriptions and recurring medication orders.",
      examples: "Medical stores, health supplements",
    },
  ];

  return (
    <section
      id="for-whom"
      className="py-24 px-6 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">Who it&apos;s for</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Perfect for any business with repeat customers who need reminders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => {
            const Icon = business.icon;
            return (
              <motion.div
                key={business.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-3">{business.title}</h3>
                <p className="text-gray-600 mb-4">{business.description}</p>
                <p className="text-sm text-gray-500 italic">
                  {business.examples}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
