import Image from "next/image";
import React from "react";
import ReactIcon from "../../public/assets/Icons/react-2.svg";

import AdobeIcon from "../../public/assets/Icons/adobe-xd-1.svg";
import BostrapIcon from "../../public/assets/Icons/bootstrap-icon.svg";
import FigmaIcon from "../../public/assets/Icons/figma_5968705.png";
import GitIcon from "../../public/assets/Icons/github_919847.png";
import HTMLIcon from "../../public/assets/Icons/html-1.svg";
import JSIcon from "../../public/assets/Icons/javascript-1.svg";
import JIraIcon from "../../public/assets/Icons/jira-1.svg";
import MaterialIcon from "../../public/assets/Icons/material-ui-1.svg";
import NextIcon from "../../public/assets/Icons/nextjs-icon.svg";
import NotionIcon from "../../public/assets/Icons/notion-1-1.svg";
import SemanticIcon from "../../public/assets/Icons/semantic-ui.svg";
import WPIcon from "../../public/assets/Icons/wordpress-icon-1.svg";
import TSIcon from "../../public/assets/Icons/typescript.svg";
import TailwindIcon from "../../public/assets/Icons/tailwindcss.svg";
import SlacIcon from "../../public/assets/Icons/slack-new-logo.svg";
import ShopifyIcon from "../../public/assets/Icons/shopify.svg";
import CSSIcon from "../../public/assets/Icons/css-3.svg";
import StackCard from "./StackCard";

const Stack = () => {
  return (
    <div className="flex flex-wrap max-sm:justify-center">
      <StackCard image={ReactIcon} title="Raect" />
      <div className="w-[100px] text-center m-[20px] flex flex-col items-center justify-between">
        <Image
          className="mx-auto bg-white rounded-full  border-[1px] border-white"
          src={NextIcon}
          alt="Next JS"
        />
        <div className="font-[500] mt-[10px]">Next JS</div>
      </div>
      <StackCard image={JSIcon} title="JavaScript" />
      <StackCard image={TSIcon} title="TypeScrip" />
      <StackCard image={HTMLIcon} title="HTML" />
      <StackCard image={CSSIcon} title="CSS" />
      <StackCard image={GitIcon} title="GitHub" />
      <StackCard image={TailwindIcon} title="Tailwind CSS" />
      <StackCard image={FigmaIcon} title=" Figma" />
      <StackCard image={WPIcon} title="Wordpress" />
      <StackCard image={SemanticIcon} title="Semantic UI" />
      <StackCard image={BostrapIcon} title="Bootstrap" />
      <StackCard image={MaterialIcon} title="Material UI" />
      <StackCard image={ShopifyIcon} title="Shopify" />
      <StackCard image={JIraIcon} title="Jira" />
      <StackCard image={SlacIcon} title="Slack" />
      <StackCard image={AdobeIcon} title="Adobe XD" />
      <StackCard image={NotionIcon} title="Notion" />
    </div>
  );
};

export default Stack;
