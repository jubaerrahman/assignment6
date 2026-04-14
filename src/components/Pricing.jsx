const Pricing = () => {
  return (
    <div className="py-16 text-center bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold">
        Pricing
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10 px-6 md:px-12">
        <div className="p-5 bg-white rounded shadow">
          <h3>Starter</h3>
          <h1 className="text-2xl font-bold">$0</h1>
        </div>

        <div className="p-5 text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded">
          <h3>Pro</h3>
          <h1 className="text-2xl font-bold">$29</h1>
        </div>

        <div className="p-5 bg-white rounded shadow">
          <h3>Enterprise</h3>
          <h1 className="text-2xl font-bold">$99</h1>
        </div>
      </div>
    </div>
  );
};

export default Pricing;