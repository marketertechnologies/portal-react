import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Banner from "../components/banner";
import Carousel from "../components/carousel";
import FrontPageHero from "../components/frontpagehero";
import Layout from "../components/layout";
import SearchBar from "../components/searchbar";
import useLogin from "../hooks/uselogin";
import { TEST_PROJECTS } from "../utils/test-projects";

const Home: NextPage = () => {

  const { openLogin, LoginModal } = useLogin();

  return (
    <Layout>
      <Head>
        <title>Portal V3</title>
        <meta name="description" content="This is the description for V3 of the Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-8 pb-24">
        <SearchBar />
        <div className="flex flex-col gap-12 md:gap-24">
          <FrontPageHero projects={TEST_PROJECTS} />
          <Carousel projects={TEST_PROJECTS} title="Siste nytt" description="Sjekk ut de nyeste prosjektene som er lagt ut på Eiendom.no" />
          <Banner layout="left">
            <h2 className="text-2xl md:text-3xl">Nybygg til salgs over hele landet.</h2>
            <p>En enklere måte å finne, sammenligne og kjøpe nybyggprosjekter.</p>
            <div className="flex gap-4">
              <Link href="/" passHref><a className="inline-flex px-6 py-4 rounded-full border border-black text-black" >Les mer</a></Link>
              <button className="inline-flex px-6 py-4 rounded-full bg-primary text-white" onClick={openLogin}>Opprett bruker</button>
              <LoginModal />
            </div>
          </Banner>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
