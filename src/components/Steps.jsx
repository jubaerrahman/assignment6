const Steps = () => {
  return (
    <div className="py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold">
        Get Started In 3 Steps
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10 px-6 md:px-12">
        <div className="p-5 border rounded">
          <h3>Create Account</h3>
        </div>

        <div className="p-5 border rounded">
          <h3>Choose Products</h3>
        </div>

        <div className="p-5 border rounded">
          <h3>Start Creating</h3>
        </div>
      </div>
    </div>
  );
};

export default Steps;