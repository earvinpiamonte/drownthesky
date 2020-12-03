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
      <section className="h-screen">
        <div className="grid grid-cols-3 h-full">
          <div className="md:col-span-2 col-span-3 md:h-auto h-screen">
            <div className="relative h-full bg-gray-100">
              {data.hdurl && (
                <Image
                  src={data.hdurl}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              )}
              <div className="absolute bg-black bg-opacity-30 md:bottom-0 md:top-auto top-0 right-0 px-4 py-1">
                <h2 className="text-white text-xs">
                  &copy; {data.copyright || `NASA`}
                </h2>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 col-span-3 md:order-first md:mt-0 -mt-32 md:overflow-y-auto">
            <div className="py-10 px-4 relative bg-white">
              <h1 className="font-bold uppercase mb-1">{data.title}</h1>
              <p className="mb-8">
                <time dateTime={data.date}>{data.date}</time>
              </p>
              <p className="mb-4">{data.explanation}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
