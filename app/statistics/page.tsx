"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function StatisticsPage() {
  const statistics = [
    {
      id: 1,
      url: "/distribution_of_farms.jpg?height=400&width=600",
      title: "Distribution of farms",
    },
    {
      id: 2,
      url: "/global-agriculture-equipment-market.png?height=400&width=600",
      title: "Global agriculture equipment market",
    },
    {
      id: 3,
      url: "/globe-image-global-agricultural-and-farm-machinery-market-20.png?height=400&width=600",
      title: "Global agricultural and farm machinery market",
    },
    {
      id: 4,
      url: "/Infography_Global-Agriculture-Equipment-Market.png?height=400&width=600",
      title: "Global agriculture equipment market",
    },
    {
      id: 5,
      url: "/NFMWinfog.png?height=400&width=600",
      title: "Global agriculture equipment market",
    },
    {
      id: 6,
      url: "/tracktor_sales.jpeg?height=400&width=600",
      title: "Tractor sales in India",
    },
    {
      id: 6,
      url: "/rural_wages.png?height=400&width=600",
      title: "Rural wages in India",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-800">
          FarmShare Statistics
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
          Data-driven insights into India's agricultural landscape and the
          impact of equipment sharing.
        </p>
      </motion.div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={stat.url}
                    alt={stat.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-green-800">
                    {stat.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-800">
            Data Highlights
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              • Agricultural sector employs 43% of India's workforce but
              contributes only 16% to the national GDP
            </li>
            <li>
              • Only 40% of farmer households have access to information on
              modern farming technologies
            </li>
            <li>
              • Equipment sharing can reduce capital expenditure by up to 65%
              for small farmers
            </li>
            <li>
              • FarmShare users report an average 35% increase in productivity
              after accessing modern equipment
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
