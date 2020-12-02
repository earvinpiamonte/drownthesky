import React from "react";

import Head from "next/head";
import Image from "next/image";
import Layout, { siteMetaData } from "../components/layout";
import { apiStates, useAPI } from "../hooks/useapi";

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

const Home = () => {
  const { state, data, errorText } = useAPI(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );

  switch (state) {
    case apiStates.LOADING:
      console.log(state);
      break;
    case apiStates.SUCCESS:
      console.log(state, data);
      break;
    case apiStates.ERROR:
      console.log(state, errorText);
      break;
  }

  return (
    <Layout>
      <Head>
        <title>{`${siteMetaData.title} by @${siteMetaData.twitterHandle}`}</title>
      </Head>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-1 text-xl font-bold uppercase">{data.title}</h1>
          <p className="mb-4">
            &copy; {data.copyright} {data.date}
          </p>
          <div className="mb-4 relative h-screen">
            {data.hdurl && (
              <Image
                src={data.hdurl}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            )}
          </div>
          <p className="mb-4">{data.explanation}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
