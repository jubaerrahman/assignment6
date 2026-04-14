const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-10 flex flex-col md:flex-row justify-around text-center gap-6">
      <div>
        <h1 className="text-3xl font-bold">50K+</h1>
        <p>Users</p>
      </div>

      <div>
        <h1 className="text-3xl font-bold">200+</h1>
        <p>Tools</p>
      </div>

      <div>
        <h1 className="text-3xl font-bold">4.9</h1>
        <p>Rating</p>
      </div>
    </div>
  );
};

export default Stats;