import { useEffect, useState } from "react";
import Image from 'next/image';
import { Image as ImageType } from "../types/project";
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperProps } from "swiper/types";
import { IconArrowDown, IconArrowLeft, IconArrowRight, IconArrowSquareDown, IconArrowSquareRight, IconClose } from "../components/icons";

const modalStyle = {
    overlay: {
        backgroundColor: '#111',
        zIndex: 100,
    },
};

const useGallery = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openGallery = () => {
        setModalOpen(true);
    }

    useEffect(() => {

        if (modalOpen == true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        }

    }, [modalOpen]);

    const GalleryModal = ({
        images,
    }: {
        images: ImageType[],
    }) => {
        const [swiper, setSwiper] = useState<SwiperProps | null>(null);
        const [currentSlide, setCurrentslide] = useState(1);
        const [scroll, setScroll] = useState(false);

        if (!images || images.length < 1) return null;

        console.log(swiper);

        return (
            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                style={modalStyle}
                className="flex gap-4 justify-center items-center w-full h-full relative"
                contentLabel="Example Modal"
            >

                {scroll ? (
                    <div className="w-full h-full overflow-scroll py-24 px-4 md:px-24">
                        {images.map((image, i) => (
                            <div className="w-full max-h-[500px] md:max-h-fit relative mb-8">
                                <Image className="object-contain h-full" src={image.url} alt="" width={image.sizes[0]} height={image.sizes[1]} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="w-full h-full py-24 px-4 md:px-24">
                        <Swiper
                            className="flex-1 w-full h-full"
                            spaceBetween={24}
                            onSwiper={swiper => { setSwiper(swiper) }}
                            onSlideChange={swiper => { setCurrentslide(swiper.activeIndex) }}
                            preloadImages={true}
                            slidesPerView={1}
                        >
                            {images.map((image, i) => <SwiperSlide key={i} className="h-full w-full"><Image className="object-contain w-full h-full" src={image.url} alt="" layout="fill" /></SwiperSlide>)}
                        </Swiper>
                    </div >
                )}

                {
                    !scroll && swiper && (
                        <>
                            <div className="absolute text-white bottom-6">{currentSlide + 1}/{images.length}</div>
                            <button className="absolute z-100 bottom-4 md:bottom-auto left-4 p-2 rounded-full bg-secondary" onClick={() => swiper.slidePrev()}>
                                <IconArrowLeft />
                            </button>
                            <button className="absolute right-4 bottom-4 md:bottom-auto p-2 rounded-full bg-secondary" onClick={() => swiper.slideNext()}>
                                <IconArrowRight />
                            </button>
                        </>
                    )
                }

                <button className="absolute top-4 right-20 text-white hover:bg-white hover:text-black  pointer-cursor px-4 py-2 border flex justify-center items-center rounded-full" onClick={() => setScroll(!scroll)}>
                    {scroll ? <span className="inline-flex gap-2"><IconArrowSquareRight /> Horisontal</span> : <span className="inline-flex gap-2"><IconArrowSquareDown />Vertikal</span>}
                </button>
                <button className="absolute bg-secondary top-4 right-4 hover:bg-[#ddd] w-10 h-10 flex justify-center items-center rounded-full" onClick={() => setModalOpen(false)}>
                    <IconClose />
                </button>

            </Modal >)
    };



    return {
        openGallery,
        GalleryModal
    };
};

export default useGallery;