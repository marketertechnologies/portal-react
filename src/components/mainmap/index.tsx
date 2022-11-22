import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Project } from "../../types/project";
import { TEST_PROJECTS } from "../../utils/test-projects";
import { IconArea, IconArrowLeft, IconArrowRight, IconHouse } from "../icons";
import LikeButton from "../likebutton";
import { formatPrice } from "../../utils";

const ProjectCard = ({
    uuid,
    images,
    location,
    name,
    slug,
    liked,
    units_summary,
    layout = 'vertical',
}: {
    layout?: string;
} & Project) => {

    return (
        <div className="flex-1">
            <Link href={`/prosjekter/${slug}`} passHref>
                <a className={`flex ${layout == 'horizontal' ? 'flex-row' : 'flew-col'} outline-inset`}>
                    <div className="aspect-video flex-1 relative bg-[#111] mb-4">
                        {images && images[0] && <Image alt="" layout="fill" src={images[0].url} />}
                        <div className="absolute top-4 right-4"><LikeButton liked={liked} uuid={uuid} /></div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl">{name}</h3>
                        <div className="uppercase text-sm mt-1">{location?.city}</div>
                        <div className="mt-4">kr {units_summary?.unsold_units?.list_price_from && formatPrice(units_summary?.unsold_units?.list_price_from)}{units_summary?.unsold_units?.list_price_from && units_summary?.unsold_units?.list_price_to ? ' - ' : ''}{units_summary?.unsold_units?.list_price_to && formatPrice(units_summary.unsold_units.list_price_to)}</div>
                        <div className="text-md flex flex-row gap-4 mt-2">
                            <span className="inline-flex gap-2"><span><IconArea /></span><span>{units_summary?.unsold_units?.size_from} - {units_summary?.unsold_units?.size_to} m<sup>2</sup></span></span>
                            <span className="inline-flex gap-2"><span><IconHouse /></span><span>{units_summary?.unsold_units?.total} Leiligheter</span></span>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
};

const MainMap = (): JSX.Element => {

    const [drawerOpen, setDrawerOpen] = useState(true);

    return (
        <div className="absolute h-full w-full flex">
            <div className={`transition-all bg-white h-full ${drawerOpen ? 'w-[500px]' : 'w-0'}`}>
                <div className="p-8">
                    <h2>Søk!</h2>
                </div>
                <div>
                    {TEST_PROJECTS.map((p, i) => <ProjectCard {...p} layout="horisontal" />)}
                </div>
            </div>
            <div className="bg-[#a5dbef] flex-1 p-8 relative">
                <button className="bg-white flex w-8 h-12  justify-center items-center absolute left-0 top-4    " onClick={() => { setDrawerOpen(!drawerOpen) }}>
                    {!drawerOpen ? <IconArrowRight /> : <IconArrowLeft />}
                </button>
            </div>
        </div>
    );
};

export default MainMap;