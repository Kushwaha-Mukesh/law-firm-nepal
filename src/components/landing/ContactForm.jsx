const ContactForm = () => {
  return (
    <div className="flex-1 space-y-7">
      <h1 className="text-3xl font-playfair text-primary-100">Contact Us</h1>
      <div className="w-full">
        <form className="w-full">
          <div className="full space-y-[19px]">
            <div className="">
              <input
                className="w-full px-2 py-3 bg-[#F5F5F5] placeholder:text-[16px] placeholder:font-[300] placeholder:text-[#000000b7] focus:outline-none hover:outline hover:outline-2 hover:outline-secondary-100 "
                type="text"
                placeholder="Your Name*"
              />
            </div>
            <div className="">
              <input
                className="w-full px-2 py-3 bg-[#F5F5F5] placeholder:text-[16px] placeholder:font-[300] placeholder:text-[#000000b7] focus:outline-none hover:outline hover:outline-2 hover:outline-secondary-100 "
                type="text"
                placeholder="Your Email*"
              />
            </div>
            <div className="">
              <input
                className="w-full px-2 py-3 bg-[#F5F5F5] placeholder:text-[16px] placeholder:font-[300] placeholder:text-[#000000b7] focus:outline-none hover:outline hover:outline-2 hover:outline-secondary-100 "
                type="text"
                placeholder="Your Phone*"
              />
            </div>
            <div className="">
              <input
                className="w-full px-2 py-3 bg-[#F5F5F5] placeholder:text-[16px] placeholder:font-[300] placeholder:text-[#000000b7] focus:outline-none hover:outline hover:outline-2 hover:outline-secondary-100  focus:outline-none hover:outline hover:outline-2 hover:outline-secondary-100 "
                type="text"
                placeholder="Your Subject"
              />
            </div>
            <div className="">
              <textarea
                className="w-full px-2 py-3 bg-[#F5F5F5] placeholder:text-[16px] placeholder:font-[300] placeholder:text-[#000000b7] focus:outline-none hover:outline hover:outline-2 hover:outline-secondary-100 "
                rows={4}
                placeholder="Message/Comment/Questions*"
              />
            </div>
          </div>
          <button className="px-5 py-2 rounded-sm bg-primary-100 mt-2 text-white hover:opacity-95 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
