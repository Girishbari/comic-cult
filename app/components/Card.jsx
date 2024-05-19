import Image from "next/image";
import React from "react";
//TODO: later taking from database
const Card = ({data}) => {
  return (
    <div className=" w-full flex gap-2 items-center ">
      <div className="relative w-[500px] h-48">
        <Image src={data.images} className=" rounded-lg object-cover" fill />
      </div>
      <div>
        <p className=" text-sm">FEATURED</p>
        <p className=" font-bold text-white">
            {data.title}
        </p>
        <p className=" text-sm md:text-base  ">
          We spoke with Dani Colman and Rachel Weiss, the creative duo behind
          the new middle grade graphic novel
        </p>
        <div className=" py-1 px-2 text-sm mt-2 bg-[#333338] w-fit text-white rounded-lg">
            Read more
        </div>
      </div>
    </div>
  );
};

export default Card;
