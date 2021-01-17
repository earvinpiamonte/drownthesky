import {ReactNode} from "react"

import Head from "next/head";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const Layout = ({ children }: {children: ReactNode}) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twitter_card" />
        <meta
          name="twitter:creator"
          content={publicRuntimeConfig.siteMetaData.twitterHandle}
          key="twitter_creator"
        />

        {/* Open Graph */}
        <meta
          property="og:url"
          content={publicRuntimeConfig.siteMetaData.siteURL}
          key="og_url"
        />
        <meta
          property="og:image"
          content={`${publicRuntimeConfig.siteMetaData.siteURL}${publicRuntimeConfig.siteMetaData.socialPreview}`}
          key="og_image"
        />
        <meta
          property="og:site_name"
          content={publicRuntimeConfig.siteName}
          key="og_site_name"
        />
        <meta
          property="og:title"
          content={publicRuntimeConfig.siteMetaData.title}
          key="og_title"
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteMetaData.description}
          key="og_description"
        />

        {/* Defaults */}
        <meta
          name="description"
          content={publicRuntimeConfig.siteMetaData.description}
        />
        <title key="title">{publicRuntimeConfig.siteMetaData.title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
