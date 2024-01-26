import React, {useEffect, useRef, useState} from "react";
import LinksHeader from "./LinksHeader";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faClose} from "@fortawesome/free-solid-svg-icons";
import MobileHeaderModal from "./MobileHeaderModal";

const Header = () => {
  const router = useRouter();
  const [navigation, toggleNavigation] = useState(false);


  return (
    <header className="bg-[#323232]/70 h-[80px] flex items-center justify-start text-left shadow-lg">
      <div className="hidden md:flex max-w-[1440px] w-full mx-auto">
        <nav className="w-full">
          <ul className="w-full flex justify-end">
            <LinksHeader
              active={""}
              title={"home"}
              router={router}
              location="/"
            />
            <LinksHeader
              active="about"
              title={"about"}
              router={router}
              location="/about"
            />
            <LinksHeader
              active="projects"
              title={"projects"}
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
