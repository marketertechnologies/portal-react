import Head from "next/head";
import { NextPage } from "next/types";
import Layout from "../../components/layout";
import MainMap from "../../components/mainmap";

const Projects: NextPage = (): JSX.Element => {

    return (
        <Layout showFooter={false}>
            <Head>
                <title>Portal V3</title>
                <meta name="description" content="This is the description for V3 of the Portal" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="relative flex-1 shrink-0 h-full">
                <MainMap />
            </div>
        </Layout>
    )

};

export default Projects