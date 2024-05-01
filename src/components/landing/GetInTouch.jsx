import { Fields } from "@/utils/constant";
import React from "react";

const GetInTouch = () => {
  return (
    <div className="flex-1 space-y-5">
      <h1 className="text-3xl font-playfair text-primary-100">Get In Touch</h1>
      <div className="pl-2 space-y-3">
        <p className="text-xl font-bold text-secondary-100">Notary Nepal</p>
        <ul>
          {Fields?.map((item, idx) => (
            <li
              key={item?.id}
              className="w-full flex items-center gap-x-5 pl-1 py-[20px] border-b border-[#0000002c]"
            >
              <span className="font-semibold">{item?.title}</span>
              <span className="font-[300] text-[#000000dc]">
                {item?.content}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GetInTouch;
