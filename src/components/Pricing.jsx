const Pricing = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 px-6 md:px-12 max-w-6xl mx-auto">
        
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-lg">Starter</h3>
          <p className="text-gray-500 text-sm">Perfect for getting started</p>

          <h1 className="text-3xl font-bold mt-4">$0<span className="text-sm">/Month</span></h1>

          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-full">
            Get Started Free
          </button>
        </div>

        <div className="p-8 rounded-2xl text-white bg-gradient-to-r from-purple-600 to-pink-500 relative scale-105">
          
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="font-semibold text-lg">Pro</h3>
          <p className="text-sm opacity-80">Best for professionals</p>

          <h1 className="text-3xl font-bold mt-4">$29<span className="text-sm">/Month</span></h1>

          <ul className="mt-6 space-y-2 text-sm">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="w-full mt-6 bg-white text-purple-600 py-2 rounded-full">
            Start Pro Trial
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-lg">Enterprise</h3>
          <p className="text-gray-500 text-sm">For teams and businesses</p>

          <h1 className="text-3xl font-bold mt-4">$99<span className="text-sm">/Month</span></h1>

          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-full">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;