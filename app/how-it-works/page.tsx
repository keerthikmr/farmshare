import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function HowItWorksPage() {
  const steps = [
    {
      title: "Browse",
      description:
        "Explore available tools listed by fellow farmers in your area. Filter by equipment type, distance, and availability dates.",
      image: "/browse_image.jpg?height=300&width=400",
    },
    {
      title: "Book",
      description:
        "Reserve the equipment you need for your desired timeframe. Secure payment through our trusted platform.",
      image: "/book_image.png?height=300&width=400",
    },
    {
      title: "Use",
      description:
        "Collect and utilize the tool to enhance your farming operations. Get support if you need help operating the equipment.",
      image: "/use_image.jpg?height=300&width=400",
    },
    {
      title: "Return",
      description:
        "Return the equipment after use, ready for the next farmer. Rate your experience to help build trust in our community.",
      image: "/return_image.png?height=300&width=400",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-800">
          How FarmShare Works
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
          Our simple four-step process makes sharing agricultural equipment
          easy, efficient, and beneficial for everyone involved.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
              <div className="relative h-48 w-full">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <span className="text-green-700 font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-green-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-800 text-center">
          Benefits for Everyone
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 text-green-700">
              For Equipment Owners
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Generate income from idle equipment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Offset your equipment investment costs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Help fellow farmers in your community</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Secure payment and equipment protection</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 text-green-700">
              For Equipment Renters
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Access equipment without high purchase costs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Try before you buy expensive machinery</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Increase farm productivity with modern tools</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Flexible rental periods to match your needs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
