"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function StatsPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    {
      value: "43%",
      label: "of India's workforce is employed in agriculture",
    },
    {
      value: "16%",
      label: "contribution to the national GDP from agriculture",
    },
    {
      value: "40%",
      label: "of farmer households have access to modern farming technologies",
    },
    {
      value: "65%",
      label: "cost reduction through equipment sharing",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div ref={ref} className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Data-Driven Insights</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Understanding the agricultural landscape in India and the impact of our solution.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md text-center">
            <p className="text-4xl font-bold text-green-600 mb-2">{stat.value}</p>
            <p className="text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center">
        <Link href="/statistics">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700">
            View All Statistics <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
