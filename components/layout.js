import Head from "next/head";

export const siteMetaData = {
  siteName: "Astronomy Picture of the Day",
  siteURL: "",
  title: "Astronomy Picture of the Day",
  description: "Astronomy Picture of the Day via NASA.",
  twitterHandle: "earvinpiamonte",
  socialPreview: "/images/preview.png",
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteMetaData.description} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          name="twitter:creator"
          content={siteMetaData.twitterHandle}
          key="twhandle"
        />

        {/* Open Graph */}
        <meta property="og:url" content={siteMetaData.siteURL} key="ogurl" />
        <meta
          property="og:image"
          content={`${siteMetaData.siteURL}${siteMetaData.socialPreview}`}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={siteMetaData.siteName}
          key="ogsitename"
        />
        <meta property="og:title" content={siteMetaData.title} key="ogtitle" />
        <meta
          property="og:description"
          content={siteMetaData.description}
          key="ogdesc"
        />

        <title>{siteMetaData.title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
