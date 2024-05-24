import Head from "next/head";
import React from "react";

export interface MetatagsProps {
  title: string;
  description?: string;
}

const PageMetatags = ({title, description}: MetatagsProps) => {
  const imageUrl = "/assets/img/sefik.jpg";
  return (
    <Head>
      <title>Sefik Spahic | {title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={title} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
};

export default PageMetatags;
