const Footer = () => {
  return (
    <div className="bg-[#101727] text-white px-6 md:px-12 py-12">
      <h1 className="text-xl font-bold">DigiTools</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-6 text-gray-400">
        <div>
          <p>Features</p>
          <p>Pricing</p>
        </div>

        <div>
          <p>About</p>
          <p>Careers</p>
        </div>

        <div>
          <p>Support</p>
          <p>Docs</p>
        </div>
      </div>

      <p className="mt-10 text-gray-500 text-sm">
        © 2026 DigiTools
      </p>
    </div>
  );
};

export default Footer;