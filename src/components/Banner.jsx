import hero from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
          New Tools Available
        </span>

        <h1 className="text-3xl md:text-5xl font-bold mt-5">
          Supercharge Your Digital Workflow
        </h1>

        <p className="text-gray-500 mt-4">
          Access AI tools and assets in one place
        </p>

        <div className="flex gap-4 mt-6">
          <button className="bg-purple-600 text-white px-5 py-2 rounded-full">
            Explore
          </button>

          <button className="border px-5 py-2 rounded-full">
            Demo
          </button>
        </div>
      </div>

      <div className="flex-1">
        <img src={hero} className="rounded-xl w-full" />
      </div>
    </div>
  );
};

export default Banner;