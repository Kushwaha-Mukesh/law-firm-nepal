import { FaFacebook } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-10 px-10 md:px-20 bg-[#151821] text-[#b1b1bb]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-[#FF533D]">
            Notary & Translation <br />
            Nepal
          </h1>
          <p className="">
            We offer fast, reliable and efficient <br /> notary & translation
            sevices.
          </p>
        </div>
        <div className="flex flex-col text-sm gap-2">
          <h3 className="text-xl border-b-2 w-fit">Quick Links</h3>
          <span>FAQs</span>
          <span>Blog</span>
          <span>Testimonials</span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
        <div className="flex flex-col text-sm gap-2">
          <h3 className="text-xl border-b-2 w-fit">Services</h3>
          <span>Documents Notarization</span>
          <span>Documents Translation</span>
          <span>
            Foreign Marriage <br /> Acts/Laws Translation
          </span>
          <span>Contract Management</span>
          <span>Legal Documents Translator</span>
          <span>Agreement Preparation / Translator</span>
        </div>
        <div className="flex flex-col text-sm gap-2">
          <h3 className="text-xl border-b-2 w-fit">Contact Us</h3>
          <span>Way to Ghattekulo</span>
          <span>Anamnagar</span>
          <span>Kathmandu</span>
          <span>Phone: +977 9847297490</span>
        </div>
      </div>
      <div className="flex justify-between pt-6 border-t-2">
        <p>
          Please feel free <br className="sm:hidden" /> to get in touch with us
        </p>
        <p className="flex gap-4 md:gap-6 text-lg md:text-xl">
          <FaFacebook /> <MdOutlineWhatsapp /> <FaInstagram /> <FaXTwitter />
        </p>
      </div>
    </div>
  );
};

export default Footer;
