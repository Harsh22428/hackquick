export const PartnerBanks = () => {
  const stats = [
    { number: "8+", label: "Ministries" },
    { number: "10+", label: "Nodal Agencies" },
    { number: "200+", label: "Lenders on Platform" },
  ];

  const banks = [
    {
      name: "DigiLocker",
      subtext: "Document Verification",
      image: "/assets/images/digilocker.jpg",
    },
    { name: "RBI", subtext: "Banks", image: "/assets/images/rbi.png" },
    { name: "AA ", subtext: "Banks", image: "/assets/images/sahamati.png" },
    {
      name: "SEBI",
      subtext: "Banks",
      image: "/assets/images/sebi.png",
    },
    {
      name: "kyc",
      subtext: "Banks",
      image: "/assets/images/kyc.png",
    },
    {
      name: "cibil",
      subtext: "Banks",
      image: "/assets/images/cibil.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section (Stats and Description) */}
        <div className="flex-1">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Digital Intigrations
            </h1>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Various Ministries, Nodal Agencies and Lenders came together on a
              single Platform to ensure fast, smooth and secure subsidy availing
              process for beneficiaries.
            </p>

            {/* Stats Grid */}
            <div className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-blue-600">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Banks Grid) */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banks.map((bank) => (
              <div
                key={bank.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src={bank.image}
                  alt={bank.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                {/* <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Lenders</p>
                  <p className="text-sm text-gray-400">
                    Includes {bank.subtext}
                  </p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
