export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-8 leading-tight">
            HOME PAGE
          </h1>

          {/* Welcome Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Welcome to{" "}
              <span className="text-blue-600 font-bold">work togtehr</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Connect with contractors and sub-contractors to easily bid for
              jobs, quote to customers, complete them, and invoice with ease,
              all in one spot.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
          <button
            type="button"
            className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out min-w-[140px]"
          >
            <span className="relative z-10">Login</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out min-w-[140px]">
            <span className="relative z-10">Sign Up</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Optional: Feature highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Easy Bidding</h3>
            <p className="text-gray-600 text-sm">
              Submit competitive bids quickly and efficiently
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Smart Quoting</h3>
            <p className="text-gray-600 text-sm">
              Generate professional quotes for your customers
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-purple-500 rounded-sm"></div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Simple Invoicing
            </h3>
            <p className="text-gray-600 text-sm">
              Handle payments and invoicing seamlessly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
