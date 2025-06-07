import React from "react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-red-700 h-full w-full flex flex-col md:flex-row justify-between p-5 text-white px-6 md:px-20">
      <div className="py-5">
        <h2 className="font-bold mb-5 text-2xl">Quick Links</h2>
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Courses</p>
        <p className="cursor-pointer">Events</p>
        <p className="cursor-pointer">Shop</p>
      </div>
      <div className="py-5">
        <h2 className="font-bold mb-5 text-2xl">Programs</h2>
        <p className="cursor-pointer pb-5">Advanced Management Program</p>
        <p className="cursor-pointer pb-5">
          Entreprenuership and wealth <br /> retention program
        </p>
        <p className="cursor-pointer pb-5">Certified Associate Investment</p>
      </div>
      <div className="py-5">
        <h2 className="font-bold mb-5 text-2xl">Contact Us</h2>
        <p className="cursor-pointer pb-5 flex items-center gap-x-2">
          <MapPin className="-mt-10" /> Floor 1 to 5, KM 42,Puri Mall Building,
          <br />
          Oko Ado, Leki Epe Expressway,
          <br /> Lagos State
        </p>
        <p className="cursor-pointer pb-5 flex items-center gap-x-2">
          <Mail /> info@pwanacademy.com
        </p>
      </div>
      <div className="py-5">
        <h2 className="font-bold mb-5 text-xl">Follow Us</h2>
        <p className="cursor-pointer pb-5">Home</p>
        <p className="cursor-pointer pb-5">Courses</p>
        <p className="cursor-pointer pb-5">Events</p>
        <p className="cursor-pointer pb-5">Shop</p>
      </div>
    </div>
  );
};

export default Footer;
