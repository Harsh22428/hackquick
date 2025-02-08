// components/Testimonials.tsx
export default function Testimonials() {
  const testimonials = [
    {
      text: "This platform simplified the entire process of applying for agricultural subsidies. Got approval within 15 days!",
      author: "Ramesh Patel",
      role: "Farmer, Gujarat",
    },
    {
      text: "As a student, I found the perfect scholarship scheme through this portal. Highly recommended!",
      author: "Priya Sharma",
      role: "Student, Delhi",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Hear from citizens who've benefited through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
