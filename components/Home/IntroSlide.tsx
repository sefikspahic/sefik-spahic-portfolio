import React, {useEffect, useState} from "react";

const IntroSlide = () => {
  const [text, setText] = useState("");
  const [showBtn, setShowBtn] = useState(false);

  const fullText =
    "Hello, I'm Šefik Spahić, I'm Frontend Developer from Sarajevo, BiH!";

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(intervalId);
        setShowBtn(true);
      }
    }, 70);

    return () => clearInterval(intervalId);
  }, [fullText]);

  const handleClickScroll = () => {
    const element = document.getElementById("section2");
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <section className="h-full ">
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 ">
          <video
            className="w-full  "
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src={"/assets/video/keyboard-video1.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 max-[1440px]:bg-gradient-to-b min-[1440px]:bg-gradient-to-r from-[#000000] via-transparent to-[#000000]"></div>
        <div className="absolute inset-0 flex  items-center justify-center px-[24px] sm:px-[32px] text-center">
          <div>
            <p className="text-white text-[16px] sm:text-2xl font-bold">
              {text}
            </p>
            {showBtn && (
              <button
                onClick={handleClickScroll}
                className="border-white w-[150px] sm:w-[230px] h-[40px] sm:h-[63px] mt-[20px] flex justify-center mx-auto items-center border-[1px] " 
              >
                Get started
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSlide;
