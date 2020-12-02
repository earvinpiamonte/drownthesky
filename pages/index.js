import React from "react";

import Head from "next/head";
import Image from "next/image";
import Layout, { siteMetaData } from "../components/layout";

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

const Home = () => {
  const [data, setData] = React.useState({});

  const fetchData = async () => {
    const request = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    )
      .then((data) => data.json())
      .then((data) => data);

    console.log(request);
    setData(request);
  };

  React.useEffect(() => {
    fetchData();
  }, [setData]);

  return (
    <Layout>
      <Head>
        <title>{`${siteMetaData.title} by @${siteMetaData.twitterHandle}`}</title>
      </Head>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-4 relative h-screen">
            {data.hdurl && (
              <>
                <Image
                  src={data.hdurl}
                  className="rounded-lg"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </>
            )}
          </div>
          <h1 className="uppercase font-bold mb-4">{data.title}</h1>
          <p className="mb-8">{data.explanation}</p>
          <p className="mb-4 text-sm">
            &copy; {data.copyright} {data.date}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
