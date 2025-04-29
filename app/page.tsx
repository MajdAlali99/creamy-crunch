import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffdf2]">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-[#fff7aa] flex items-center justify-center">
              <span className="font-bold text-[#ff8c69]">CC</span>
            </div>
            <span className="font-bold text-xl">Creamy Crunch</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-800 hover:text-[#ff8c69] transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-[#ff8c69] transition-colors">
              About
            </a>
            <a href="#menu" className="text-gray-800 hover:text-[#ff8c69] transition-colors">
              Menu
            </a>
            <Button className="bg-[#ff8c69] hover:bg-[#ff7f59] text-white">Order Now</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 relative overflow-hidden">
        <div className="absolute -right-32 top-0 w-64 h-64 rounded-full bg-[#fff7aa] opacity-50"></div>
        <div className="absolute -left-32 bottom-0 w-64 h-64 rounded-full bg-[#ffdab9] opacity-50"></div>

        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Delicious Yogurt Bowls</h1>
            <p className="text-lg text-gray-700 mb-6">
              Indulge in our creamy yogurt bowls topped with fresh fruits and crunchy nuts.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#ff8c69] hover:bg-[#ff7f59] text-white">Order Now</Button>
              <Button variant="outline" className="border-[#ffdab9] text-gray-800">
                View Menu <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 rounded-full bg-[#fff7aa] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <Image
              src="/trans_bowl.png?height=400&width=400"
              alt="Yogurt Bowl"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#fff7aa]/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Creamy Crunch</h2>
            <div className="w-24 h-1 bg-[#ff8c69] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              At Creamy Crunch, we believe in serving delicious, nutritious yogurt bowls made with the freshest
              ingredients. Our journey began with a simple idea: create a perfect balance of creamy yogurt, fresh
              fruits, and crunchy nuts that not only tastes amazing but also nourishes your body.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#ffdab9] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ff8c69"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-leaf"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-700">
                We source only the freshest fruits and highest quality yogurt for our bowls.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#ffdab9] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ff8c69"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-utensils"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Handcrafted Bowls</h3>
              <p className="text-gray-700">
                Each bowl is carefully crafted to ensure the perfect balance of flavors and textures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#ffdab9] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ff8c69"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Made with Love</h3>
              <p className="text-gray-700">
                We put our heart into every bowl, ensuring you get the best experience with every bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 relative">
        <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-[#fff7aa] opacity-50"></div>
        <div className="absolute -right-32 bottom-1/4 w-64 h-64 rounded-full bg-[#ffdab9] opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
            <div className="w-24 h-1 bg-[#ff8c69] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Explore our delicious selection of yogurt bowls, each carefully crafted to provide a perfect balance of
              flavors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bowl 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64 bg-[#fff7aa]/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src="/trans.png?height=200&width=200"
                      alt="Berry Bliss Bowl"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Berry Bliss Bowl</h3>
                <p className="text-gray-700 mb-4">
                  Creamy yogurt topped with strawberries, blueberries, and a sprinkle of granola.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#ff8c69]">$8.99</span>
                  <Button variant="outline" className="border-[#ffdab9] text-gray-800">
                    Order Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Bowl 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64 bg-[#ffdab9]/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src="/trans.png?height=200&width=200"
                      alt="Tropical Paradise Bowl"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tropical Paradise Bowl</h3>
                <p className="text-gray-700 mb-4">
                  Smooth yogurt with mango, pineapple, and coconut flakes for a tropical twist.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#ff8c69]">$9.99</span>
                  <Button variant="outline" className="border-[#ffdab9] text-gray-800">
                    Order Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Bowl 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64 bg-[#ff8c69]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src="/trans.png?height=200&width=200"
                      alt="Nutty Delight Bowl"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Nutty Delight Bowl</h3>
                <p className="text-gray-700 mb-4">
                  Rich yogurt topped with almonds, walnuts, honey, and a sprinkle of cinnamon.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#ff8c69]">$10.99</span>
                  <Button variant="outline" className="border-[#ffdab9] text-gray-800">
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fff7aa]/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-full bg-[#fff7aa] flex items-center justify-center">
                <span className="font-bold text-sm text-[#ff8c69]">CC</span>
              </div>
              <span className="font-bold">Creamy Crunch</span>
            </div>
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-800 hover:text-[#ff8c69] transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-800 hover:text-[#ff8c69] transition-colors">
                About
              </a>
              <a href="#menu" className="text-gray-800 hover:text-[#ff8c69] transition-colors">
                Menu
              </a>
            </div>
            <div className="text-sm text-gray-600">© 2025 Creamy Crunch. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
