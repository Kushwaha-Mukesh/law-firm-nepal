"use client";

import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";

const ContactRoot = () => {
  return (
    <div className="w-full px-2 md:px-4">
      <div className="w-full sm:max-w-[1200px] flex flex-col gap-y-12 md:flex-row mx-auto gap-x-2 pt-4">
        <ContactForm />
        <GetInTouch />
      </div>
    </div>
  );
};

export default ContactRoot;
