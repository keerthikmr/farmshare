"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Virudhunagar",
      image: "/person_placeholder.jpeg?height=100&width=100",
      stars: 5,
      text: "I have some trouble with our tractor and we sometimes rent it out. FarmShare would be a good idea because somtimes, I can't find anyone to borrow the tools from.",
    },
    {
      name: "Muthu Rajan",
      location: "Watrap",
      image: "/person_placeholder.jpeg?height=100&width=100",
      stars: 5,
      text: "Our farm has old equipments that we can rent out. FarmShare will be very useful for us to make some side profit.",
    },
    {
      name: "Suresh Reddy",
      location: "Tirunelveli",
      image: "/person_placeholder.jpeg?height=100&width=100",
      stars: 4,
      text: "As long as the costs are reasonable, I would be happy to rent out my tractor. I have a lot of idle time and it would be nice to make some money.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div ref={ref} className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
          What Farmers Say
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Hear from farmers who have experienced the benefits of FarmShare.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative max-w-4xl mx-auto"
      >
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 z-10 hidden md:block">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12 border-green-200 text-green-600 hover:bg-green-50 hover:text-green-700"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 z-10 hidden md:block">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12 border-green-200 text-green-600 hover:bg-green-50 hover:text-green-700"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4 border-4 border-green-100">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                {[...Array(5 - testimonials[currentIndex].stars)].map(
                  (_, i) => (
                    <Star
                      key={i + testimonials[currentIndex].stars}
                      className="h-5 w-5 text-gray-300"
                    />
                  )
                )}
              </div>

              <p className="text-lg text-gray-700 mb-6">
                "{testimonials[currentIndex].text}"
              </p>

              <div>
                <p className="font-bold text-green-800">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-6 space-x-2 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10 border-green-200 text-green-600 hover:bg-green-50 hover:text-green-700"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10 border-green-200 text-green-600 hover:bg-green-50 hover:text-green-700"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
