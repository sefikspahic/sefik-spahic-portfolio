import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({children}: any) => {
  return (
    <div className="min-h-full flex flex-col justify-between ">
      <Header />
      <main className="flex grow w-full h-full max-w-[1440px] mx-auto">
        <div className="content-container grow w-full h-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
