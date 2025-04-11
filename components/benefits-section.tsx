"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      title: "Cost Savings",
      description: "Reduce capital expenditure by renting instead of buying.",
    },
    {
      title: "Enhanced Productivity",
      description: "Utilize modern equipment to increase efficiency.",
    },
    {
      title: "Community Building",
      description: "Foster collaboration and knowledge exchange among farmers.",
    },
    {
      title: "Environmental Impact",
      description:
        "Optimize resource use and reduce waste through shared equipment.",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <div ref={ref} className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
          Benefits of Joining FarmShare
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Experience the advantages of our community-driven approach to farming.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start"
            >
              <CheckCircle2 className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/benefits_section_image.jpg?height=400&width=600"
              alt="Farmers benefiting from shared equipment"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
            <p className="font-bold text-green-800 text-lg">
              65% Cost Reduction
            </p>
            <p className="text-sm text-gray-600">
              Average savings for small farmers
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
