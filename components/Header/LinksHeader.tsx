import Link from "next/link";
import React from "react";

export interface HeaderLinksProps {
  router: {
    pathname: string;
    locale?: string | undefined;
  };
  active: string;
  title: string;
  location: string;
}

const LinksHeader = ({router, active, title, location}: HeaderLinksProps) => {
  const activeLink = (firstSegment: string) => {
    if (router.pathname.search(firstSegment) == 1)
      return "text-black lg:text-[#3498db] ";
    else return "text-black lg:text-[#ffffff]";
  };

  return (
    <Link
      href={{pathname: location}}
      locale={router.locale}
      className={`px-[40px] text-black lg:text-white hover:text-[#cfcfcf]  ${activeLink(
        active
      )}`}
    >
      {title}
    </Link>
  );
};

export default LinksHeader;
