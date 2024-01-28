import { footerText1, footerText2, socials } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-[70px]">
      <div className="container  gap-6  lg:gap-10  grid grid-cols-1  lg:grid-cols-4">
        <div className="flex flex-col gap-4 text-start">
          <Image
            className="cursor-pointer"
            src={"/logo.svg"}
            alt="logo"
            width={182}
            height={52}
          />

          <p className="block max-w-[400px] text-[14px] font-normal leading-[31px] text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="flex items-center gap-5">
            {socials.map(({ image, alt }) => (
              <Image
                className="cursor-pointer"
                key={image}
                src={image}
                alt={alt}
                width={25}
                height={25}
              />
            ))}
          </div>

          <p className=" text-[13px] text-gray-500 font-normal mt-4 ">
            © 2021 . All rights reserved.
          </p>
        </div>

        <div>
          <h6 className="text-dark bold-24 cursor-pointer">Take a tour</h6>

          <ul className="mt-2">
            {footerText1.map((text) => (
              <li
                key={text}
                className="  regular-20 text-dark py-4 cursor-pointer "
              >
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-dark bold-24">Our Company</h6>

          <ul className="mt-2">
            {footerText2.map((text) => (
              <li key={text} className="regular-20 text-dark py-4">
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className=" flex flex-col gap-5 text-start">
          <h6 className="text-dark bold-24 ">Subscribe</h6>

          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="input_field"
            />

            <Image
              src={"/right-arrow.svg"}
              alt={"arrow"}
              width={35}
              height={35}
              className="right-arrow"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
