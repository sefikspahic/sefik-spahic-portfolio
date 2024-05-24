import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

export interface HeaderLinksProps {
  router?: {
    pathname: string;
    locale?: string | undefined;
  };
  active: string;
  title: string;
  location: any;
}

const LinksHeader = ({ active, title, location}: HeaderLinksProps) => {
  
  const router = useRouter();
  const isActive = router.pathname === location;
  console.log(isActive , "lokacija");
  
  return (
    <Link
      href={{pathname: location}}
      locale={router.locale}
      className={`px-[40px]  font-[500]  ${isActive ? "link-active ": "link-bg"}`}
    >
      {title}
    </Link>
  );
};

export default LinksHeader;
