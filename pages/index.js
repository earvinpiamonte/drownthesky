import Head from "next/head";
import Layout, { siteMetaData } from "../components/layout";

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{`${siteMetaData.title} | Home`}</title>
      </Head>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="app-h1">Astronomy Picture of the Day</h1>
          <p>
            API key:{" "}
            <code className="bg-blue-50 px-2 py-1 rounded">{API_KEY}</code>
          </p>
        </div>
      </section>
    </Layout>
  );
}
