// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Empowering Citizens Through Digital Governance
            </h1>
            <p className="text-lg text-gray-200 mb-8">
            India’s first RBI-aligned platform for fair, transparent, and ethical digital lending
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                Explore Loans
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all">
                Watch Video
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/images/pic1.png"
              alt="Digital India"
              className="floating-image w-full max-w-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
