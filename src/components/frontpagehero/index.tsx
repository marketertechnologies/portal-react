import Image from "next/image";
import { useState } from "react";
import { Project } from "../../types/project";
import { formatPrice } from "../../utils";
import { IconArea, IconArrowRightCircle, IconHouse, IconMapPin } from "../icons";
import LikeButton from "../likebutton";


const FrontPageHero = ({ projects }: {
    projects: Project[]
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
                                {project.images && project.images[0] && <Image alt="" layout="fill" className="object-cover absolute top-0 left-0 w-full h-full" src={project.images[0].url} />}
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(10,10,10,0.8)]"></div>
                            <div className="absolute top-0 left-0 w-full h-full p-8 md:p-16 text-white flex flex-col justify-end">
                                <div className="uppercase flex items-center gap-2"><span><IconMapPin /></span>{project.location?.city}</div>
                                <h2 className="text-4xl md:text-5xl mt-2">{project.name}</h2>
                                <div className="text-md md:text-lg flex flex-col md:flex-row md:gap-8 mt-8">
                                    <span>kr {project.units_summary?.unsold_units?.list_price_from && formatPrice(project.units_summary?.unsold_units?.list_price_from)}{project.units_summary?.unsold_units?.list_price_from && project.units_summary?.unsold_units?.list_price_to ? ' - ' : ''}{project.units_summary?.unsold_units?.list_price_to && formatPrice(project.units_summary?.unsold_units?.list_price_to)}</span>
                                    <span className="mt-4 md:mt-0 inline-flex gap-2"><span><IconArea /></span><span>{project.units_summary?.unsold_units?.size_from} - {project.units_summary?.unsold_units?.size_to} m<sup>2</sup></span></span>
                                    <span className="mt-3 md:mt-0 inline-flex gap-2"><span><IconHouse /></span><span>{project.units_summary?.unsold_units?.total} Leiligheter</span></span>
                                </div>
                            </div>
                            <button
                                className="absolute right-8 md:right-16 md:bottom-14 bottom-6 text-white flex gap-4 items-center"
                                onClick={() => setCurrentIndex(nextIndex)}
                            >
                                {next?.name} <span className="text-3xl"><IconArrowRightCircle /></span>
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

