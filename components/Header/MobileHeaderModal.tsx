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
      className="w-full h-auto max-w-[314px] bg-[#FFFFFF] fixed top-0 left-0 bottom-0 z-[22] overflow-y-auto px-[24px] sm:px-[32px] pt-[53px] text-black"
    >
      <div ref={lagRef} className="flex flex-col items-start">
        <button
          type="button"
          onClick={() => toggleNavigation(!navigation)}
          className="z-[5] relative"
        >
          {!navigation ? (
            <FontAwesomeIcon icon={faBars} size="xl" color="black" />
          ) : (
            <FontAwesomeIcon icon={faClose} size="xl" color="black" />
          )}
        </button>
        <button
          onClick={() => {
            toggleNavigation(!navigation);
            router.push("/");
          }}
        >
          home
        </button>
        <button
          onClick={() => {
            toggleNavigation(!navigation);
            router.push("/about");
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            toggleNavigation(!navigation);
            router.push("/projects");
          }}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default MobileHeaderModal;
