import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-green-800 text-center">
          About FarmShare
        </h1>

        <div className="relative h-80 w-full mb-12 rounded-xl overflow-hidden">
          <Image
            src="/about_page_image.jpg"
            alt="Indian farmers working together"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-6">
            FarmShare is revolutionizing Indian agriculture by providing a
            platform where farmers can rent and lend farming equipment
            seamlessly. Our mission is to empower small and marginal farmers
            with access to modern agricultural tools without the burden of
            ownership costs.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700 mt-10">
            Our Story
          </h2>
          <p className="text-gray-700 mb-6">
            Founded in 2023, FarmShare was born from a simple observation: while
            many farmers struggle to afford modern equipment, others have
            machinery sitting idle for significant portions of the year. By
            connecting these two groups, we create a win-win situation that
            increases productivity and income across farming communities.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700 mt-10">
            Our Impact
          </h2>
          <p className="text-gray-700 mb-6">
            Since our inception, FarmShare has helped over 5,000 farmers access
            equipment they otherwise couldn't afford. We've facilitated more
            than 12,000 equipment rentals, resulting in an average productivity
            increase of 35% for participating farmers. Equipment owners have
            earned supplemental income averaging ₹45,000 annually through our
            platform.
          </p>

          <div className="bg-green-50 p-8 rounded-xl mt-12 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-800">
              Join Our Growing Community
            </h3>
            <p className="text-gray-700 mb-6">
              Whether you're looking to rent equipment or make extra income from
              your machinery, FarmShare welcomes you to our community of
              forward-thinking farmers.
            </p>
            <Link href="/signup">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
                Become a Member
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
