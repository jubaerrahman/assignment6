import { FaUser, FaBox, FaRocket } from "react-icons/fa";

const Steps = () => {
  return (
    <div className="py-20 bg-[#f8fafc]">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 px-6 md:px-12 max-w-6xl mx-auto">
        
        <div className="bg-white p-8 rounded-2xl text-center relative shadow-sm">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            01
          </span>

          <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-xl mb-4">
            <FaUser />
          </div>

          <h3 className="font-semibold text-lg">Create Account</h3>
          <p className="text-gray-500 text-sm mt-2">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl text-center relative shadow-sm">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            02
          </span>

          <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-xl mb-4">
            <FaBox />
          </div>

          <h3 className="font-semibold text-lg">Choose Products</h3>
          <p className="text-gray-500 text-sm mt-2">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl text-center relative shadow-sm">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            03
          </span>

          <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-xl mb-4">
            <FaRocket />
          </div>

          <h3 className="font-semibold text-lg">Start Creating</h3>
          <p className="text-gray-500 text-sm mt-2">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Steps;