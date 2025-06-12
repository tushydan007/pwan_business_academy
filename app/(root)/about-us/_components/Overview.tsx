import Image from "next/image";
import React from "react";
import abt from "@/public/assets/abt.png";

const Overview = () => {
  return (
    <section className="py-24 px-10">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex-1 mx-auto flex justify-center relative">
          <Image
            src={abt}
            alt="about PBA"
            width={500}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:px-10 flex-1">
          <h2 className="text-red-600 font-semibold text-2xl lg:text-4xl md:text-3xl md:mb-10 my-4">
            Overview
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse
            repellendus qui perferendis ipsum rem deserunt perspiciatis, animi
            cupiditate quos quas sunt, ducimus nesciunt magnam consequuntur
            laudantium. Impedit voluptas consectetur nesciunt hic nulla corrupti
            provident, deserunt magnam aperiam tenetur non quibusdam tempora
            blanditiis quis praesentium id. Rerum officiis quibusdam blanditiis
            placeat rem eaque omnis aperiam odio repellendus? Officiis possimus
            commodi quis mollitia iste itaque corporis suscipit quas eveniet,
            nulla earum.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
            maxime? Magnam, earum commodi! Optio qui officia quisquam,
            repudiandae saepe inventore autem deserunt commodi excepturi cumque
            eligendi dignissimos adipisci quibusdam amet ipsa quas facilis
            ipsam. Rerum, ratione sint ad dolore quo assumenda dolorem maiores
            minima porro impedit soluta repellendus in optio quibusdam officiis
            voluptatum odio recusandae sequi accusantium necessitatibus. Labore
            quas perferendis praesentium in totam vero autem, consectetur a eos
            asperiores!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
