import Image from "next/image";
import { formatPrice } from "../../utils";
import { IconArea, IconArrowLeft, IconArrowRight, IconHouse } from "../icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from "react";
import { Swiper as SwiperProps } from "swiper/types";
import Link from "next/link";
import LikeButton from "../likebutton";

const TEST_DATA = [
    {
        uuid: 'akljf ølkajføaks',
        image: null, //'https://d2ou9824qr5ucu.cloudfront.net/e9cde66f50f962313c280e82c0ae1d65.webp',
        city: 'Aurdal',
        title: 'Lauvtjernveien',
        price_from: 4812510,
        price_to: 5562510,
        size_from: 50,
        size_to: 75,
        units_available: 7,
        slug: 'lauvtjernveien',
        liked: false,
    },
    {
        uuid: 'asg-sdg--sg-asdga-sdg',
        image: 'https://d2ou9824qr5ucu.cloudfront.net/0e91e8830545743770944a6a755c483a.webp',
        city: 'Oslo',
        title: 'Bakkbygrenda',
        price_from: 9000000,
        price_to: 11500000,
        size_from: 85,
        size_to: 120,
        units_available: 15,
        slug: 'bakkbygrenda',
        liked: true,
    },
    {
        uuid: 'sdfa-gsgsd-gs-dg-asdg-asdg',
        image: 'https://d2ou9824qr5ucu.cloudfront.net/7ada5b9cc9536d1cc295bb2d537ff6b3.webp',
        city: 'Flekkfjord',
        title: 'Sveåsen',
        price_from: 4812510,
        price_to: 5562510,
        size_from: 50,
        size_to: 75,
        units_available: 7,
        slug: 'sveaasen',
        liked: true
    },
    {
        uuid: 'asdghadfhad-f-gd-fhsdfhadf',
        image: 'https://d2ou9824qr5ucu.cloudfront.net/7ada5b9cc9536d1cc295bb2d537ff6b3.webp',
        city: 'Flekkfjord',
        title: 'Sveåsen',
        price_from: 4812510,
        price_to: 5562510,
        size_from: 50,
        size_to: 75,
        units_available: 7,
        slug: 'sveaasen',
        liked: false,
    },
];

interface ProjectCardProps {
    uuid?: string;
    image?: string | null,
    city?: string,
    title?: string,
    price_from?: number,
    price_to?: number,
    size_from?: number,
    size_to?: number,
    units_available?: number,
    slug: string,
    liked?: boolean,
}

const ProjectCard = ({
    uuid,
    image,
    city,
    title,
    price_from,
    price_to,
    size_from,
    size_to,
    units_available,
    slug,
    liked
}: ProjectCardProps) => {

    return (
        <div className="flex-1">
            <Link href={`/prosjekter/${slug}`} passHref>
                <a className="flex flex-col outline-inset">
                    <div className="aspect-video relative bg-[#aaa] mb-4">
                        {image && <Image alt="" layout="fill" src={image} />}
                        <div className="absolute top-2 right-2"><LikeButton liked={liked} uuid={uuid} /></div>
                    </div>
                    <h3>{title}</h3>
                    <div className="uppercase text-sm mt-1">{city}</div>
                    <div className="mt-4">kr {price_from && formatPrice(price_from)}{price_from && price_to ? ' - ' : ''}{price_to && formatPrice(price_to)}</div>
                    <div className="text-md flex flex-row gap-4 mt-2">
                        <span className="inline-flex gap-2"><span><IconArea /></span><span>{size_from} - {size_to} m<sup>2</sup></span></span>
                        <span className="inline-flex gap-2"><span><IconHouse /></span><span>{units_available} Leiligheter</span></span>
                    </div>
                </a>
            </Link>
        </div>
    )
};

interface CarouselProps {
    title?: string;
    description?: string;
    projects?: [];
}

const Carousel = ({
    title,
    description,
}: CarouselProps): JSX.Element => {

    const [swiper, setSwiper] = useState<SwiperProps | null>(null);

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
                        {TEST_DATA.map((p, i) => <SwiperSlide key={i}><ProjectCard {...p} /></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    )
};

export default Carousel;