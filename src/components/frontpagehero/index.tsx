import Image from "next/image";
import { useState } from "react";
import { formatPrice } from "../../utils";
import { ProjectProps } from "../../utils/test";
import { IconArea, IconArrowRightCircle, IconHouse, IconMapPin } from "../icons";
import LikeButton from "../likebutton";


const FrontPageHero = ({ projects }: {
    projects: ProjectProps[]
}): JSX.Element | null => {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            {projects && projects.map((project, i) => {

                const nextIndex = currentIndex + 1 >= projects.length ? 0 : currentIndex + 1;
                const next = projects[nextIndex];

                return (
                    <div key={project.uuid} className={`md:px-8 justify-center shrink-0 ${currentIndex === i ? 'flex' : 'hidden'}`}>
                        <div className="bg-[#111] max-w-[1440px] w-full relative">
                            <div className="pb-[500px] relative">
                                {project.image && <Image alt="" layout="fill" className="object-cover absolute top-0 left-0 w-full h-full" src={project.image} />}
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(10,10,10,0.8)]"></div>
                            <div className="absolute top-0 left-0 w-full h-full p-8 md:p-16 text-white flex flex-col justify-end">
                                <div className="uppercase flex items-center gap-2"><span><IconMapPin /></span>{project.city}</div>
                                <h2 className="text-4xl md:text-5xl mt-2">{project.title}</h2>
                                <div className="text-md md:text-lg flex flex-col md:flex-row md:gap-8 mt-8">
                                    <span>kr {project.price_from && formatPrice(project.price_from)}{project.price_from && project.price_to ? ' - ' : ''}{project.price_to && formatPrice(project?.price_to)}</span>
                                    <span className="mt-4 md:mt-0 inline-flex gap-2"><span><IconArea /></span><span>{project.size_from} - {project.size_to} m<sup>2</sup></span></span>
                                    <span className="mt-3 md:mt-0 inline-flex gap-2"><span><IconHouse /></span><span>{project.units_available} Leiligheter</span></span>
                                </div>
                            </div>
                            <button
                                className="absolute right-8 md:right-16 md:bottom-14 bottom-6 text-white flex gap-4 items-center"
                                onClick={() => setCurrentIndex(nextIndex)}
                            >
                                {next?.title} <span className="text-3xl"><IconArrowRightCircle /></span>
                            </button>
                            <div className="absolute top-4 right-4"><LikeButton uuid={project.uuid} liked={project.liked} /></div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default FrontPageHero;

