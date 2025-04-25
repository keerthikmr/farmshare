"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import BenefitsSection from "@/components/benefits-section"
import StatsPreview from "@/components/stats-preview"
import HowItWorks from "@/components/how-it-works"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">The Challenge</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            In India, approximately 89.4% of agricultural households own less than two hectares of land. High costs of
            agricultural machinery often make ownership unfeasible, leading to reliance on outdated methods and reduced
            productivity.
          </p>
        </div>

        <FeatureSection />
        <BenefitsSection />
        <StatsPreview />
        <HowItWorks />
        <TestimonialSection />

        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Join the FarmShare Community</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700">
            Be part of a growing network that's transforming agriculture through shared resources. Experience the
            benefits of collaboration, cost savings, and increased productivity.
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-green-50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-green-800 font-medium">
            © 2025 FarmShare. Empowering Indian Farmers Through Shared Tools.
          </p>
        </div>
      </div>

      <div className="fixed bottom-6 right-6">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg"
        >
          <ChevronDown className="h-6 w-6 transform rotate-180" />
        </Button>
      </div>
    </div>
  )
}
