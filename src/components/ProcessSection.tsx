// components/ProcessSection.tsx
export default function ProcessSection() {
  const steps = [
    {
      title: "Discover Schemes",
      description: "Explore curated government programs matching your needs",
      icon: "/assets/icons/search.svg",
    },
    {
      title: "Check Eligibility",
      description: "Quick assessment for scheme qualification",
      icon: "/assets/icons/checklist.svg",
    },
    {
      title: "Apply Online",
      description: "Digital application with document upload",
      icon: "/assets/icons/apply.svg",
    },
    {
      title: "Track Status",
      description: "Real-time application monitoring",
      icon: "/assets/icons/track.svg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Easy-to-follow steps to access government benefits and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="p-6 bg-gray-50 rounded-xl text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-8 h-8 text-primary"
                />
              </div>
              <div className="mb-2">
                <span className="bg-primary text-white w-6 h-6 rounded-full text-sm flex items-center justify-center mx-auto">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
