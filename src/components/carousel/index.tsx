import Image from "next/image";
import { formatPrice } from "../../utils";
import { IconArea, IconArrowLeft, IconArrowRight, IconHouse } from "../icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from "react";
import { Swiper as SwiperProps } from "swiper/types";
import Link from "next/link";
import LikeButton from "../likebutton";
import { Project } from "../../types/project";

const ProjectCard = ({
    uuid,
    images,
    location,
    name,
    slug,
    liked,
    units_summary,
}: Project) => {

    return (
        <div className="flex-1">
            <Link href={`/prosjekter/${slug}`} passHref>
                <a className="flex flex-col outline-inset">
                    <div className="aspect-video relative bg-[#111] mb-4">
                        {images && images[0] && <Image alt="" layout="fill" src={images[0].url} />}
                        <div className="absolute top-4 right-4"><LikeButton liked={liked} uuid={uuid} /></div>
                    </div>
                    <h3 className="text-xl md:text-2xl">{name}</h3>
                    <div className="uppercase text-sm mt-1">{location?.city}</div>
                    <div className="mt-4">kr {units_summary?.unsold_units?.list_price_from && formatPrice(units_summary?.unsold_units?.list_price_from)}{units_summary?.unsold_units?.list_price_from && units_summary?.unsold_units?.list_price_to ? ' - ' : ''}{units_summary?.unsold_units?.list_price_to && formatPrice(units_summary.unsold_units.list_price_to)}</div>
                    <div className="text-md flex flex-row gap-4 mt-2">
                        <span className="inline-flex gap-2"><span><IconArea /></span><span>{units_summary?.unsold_units?.size_from} - {units_summary?.unsold_units?.size_to} m<sup>2</sup></span></span>
                        <span className="inline-flex gap-2"><span><IconHouse /></span><span>{units_summary?.unsold_units?.total} Leiligheter</span></span>
                    </div>
                </a>
            </Link>
        </div>
    )
};

interface CarouselProps {
    title?: string;
    description?: string;
    projects?: Project[];
}

const Carousel = ({
    title,
    description,
    projects,
}: CarouselProps): JSX.Element | null => {

    const [swiper, setSwiper] = useState<SwiperProps | null>(null);

    if (!projects || projects.length < 1) return null;

    return (
        <div className="flex justify-center px-8 pb-1 overflow-hidden">
            <div className="max-w-[1440px] w-full">
                <div className="flex items-end justify-between gap-4">
                    <div className="flex flex-col gap-4">
                        {title && <h2 className="text-2xl md:text-3xl">{title}</h2>}
                        {description && <p className="text-lg">{description}</p>}
                    </div>
                    <div>
                        {swiper && (
                            <div className="flex gap-4 items-center">
                                <button onClick={() => swiper.slidePrev()}>
                                    <IconArrowLeft />
                                </button>
                                <button onClick={() => swiper.slideNext()}>
                                    <IconArrowRight />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-8 flex gap-4">
                    <Swiper
                        className="w-full !overflow-visible"
                        spaceBetween={24}
                        onSwiper={swiper => { setSwiper(swiper) }}
                        preloadImages={true}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {projects.map((p, i) => <SwiperSlide key={i}><ProjectCard {...p} /></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    )
};

export default Carousel;