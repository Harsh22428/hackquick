// components/SchemesSection.tsx
export default function SchemesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore loans
          </h2>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for loans..."
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="absolute right-2 top-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-2 rounded-full hover:opacity-90">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["personal loans", "business loans", "home loans", "education loans"].map((category) => (
            <div
              key={category}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={`/assets/icons/${category.toLowerCase()}.svg`}
                  alt={category}
                  className="h-6 w-6 text-primary"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category}
              </h3>
              <p className="text-gray-600 text-sm">Explore 50+ loans</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
