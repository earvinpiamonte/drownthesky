import getConfig from "next/config";
import Head from "next/head";
import Layout from "../components/layout";
import PhotoOfTheDay from "../components/photo-of-the-day";

import { getAPOD } from "../utils/api-requests";

const { publicRuntimeConfig } = getConfig();
const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

const APOD = ({ data }) => {
  /* to do: condition to 404 -> if data is null or data.error != undefined */
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

export const getServerSideProps = async (context) => {
  const { date } = context.query;

  let requestDate = new Date(date);
  let data = null;

  const validDate = requestDate == "Invalid Date" ? null : requestDate;

  if (validDate) {
    const day = validDate.getDate();
    const month = `0${validDate.getMonth() + 1}`.slice(-2);
    const year = validDate.getFullYear();

    const queryString = new URLSearchParams({
      api_key: API_KEY,
      date: `${year}-${month}-${day}`,
    }).toString();

    data = await getAPOD(queryString);
  }

  return { props: { data } };
};

export default APOD;
