import banner from "../assets/images/banner.png";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-10">
      
      <div className="flex-1">
        
        <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
          New: AI-Powered Tools Available
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
          Supercharge Your <br /> Digital Workflow
        </h1>

        <p className="text-gray-500 mt-4 max-w-md leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          
          <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full">
            Explore Products →
          </button>

          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500 text-purple-600 bg-transparent">
            <FaPlay className="text-sm" />
            Watch Demo
          </button>

        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={banner}
          className="w-full max-w-md rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;