import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white px-6 md:px-12 py-16">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">
        
        <div className="col-span-2">
          <h1 className="text-2xl font-bold">DigiTools</h1>
          <p className="text-gray-400 mt-3 text-sm max-w-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Social Links</h4>
          <div className="flex gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full">
              <FaFacebookF />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full">
              <FaTwitter />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full">
              <FaGithub />
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm max-w-6xl mx-auto">
        
        <p>© 2026 DigiTools. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>

      </div>

    </div>
  );
};

export default Footer;