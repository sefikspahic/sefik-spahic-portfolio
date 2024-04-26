import React from "react";
import EducationCard from "./EducationCard";
import UNSA from "../../public/assets/Icons/unsa.jpeg";
import Salzburg from "../../public/assets/Icons/salzburg3.png";
import Paragon from "../../public/assets/Icons/paragon1.jpeg";

const Education = () => {
  return (
    <div>
      <EducationCard
        image={Paragon}
        university="Paragon"
        department="Full Stack Developer"
        desc="Foucs on Frontend development with React, and alos intersip in Mistral company, Sarajevo"
      />
      <EducationCard
        image={Salzburg}
        university="Paris Lodron University of Salzburg, Austria"
        department="Sociology"
        desc=""
      />

      <EducationCard
        image={UNSA}
        university="University of Sarayevo"
        department="Sociology MA"
        desc=""
      />
            <EducationCard
        image={UNSA}
        university="University of Sarayevo"
        department="Sociology BA"
        desc=""
      />
    </div>
  );
};

export default Education;
