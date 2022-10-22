import type { NextPage } from "next";
import Head from "next/head";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import FrontPageHero from "../components/frontpagehero";
import Header from "../components/header";
import SearchBar from "../components/searchbar";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Portal V3</title>
        <meta name="description" content="This is the description for V3 of the Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-full flex flex-col">
        <Header />
        <div className="flex-1 shrink-0 py-8 pb-24">
          <SearchBar />
          <div className="flex flex-col gap-24">
            <FrontPageHero />
            <Carousel title="Siste nytt" description="Sjekk ut de nyeste prosjektene som er lagt ut på Eiendom.no" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
