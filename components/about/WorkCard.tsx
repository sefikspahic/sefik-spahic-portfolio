import React, {useState} from "react";
import "react-responsive-modal/styles.css";
import {Modal} from "react-responsive-modal";
interface WorkExperienceParams {
  company: string;
  position: string;
  from: string;
  to: string;
  country: string;
  work: string;
  dataForModal?: any;
}

const WorkCard = ({
  company,
  position,
  from,
  to,
  country,
  work,
  dataForModal
}: WorkExperienceParams) => {
  const [readMore, setReadMore] = useState(false);
  const onCloseModal = () => setReadMore(false);
  return (
    <div className=" box min-w-full md:min-w-[49%] lg:min-w-[33%]">
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h2>
                {from}-{to}
              </h2>
              <div className="jobtype max-sm:!top-[25px]">{country}</div>
              <div>{work}</div>
              <h3>{company}</h3>
              <p>{position}</p>
              <button onClick={() => setReadMore(true)}>Read More</button>
            </div>
          </div>
        </div>
      </div>

      <Modal open={readMore} onClose={onCloseModal} center>
        <div className="min-w-[200px] lg:min-w-[550px] text-black mt-[0px]">
          <div className="text-[22px]">{company}</div>
          <div className="text-[18px] ">{position}</div>
          <div className="text-[15px] italic ">{country}</div>
          <div className="text-[15px]">{from}-{to}</div>
          <div dangerouslySetInnerHTML={{ __html: dataForModal }} />
        </div>
      </Modal>
    </div>
  );
};

export default WorkCard;
