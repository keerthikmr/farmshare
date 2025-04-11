"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tractor, Users, DollarSign, Leaf } from "lucide-react";

export default function FeatureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Tractor,
      title: "Affordable Access",
      description: "Rent tools at a fraction of the purchase price.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: DollarSign,
      title: "Income Generation",
      description: "Lend your idle equipment to earn extra income.",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: Leaf,
      title: "Flexibility",
      description: "Access a variety of tools as per seasonal requirements.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Foster collaboration and knowledge exchange among farmers.",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div ref={ref} className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
          Our Solution
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          FarmShare connects farmers, enabling a more efficient and
          collaborative approach to agriculture.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className={`${feature.color} w-14 h-14 rounded-full flex items-center justify-center mb-6`}
            >
              <feature.icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-green-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
