const Models = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold">
        Ready To Transform Your Workflow?
      </h2>

      <p className="mt-3 text-sm md:text-base opacity-90 max-w-xl mx-auto">
        Join thousands of professionals who are already using Digitools to work smarter.
        Start your free trial today.
      </p>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full">
          Explore Products
        </button>

        <button className="border border-white px-6 py-2 rounded-full">
          View Pricing
        </button>

      </div>

      <p className="mt-4 text-xs opacity-80">
        14-day free trial · No credit card required · Cancel anytime
      </p>

    </div>
  );
};

export default Models;