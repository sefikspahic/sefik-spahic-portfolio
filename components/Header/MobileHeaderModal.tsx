import {faBars, faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useRef} from "react";
import LinksHeader from "./LinksHeader";
import {useRouter} from "next/router";

export interface HeaderModalProps {
  toggleNavigation: any;
  navigation: boolean;
}

const MobileHeaderModal = ({
  navigation,
  toggleNavigation,
}: HeaderModalProps) => {
  const router = useRouter();
  const lagRef = useRef<any>();
  const lagCircleRef = useRef<any>();

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        navigation &&
        lagRef.current &&
        !lagCircleRef.current.contains(e.target) &&
        !lagRef.current.contains(e.target)
      ) {
        toggleNavigation(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [navigation]);

  return (
    <div
      ref={lagCircleRef}
      className="w-full h-auto max-w-[314px]  bg-[#24282c]   border-r-[3px] border-r-[#18D26F] fixed   top-0 left-0 bottom-0 z-[22] overflow-y-auto px-[24px] sm:px-[32px] pt-[53px] text-white"
    >
      <div ref={lagRef} className="flex flex-col items-start">
        <button
          type="button"
          onClick={() => toggleNavigation(!navigation)}
          className="z-[5] relative flex justify-end w-full"
        >
          {!navigation ? (
            <FontAwesomeIcon icon={faBars} size="xl" color="white" />
          ) : (
            <FontAwesomeIcon icon={faClose} size="xl" color="white" />
          )}
        </button>
        <button
        className="h-[50px] tracking-[0.15em]  border-b-[1px] w-full text-left"
          onClick={() => {
            toggleNavigation(!navigation);
            router.push("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            toggleNavigation(!navigation);
            router.push("/about");
          }}
          className="h-[50px] tracking-[0.15em]  border-b-[1px] w-full text-left"
        >
          About
        </button>

        <button
          onClick={() => {
            toggleNavigation(!navigation);
            router.push("/projects");
          }}
          className="h-[50px] tracking-[0.15em]  border-b-[1px] w-full text-left"
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default MobileHeaderModal;
