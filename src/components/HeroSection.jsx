const HeroSection = () => {
  return (
    <div className="h-[500px] flex flex-col justify-center gap-4 pl-8 md:pl-24 mt-8">
      <p className="text-xs sm:text-sm text-[#F5F5DC]">
        FOUNDED BY EXPERT LAWYERS
      </p>
      <h1 className="text-2xl sm:text-3xl text-[#F5F5DC]">
        Online Notary Service in Nepal
      </h1>
      <p className="text-lg sm:text-xl text-[#F5F5DC]">
        Unlocking Authenticity: Your Trusted Notary and Translation Partner
      </p>
      <button className="self-start text-lg border-[#864c3b] bg-[#864c3b] text-[#F5F5DC] px-4 py-2 rounded-lg">
        Our Services
      </button>
    </div>
  );
};

export default HeroSection;
