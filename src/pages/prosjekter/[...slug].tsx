import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next/types";
import { formatPrice } from "../../utils";
import { IconArea, IconArrowDown, IconHouse, IconMapPin } from "../../components/icons";
import useRegisterInterest from "../../hooks/useregisterinterest";
import ShareButton from "../../components/sharebutton";
import Layout from "../../components/layout";
import LikeButton from "../../components/likebutton";
import { TEST_PROJECTS } from "../../utils/test-projects";
import { useEffect, useState } from "react";

const Project: NextPage = (): JSX.Element | null => {

    const { openRegisterInterestForm, RegisterInterestModal } = useRegisterInterest();
    const [project, setProject] = useState<ProjectProps | null>(null);

    useEffect(() => {

        const slug = window.location.pathname.split('/').pop();
        const foundProject = TEST_PROJECTS.find(p => p.slug === slug);

        if (foundProject !== undefined) {
            setProject(foundProject);
        }

    }, []);


    if (!project) return null;

    return (
        <Layout>
            <Head>
                <title>Prosjekter</title>
            </Head>
            <div className="pb-12 flex flex-col gap-16">

                <div className="flex flex-col lg:flex-col-reverse gap-8 lg:pt-16 lg:gap-16">
                    <div className="flex justify-center lg:px-8">
                        <div className="w-full max-w-[1440px]">
                            <div className="pb-[56%] lg:pb-[40%] bg-black w-full relative">
                                {project.image && <Image alt="" layout="fill" src={project.image} />}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center px-8">
                        <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-4">
                            <div className="flex flex-col gap-4 flex-1">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl">{project.title}</h1>
                                <div className="flex items-center gap-2 uppercase text-sm"><IconMapPin /> {project.city}</div>
                                <div className="flex gap-2">
                                    <LikeButton uuid={'qwer-asdf-fghj-sdfg-sdfg'} liked={project.liked} />
                                    <ShareButton url={'https://google.com'} title={project.title} />
                                </div>
                            </div>
                            <div className="lg:w-[60%] lg:pt-4">
                                <div className="text-md md:text-xl lg:text-2xl max-w-[45rem]">{project.shortDescription}</div>
                                <div className="text-md lg:text-lg flex flex-col sm:flex-row sm:gap-8 mt-8">
                                    <span>kr {project.price_from && formatPrice(project.price_from)}{project.price_from && project.price_to ? ' - ' : ''}{project.price_to && formatPrice(project.price_to)}</span>
                                    <span className="mt-4 sm:mt-0 inline-flex gap-2"><span><IconArea /></span><span>{project.size_from} - {project.size_to} m<sup>2</sup></span></span>
                                    <span className="mt-3 sm:mt-0 inline-flex gap-2"><span><IconHouse /></span><span>{project.units_available}/{project.units_total} Leiligheter</span></span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <button onClick={openRegisterInterestForm} className="bg-primary rounded-full text-white px-6 py-4">Meld interesse</button>
                                    <RegisterInterestModal />
                                    <button className="border rounded-full justify-center px-6 py-4 flex gap-2 hover:border-black"><IconArrowDown /> Se alle enheter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[200px] bg-black">
                    <script id="marketer-pp-embed-6f5rc" dangerouslySetInnerHTML={{ __html: '(function (p) {var s = window.document.createElement("script");s.src = p.a;s.setAttribute("project-project", p.b);s.setAttribute("project-company", p.c);s.setAttribute("project-runner-id", p.d);window.document.head.appendChild(s);})({"a":"https://d3g6ix8apt5w4m.cloudfront.net/embed-script.min.js","b":"ed686841-3b5a-42f7-8b35-94dacc3f2bc8","c":"22ea5ad8-1c58-4dfb-b699-5897408a90b6","d":"6f5rc"});' }} />
                </div>


            </div>
        </Layout>
    )

};

export default Project