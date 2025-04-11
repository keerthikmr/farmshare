"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-green-50 to-white pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-green-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-green-800 mb-6">
              Empowering Indian Farmers Through Shared Tools
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              FarmShare is revolutionizing Indian agriculture by providing a
              platform where farmers can rent and lend farming equipment
              seamlessly. Say goodbye to hefty investments and underutilized
              machinery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 px-8 py-6 text-lg rounded-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/harvestor.jpg?height=500&width=600"
                alt="Indian farmers sharing agricultural equipment"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
              <div className="flex items-center mb-2">
                <div className="bg-green-100 rounded-full p-2 mr-2">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-bold text-green-800">89.4%</span>
              </div>
              <p className="text-sm text-gray-600">
                of agricultural households own less than two hectares of land
              </p>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
              <div className="flex items-center mb-2">
                <div className="bg-green-100 rounded-full p-2 mr-2">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <span className="font-bold text-green-800">35%</span>
              </div>
              <p className="text-sm text-gray-600">
                increase in productivity with access to modern equipment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
