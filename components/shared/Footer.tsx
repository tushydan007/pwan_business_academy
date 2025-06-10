import React from "react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import Image from "next/image";
import instagram from "@/public/assets/instagram.png";
import facebook from "@/public/assets/facebook.png";
import twitter from "@/public/assets/twitter.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-red-700 h-full w-full p-5 text-white px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="py-5 flex-1">
          <h2 className="font-bold mb-5 text-2xl">Quick Links</h2>
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Courses</p>
          <p className="cursor-pointer">Events</p>
          <p className="cursor-pointer">Shop</p>
        </div>
        <div className="py-5 flex-1">
          <h2 className="font-bold mb-5 text-2xl">Programs</h2>
          <p className="cursor-pointer pb-5">
            Affiliate Mentorship <br />
            Program (AMP)
          </p>
          <p className="cursor-pointer pb-5">
            Employability and Workplace <br /> Readiness Program (EWRP)
          </p>
          <p className="cursor-pointer pb-5">
            Culture and Accountability <br /> Immersion Program (CAIP)
          </p>
          <p className="cursor-pointer pb-5">
            High Performance Team <br /> Player Program (HTPP)
          </p>
        </div>
        <div className="py-5 flex-1">
          <h2 className="font-bold mb-5 text-2xl">Contact Us</h2>
          <p className="cursor-pointer pb-5 flex items-center gap-x-2">
            <MapPin className="-mt-10" /> PWAN BUSINESS ACADEMY,
            <br />
            KM 42 Lekki-Epe Expressway,
            <br />
            Lagos Nigeria.
          </p>
          <p className="cursor-pointer pb-5 flex items-center gap-x-2">
            <Mail /> info@pwanacademy.com
          </p>
        </div>
        <div className="py-5 flex-1">
          <h2 className="font-bold mb-5 text-xl">Follow Us</h2>
          <div className="flex gap-x-3">
            <Link href="https://instagram.com">
              <Image
                src={instagram}
                alt="instagram"
                className="cursor-pointer"
              />
            </Link>
            <Link href="https://facebook.com">
              <Image src={facebook} alt="facebook" className="cursor-pointer" />
            </Link>
            <Link href="https://x.com">
              <Image src={twitter} alt="twitter" className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-xs">2025 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
