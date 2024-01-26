import React from 'react'
import {FaWhatsapp} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {SiGmail} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-solid border-[#696969] w-full ">
      <div className="lg:max-w-[1440px] mx-auto h-[60px]  flex items-center justify-center sm:justify-between px-[24px]">
        <div className="hidden sm:flex">
          <div className="text-center py-4 text-[#dedede;]">
            &copy; {new Date().getFullYear()} Šefik Spahić
          </div>
        </div>
        <div className="flex space-x-[20px]">
          <a
            href={`https://wa.me/${+38762409969}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-green-500 hover:text-white" size={30} />
          </a>
          <a
            href={`https://www.linkedin.com/in/%C5%A1efik-spahi%C4%87/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-500 hover:text-white" size={30} />
          </a>
          <a
            href={`mailto:${"spahicsefik@gmail.com"}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail className="text-red-500 hover:text-white" size={30} />
          </a>
          <a
            href={`https://github.com/sefikspahic`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white hover:text-black" size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer