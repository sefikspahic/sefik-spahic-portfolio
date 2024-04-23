import WorkCard from "@/components/about/WorkCard";
import React from "react";
import data from "@/components/about/WorkExperineceModal.json";
import Stack from "@/components/about/Stack";


const About = () => {
  const {MBSmart} = data;
  const {Meshmind} = data;

  return (
    <section className="px-[24px] sm:px-[32px] mt-[20px] sm:mt-[30px] lg:mt-[40px] mb-[70px]">
      <div className="text-[18px] sm:text-[20px] lg:text-[30px] tracking-[0.25em] pt-[20px] font-[700]">
        WHO AM I?
      </div>
      <div className="text-[15px] font-[300] text-justify mt-[15px] sm:mt-[20px] lg:mt-[25px] leading-[25px] lg:leading-[40px] ">
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
      <div className="text-[18px] sm:text-[20px] lg:text-[30px] tracking-[0.25em] pt-[20px] font-[700]">
        STACK
      </div>
  <Stack/>
      <div className="text-[18px] sm:text-[20px] lg:text-[30px] tracking-[0.25em] pt-[20px] font-[700]">
        WORK EXPERIENCE
      </div>
      <div className="flex  flex-wrap">
        <WorkCard
          company="MB Smart"
          position="(Front-end developer)"
          from="Jul 2022"
          to="Present"
          work="Full time"
          dataForModal={MBSmart}
        />
        <WorkCard
          company="Meshmind"
          position="(Team Lead Data Analyst)"
          from="Jun 2022"
          to="Nov 2022"
          work="Full time"
          dataForModal={Meshmind}
        />
        <WorkCard
          company="Checklens"
          position="(Team Lead Data Analyst)"
          from="Mar 2021"
          to="Jun 2022"
          work="Full time"
        />
        <WorkCard
          company="Checklens"
          position="(Students Team Lead Data Analyst)"
          from="Aug 2020"
          to="Mar 2021"
          work="Full time"
        />
        <WorkCard
          company="Checklens"
          position="(Data Analyst)"
          from="Apr 2019"
          to="Mar 2021"
          work="Full time"
        />
        <WorkCard
          company="SKIDATA"
          position="(Data Analyst)"
          from="Feb 2018 "
          to="Jul 2018"
          work="Full time"
        />
      </div>
      <div className="text-[18px] sm:text-[20px] lg:text-[30px] tracking-[0.25em] pt-[20px] font-[700]">
        EDUCATION
      </div>
    </section>
  );
};

export default About;
