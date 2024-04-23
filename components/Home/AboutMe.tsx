import Image from "next/image";
import React from "react";
import ProfilImg from "../../public/assets/img/sefik.jpg";
const AboutMe = () => {
  const handleDownloadClick = () => {
    const cvPath = "/document/Šefik SpahićCV.pdf";

    const absoluteCvPath = new URL(cvPath, window.location.origin);

    const downloadLink = document.createElement("a");
    downloadLink.href = absoluteCvPath.href;
    downloadLink.download = "Sefik Spahić CV.pdf";

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  };
  return (
    <section
      id="section2"
      className="px-[24px] sm:px-[32px] mt-[50px] sm:mt-[80px] lg:mt-[140px] mb-[70px]"
    >
      <div className="text-[16px] sm:text-[20px] lg:text-[30px] tracking-[0.25em] pt-[20px] font-[500]">
        WHO AM I?
      </div>

      <div  className="text-[15px] font-[300] text-justify mt-[15px] sm:mt-[20px] lg:mt-[25px] leading-[25px] lg:leading-[40px]  before:text-[#FFFFFF] ater:h-full after:items-end after:text-[#FFFFFF] before:mr-[5px] after:content-['</>']  after:flex before:min-h-full flex  before:content-['<>'] before:flex  ">
        Hi, my name is Šefik and I'm a Frontend Developer. I have a passion for
        creating beautiful, intuitive, and responsive user interfaces that
        deliver a great user experience. I have extensive experience using
        React, a popular and powerful JavaScript library, to build scalable and
        maintainable web applications. I'm also proficient in other related
        technologies, including Next.js for server-side rendering, HTML and CSS
        for web development, and Tailwind CSS for styling. In addition, I have
        experience working with Redux, a state management library, to manage the
        state of complex applications and ensure a smooth flow of data between
        components. My expertise in these technologies allows me to build
        dynamic, interactive, and visually appealing web applications that meet
        modern standards and best practices. I'm also passionate about staying
        up-to-date with the latest trends and technologies in the frontend
        development world. I'm constantly learning and exploring new tools and
        techniques to improve my skills and stay at the forefront of the
        industry. If you're looking for a skilled and motivated React Frontend
        Developer to build your next web application, feel free to contact me.
        I'm always excited to take on new challenges and deliver high-quality
        results that meet your needs and exceed your expectations.
      </div>
      <button
        onClick={handleDownloadClick}
        className="border-white w-[150px]  sm:w-[230px] h-[40px] sm:h-[63px] border-[1px] mt-[20px] uppercase hover:bg-[#ffffff] buttonanimation hover:text-black"
      >
        Download my CV
      </button>
    </section>
  );
};

export default AboutMe;
