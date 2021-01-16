import getConfig from "next/config";
import Head from "next/head";
import Layout from "../components/layout";
import PhotoOfTheDay from "../components/photo-of-the-day";

import { getAPOD } from "../utils/api-requests";

const { publicRuntimeConfig } = getConfig();

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

const Home = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Head>
        <title>{`${publicRuntimeConfig.siteMetaData.title} by @${publicRuntimeConfig.siteMetaData.twitterHandle} via NASA API`}</title>
      </Head>
      <PhotoOfTheDay data={data} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const queryString = new URLSearchParams({
    api_key: API_KEY,
  }).toString();

  const data = await getAPOD(queryString);

  return { props: { data } };
};

export default Home;
