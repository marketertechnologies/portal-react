import type { NextPage } from "next";
import Head from "next/head";
import Carousel from "../components/carousel";
import FrontPageHero from "../components/frontpagehero";
import Layout from "../components/layout";
import SearchBar from "../components/searchbar";

const Home: NextPage = () => {

  return (
    <Layout>
      <Head>
        <title>Portal V3</title>
        <meta name="description" content="This is the description for V3 of the Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-8 pb-24">
        <SearchBar />
        <div className="flex flex-col gap-24">
          <FrontPageHero />
          <Carousel title="Siste nytt" description="Sjekk ut de nyeste prosjektene som er lagt ut på Eiendom.no" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
