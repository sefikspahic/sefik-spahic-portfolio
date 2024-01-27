import React, {useEffect, useRef, useState} from "react";
import LinksHeader from "./LinksHeader";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faClose} from "@fortawesome/free-solid-svg-icons";
import MobileHeaderModal from "./MobileHeaderModal";
import Image from "next/image";
import Logo from "../../public/assets/img/SefikSpahicLogo.png";
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  const [navigation, toggleNavigation] = useState(false);

  return (
    <header className="bg-[#000000] border-b-[1px] border-solid h-[80px] flex items-center justify-start text-left shadow-lg">
      <div className="hidden md:flex md:items-center max-w-[1440px] w-full mx-auto">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Sefik Spahic"
            className="max-h-[60px] w-auto"
          />
        </Link>
        <nav className="w-full">
          <ul className="w-full flex justify-end">
            <LinksHeader
              active={""}
              title={"Home"}
              router={router}
              location="/"
            />
            <LinksHeader
              active="about"
              title={"About"}
              router={router}
              location="/about"
            />
            <LinksHeader
              active="projects"
              title={"Projects"}
              router={router}
              location="/projects"
            />
          </ul>
        </nav>
      </div>
      <div className="block md:hidden mx-[20px] min-w-[40px]">
        <button
          type="button"
          onClick={() => toggleNavigation(!navigation)}
          className="z-[5] relative"
        >
          {!navigation ? (
            <FontAwesomeIcon icon={faBars} size="xl" color="white" />
          ) : (
            <FontAwesomeIcon icon={faClose} size="xl" color="white" />
          )}
        </button>
      </div>
      {navigation && (
        <MobileHeaderModal
          navigation={navigation}
          toggleNavigation={toggleNavigation}
        />
      )}
    </header>
  );
};

export default Header;
