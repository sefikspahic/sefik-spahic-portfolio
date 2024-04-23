import Card from "@/components/project/Card";
import React from "react";
import {LiveProject} from "../../components/project/LIveProject";
import {InactiveProject} from "../../components/project/InactiveProject";

const Projects = () => {
  return (
    <section className="px-[24px] sm:px-[32px] pt-[15px]">
      <div className="text-[20px] lg:text-[25px] font-[700] text-[#f9b234] tracking-[0.25em]  uppercase">
        Live project
      </div>
      <Card projects={LiveProject} />
      <div className="text-[20px] lg:text-[25px] font-[700]  text-[#f9b234] tracking-[0.25em]  uppercase">
        Inactive project<span className="normal-case">(On GitHub)</span>
      </div>
      <div className="text-[15px] text-justify">
        The project is hosted on a private GitHub repository as part of the
        coursework for the Paragon programming school, organized by Mistral
        company. Adhering to the school's guidelines, the repository is kept
        private. To share information and provide access, I've utilized
        GitFront. If you have any inquiries or would like access to the
        repository, please don't hesitate to contact me via email
        <span className="text-blue-500 ml-[5px]">
          <a
            href={`mailto:${"spahicsefik@gmail.com"}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            click here to contact
          </a>
        </span>
        . I would be happy to add you as a collaborator on GitHub. The privacy
        measures align with the requirements of Paragon programming school, and
        GitFront serves as a secure platform for sharing project details.
      </div>
      <Card projects={InactiveProject} />
    </section>
  );
};

export default Projects;
