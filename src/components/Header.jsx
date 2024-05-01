const Header = () => {
  return (
    <div className="flex justify-around items-center pt-4">
      <div>
        <img
          className="w-20 h-20 rounded-full"
          src="law-firm-logo.jpg"
          alt="logo-img"
        />
      </div>
      <div className="w-1/2 flex justify-between">
        <span className="hover:bg-[#cc998b] rounded-lg text-[#F5F5DC] px-2 py-1 cursor-pointer">
          Home
        </span>
        <span className="hover:bg-[#cc998b] rounded-lg text-[#F5F5DC] px-2 py-1 cursor-pointer">
          About Us
        </span>
        <span className="hover:bg-[#cc998b] rounded-lg text-[#F5F5DC] px-2 py-1 cursor-pointer">
          Services
        </span>
        <span className="hover:bg-[#cc998b] rounded-lg text-[#F5F5DC] px-2 py-1 cursor-pointer">
          Contact Us
        </span>
      </div>
    </div>
  );
};

export default Header;
