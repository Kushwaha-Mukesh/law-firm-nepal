const Contact = () => {
  return (
    <>
      <h1 className="text-3xl font-playfair text-primary-100 text-center pb-8 pt-12 bg-[#b1b1bb]">
        Contact Us
      </h1>
      <div className="space-y-7 flex flex-col md:flex md:flex-row items-center justify-center gap-4 pb-20 bg-[#b1b1bb]">
        <div className="w-full md:w-1/3">
          <p className="px-10 md:text-lg">
            Ready to discuss your legal needs? Whether you're facing a legal
            matter,seeking consultation, or have general inquiries, we're here
            to assist you every step of the way. Please feel free to send your
            message or question by filling up this form.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-10">
          <form className="w-full">
            <div className="full space-y-[19px]">
              <div className="">
                <input
                  className="w-full px-2 py-3 bg-[#d4d4dc] placeholder:text-[16px] placeholder:font-[300] placeholder:text-[#000000b7] focus:outline-none hover:outline hover:outline-2 hover:outline-secondary-100 "
                  type="text"
                  placeholder="Your Name*"
                />
              </div>
              <div className="">
                <input
                  className="w-full px-2 py-3 bg-[#d4d4dc] placeholder:text-[16px] placeholder:font-[300] placeholder:text-[#000000b7] focus:outline-none hover:outline hover:outline-2 hover:outline-secondary-100 "
                  type="text"
                  placeholder="Your Email*"
                />
              </div>
              <div className="">
                <input
                  className="w-full px-2 py-3 bg-[#d4d4dc] placeholder:text-[16px] placeholder:font-[300] placeholder:text-[#000000b7] focus:outline-none hover:outline hover:outline-2 hover:outline-secondary-100 "
                  type="text"
                  placeholder="Your Phone*"
                />
              </div>
              <div className="">
                <input
                  className="w-full px-2 py-3 bg-[#d4d4dc] placeholder:text-[16px] placeholder:font-[300] placeholder:text-[#000000b7] focus:outline-none hover:outline hover:outline-2 hover:outline-secondary-100 hover:outline-secondary-100 "
                  type="text"
                  placeholder="Your Subject"
                />
              </div>
              <div className="">
                <textarea
                  className="w-full px-2 py-3 bg-[#d4d4dc] placeholder:text-[16px] placeholder:font-[300] placeholder:text-[#000000b7] focus:outline-none hover:outline hover:outline-2 hover:outline-secondary-100 "
                  rows={4}
                  placeholder="Message/Comment/Questions*"
                />
              </div>
            </div>
            <button className="px-2 py-2 text-center w-full rounded-lg mt-2 bg-blue-500 text-white transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
