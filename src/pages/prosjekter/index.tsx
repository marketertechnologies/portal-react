import Head from "next/head";
import { NextPage } from "next/types";
import Header from "../../components/header";
import MainMap from "../../components/mainmap";

const Projects: NextPage = (): JSX.Element => {

    return (
        <>
            <Head>
                <title>Portal V3</title>
                <meta name="description" content="This is the description for V3 of the Portal" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-full flex flex-col">
                <Header />
                <div className="relative flex-1 shrink-0 h-full">
                    <MainMap />
                </div>
            </main>
        </>
    )

};

export default Projects