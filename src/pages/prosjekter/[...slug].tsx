import Head from "next/head";
import { NextPage } from "next/types";
import { formatPrice } from "../../utils";
import { IconArea, IconArrowDown, IconCheckCircle, IconHouse, IconMapPin } from "../../components/icons";
import useRegisterInterest from "../../hooks/useregisterinterest";
import ShareButton from "../../components/sharebutton";
import Layout from "../../components/layout";
import LikeButton from "../../components/likebutton";
import { TEST_PROJECTS } from "../../utils/test-projects";
import { useEffect, useState } from "react";
import Carousel from "../../components/carousel";
import Gallery from "../../components/gallery";
import { Project } from "../../types/project";
import ExpandContent from "../../components/expandcontent";
import Link from "next/link";
import Location from "../../components/location";
import Contacts from "../../components/contacts";

const Project: NextPage = (): JSX.Element | null => {

    const { openRegisterInterestForm, RegisterInterestModal } = useRegisterInterest();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {

        const slug = window.location.pathname.split('/').pop();
        const foundProject = TEST_PROJECTS.find(p => p.slug === slug);

        if (foundProject !== undefined) {
            setProject(foundProject);
        }

    }, []);

    const scrollTo = (id: string) => {

        const obj = document.getElementById(id);

        if (obj) {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: obj.offsetTop - 40
            });
        }
    };


    if (!project) return null;

    return (
        <Layout>
            <Head>
                <title>Prosjekter</title>
            </Head>
            <div className="pb-12 flex flex-col gap-16 md:gap-24">

                <div className="flex flex-col lg:flex-col-reverse gap-8 lg:pt-16 lg:gap-16">

                    {project.images &&
                        <div className="flex justify-center lg:px-8">
                            <div className="w-full max-w-[1440px]">
                                <Gallery images={project.images} />
                            </div>
                        </div>}

                    <div className="flex justify-center px-8">
                        <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-4">
                            <div className="flex flex-col gap-4 flex-1">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl">{project.name}</h1>
                                <div className="flex items-center gap-2 uppercase text-sm"><IconMapPin /> {project.location?.city}</div>
                                <div className="flex gap-2">
                                    <LikeButton uuid={'qwer-asdf-fghj-sdfg-sdfg'} liked={project.liked} />
                                    <ShareButton url={'https://google.com'} title={project.name} />
                                </div>
                            </div>
                            <div className="lg:w-[60%] lg:pt-4">
                                <div className="text-md md:text-xl lg:text-2xl max-w-[45rem]">{project.headline}</div>
                                <div className="text-md lg:text-lg flex flex-col sm:flex-row sm:gap-8 mt-8">
                                    <span>kr {project.units_summary?.unsold_units?.list_price_from && formatPrice(project.units_summary?.unsold_units?.list_price_from)}{project.units_summary?.unsold_units?.list_price_from && project.units_summary?.unsold_units?.list_price_to ? ' - ' : ''}{project.units_summary?.unsold_units?.list_price_to && formatPrice(project.units_summary?.unsold_units?.list_price_to)}</span>
                                    <span className="mt-4 md:mt-0 inline-flex gap-2"><span><IconArea /></span><span>{project.units_summary?.unsold_units?.size_from} - {project.units_summary?.unsold_units?.size_to} m<sup>2</sup></span></span>
                                    <span className="mt-3 md:mt-0 inline-flex gap-2"><span><IconHouse /></span><span>{project.units_summary?.unsold_units?.total} Leiligheter</span></span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <button onClick={openRegisterInterestForm} className="bg-primary rounded-full text-white px-6 py-4">Meld interesse</button>
                                    <RegisterInterestModal />
                                    <button onClick={() => scrollTo('property-picker')} className="border rounded-full justify-center px-6 py-4 flex gap-2 hover:border-black"><IconArrowDown /> Se alle enheter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center px-8" id="info">
                    <div className="w-full max-w-[1440px] flex flex-col justify-between md:flex-row gap-16 md:gap-24">
                        <div className="bg-secondary p-8 flex-col flex gap-8 flex-1 h-fit md:max-w-[400px]">
                            <h2 className="text-xl md:text-2xl">Prosjektinfo</h2>
                            <ul className="grid grid-cols-2 gap-4">
                                <li>
                                    <label className="uppercase text-[#555] text-xs">Utbygger</label>
                                    <div>{project.developer}</div>
                                </li>
                                <li>
                                    <label className="uppercase text-[#555] text-xs">Enheter</label>
                                    <div>{project.units_summary?.unsold_units?.total}/{project.units_summary?.all_units?.total}</div>
                                </li>
                                <li>
                                    <label className="uppercase text-[#555] text-xs">Eierform</label>
                                    <div>{project.units_summary?.all_units?.ownership_types}</div>
                                </li>
                                <li>
                                    <label className="uppercase text-[#555] text-xs">Boligtype</label>
                                    <div>{project.units_summary?.unsold_units?.unit_types}</div>
                                </li>

                                <li>
                                    <label className="uppercase text-[#555] text-xs">Rom</label>
                                    <div>{project.units_summary?.unsold_units?.rooms_from} – {project.units_summary?.unsold_units?.rooms_to}</div>
                                </li>
                                <li>
                                    <label className="uppercase text-[#555] text-xs">Soverom</label>
                                    <div>{project.units_summary?.unsold_units?.bedrooms_from} – {project.units_summary?.unsold_units?.bedrooms_to}</div>
                                </li>
                            </ul>
                            {project.link && <div>
                                <Link passHref href={project.link}>
                                    <a className="p-4 border border-[#ccc] rounded-full w-full flex justify-center">Se nettside</a>
                                </Link>
                            </div>}
                        </div>
                        <div className="w-full md:w-[60%] flex flex-col gap-16">

                            {project.description &&
                                <ExpandContent height="20rem">
                                    <div className="flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: project.description }} />
                                </ExpandContent>
                            }

                            {project.facilities &&
                                <div className="flex flex-col gap-8">
                                    <h3>Fasiliteter</h3>
                                    <ul className="grid gap-4 grid-cols-3">
                                        {project.facilities?.map((facility, i) => (
                                            <li key={i} className="border p-4 rounded-full flex gap-2"><IconCheckCircle />{facility.title}</li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center px-8" id="property-picker">
                    <div className="w-full max-w-[1440px] flex flex-col gap-4">
                        <h2 className="text-2xl md:text-3xl">Boligvelger</h2>
                        <div className="bg-secondary h-[500px] w-full">
                            <script id="marketer-pp-embed-6f5rc" dangerouslySetInnerHTML={{ __html: '(function (p) {var s = window.document.createElement("script");s.src = p.a;s.setAttribute("project-project", p.b);s.setAttribute("project-company", p.c);s.setAttribute("project-runner-id", p.d);window.document.head.appendChild(s);})({"a":"https://d3g6ix8apt5w4m.cloudfront.net/embed-script.min.js","b":"ed686841-3b5a-42f7-8b35-94dacc3f2bc8","c":"22ea5ad8-1c58-4dfb-b699-5897408a90b6","d":"6f5rc"});' }} />
                        </div>
                    </div>
                </div>

                {project.location && <Location {...project.location} />}

                {project.contacts && <Contacts contacts={project.contacts} />}

                {TEST_PROJECTS.filter(p => p.developer === project.developer).length &&
                    <Carousel
                        projects={TEST_PROJECTS.filter(p => p.developer === project.developer)}
                        title={`Flere prosjekter fra ${project.developer}`}
                        description="Sjekk ut prosjekter i nærheten som ligner dette prosjektet"
                    />
                }

                {TEST_PROJECTS.length &&
                    <Carousel projects={TEST_PROJECTS} title="Relaterte prosjekter" description="Sjekk ut prosjekter i nærheten som ligner dette prosjektet" />
                }

            </div>
        </Layout >
    )

};

export default Project