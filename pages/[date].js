import getConfig from "next/config";
import Head from "next/head";
import Error from "next/error";

import Layout from "../components/layout";
import PhotoOfTheDay from "../components/photo-of-the-day";

import { getAPOD } from "../utils/api-requests";

const { publicRuntimeConfig } = getConfig();
const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

const APOD = ({ data }) => {
  console.log(data);

  if (data.code === 400) {
    let errorText = data.msg;

    errorText =
      errorText[errorText.length - 1] === "."
        ? errorText.slice(0, -1)
        : errorText;

    return (
      <Layout>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <Error statusCode={400} title={errorText} />
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title key="title">{`${data.title} | ${publicRuntimeConfig.siteMetaData.title}`}</title>
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

  return data ? { props: { data } } : { notFound: true };
};

export default APOD;
