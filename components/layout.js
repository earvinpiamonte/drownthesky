import Head from "next/head";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={publicRuntimeConfig.siteMetaData.description}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          name="twitter:creator"
          content={publicRuntimeConfig.siteMetaData.twitterHandle}
          key="twhandle"
        />

        {/* Open Graph */}
        <meta
          property="og:url"
          content={publicRuntimeConfig.siteMetaData.siteURL}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={`${publicRuntimeConfig.siteMetaData.siteURL}${publicRuntimeConfig.siteMetaData.socialPreview}`}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={publicRuntimeConfig.siteName}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={publicRuntimeConfig.siteMetaData.title}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteMetaData.description}
          key="ogdesc"
        />

        <title>{publicRuntimeConfig.siteMetaData.title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
