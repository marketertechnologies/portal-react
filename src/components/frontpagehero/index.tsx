import Image from "next/image";
import { useState } from "react";
import { formatPrice } from "../../utils";
import { IconArea, IconArrowRightCircle, IconHouse, IconMapPin } from "../icons";
import LikeButton from "../likebutton";

const TEST_DATA = [
    {
        uuid: '707c2a7f-a048-4d9e-8186-53f3e21b88dc',
        image: 'https://d2ou9824qr5ucu.cloudfront.net/e9cde66f50f962313c280e82c0ae1d65.webp',
        city: 'Aurdal',
        title: 'Lauvtjernveien',
        price_from: 4812510,
        price_to: 5562510,
        size_from: 50,
        size_to: 75,
        units_available: 7,
        liked: false,
    },
    {
        uuid: '594456d4-54f7-4f22-a658-4f8ba60df077',
        image: 'https://d2ou9824qr5ucu.cloudfront.net/0e91e8830545743770944a6a755c483a.webp',
        city: 'Oslo',
        title: 'Bakkbygrenda',
        price_from: 9000000,
        price_to: 11500000,
        size_from: 85,
        size_to: 120,
        units_available: 15,
        liked: true,
    },
    {
        uuid: '253aa18a-1267-4723-8b93-edf5037b14cf',
        image: 'https://d2ou9824qr5ucu.cloudfront.net/7ada5b9cc9536d1cc295bb2d537ff6b3.webp',
        city: 'Flekkfjord',
        title: 'Sveåsen',
        price_from: 4812510,
        price_to: 5562510,
        size_from: 50,
        size_to: 75,
        units_available: 7,
        liked: true,
    },
];


const FrontPageHero = (): JSX.Element | null => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const projects = TEST_DATA;

    console.log('render hero');

    return (
        <>
            {projects && projects.map((project, i) => {

                const nextIndex = currentIndex + 1 >= projects.length ? 0 : currentIndex + 1;
                const next = projects[nextIndex];

                return (
                    <div key={project.uuid} className={`md:px-8 justify-center shrink-0 ${currentIndex === i ? 'flex' : 'hidden'}`}>
                        <div className="bg-black max-w-[1440px] w-full relative">
                            <div className="pb-[400px] md:pb-[600px] relative">
                                <Image alt="" layout="fill" className="object-cover absolute top-0 left-0 w-full h-full" src={project.image} />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)]"></div>
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

