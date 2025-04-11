"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Search, Calendar, Tractor, RotateCcw } from "lucide-react";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: Search,
      title: "Browse",
      description: "Explore available tools listed by fellow farmers.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Calendar,
      title: "Book",
      description: "Reserve the equipment you need for your desired timeframe.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Tractor,
      title: "Use",
      description: "Utilize the tool to enhance your farming operations.",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: RotateCcw,
      title: "Return",
      description: "Return the equipment after use, ready for the next farmer.",
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
          How It Works
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Our simple four-step process makes sharing agricultural equipment easy
          and efficient.
        </p>
      </div>

      <div className="relative">
        {/* Line connecting steps - positioned to not overlap with content */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-green-200 z-0"></div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
              >
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-800">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 relative">
        <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/how_it_works_image.jpg?height=300&width=1200"
            alt="FarmShare mobile app interface"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
