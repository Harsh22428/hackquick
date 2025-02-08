export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">50K+</div>
        <div className="text-gray-300">Active Users</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">200+</div>
        <div className="text-gray-300">Loans Offered</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">1M+</div>
        <div className="text-gray-300">Applications</div>
      </div>
    </div>
  );
}
