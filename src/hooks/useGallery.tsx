import { useEffect, useState } from "react";
import Image from 'next/image';
import { Image as ImageType } from "../types/project";
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperProps } from "swiper/types";
import { IconArrowLeft, IconArrowRight, IconArrowSquareDown, IconArrowSquareRight, IconClose } from "../components/icons";
import { Keyboard } from "swiper";

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
        const [currentSlide, setCurrentslide] = useState(0);
        const [scroll, setScroll] = useState(false);

        if (!images || images.length < 1) return null;

        return (
            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                style={modalStyle}
                className="flex gap-4 justify-center items-center w-full h-full relative outline-none"
                contentLabel="Example Modal"
            >

                {scroll ? (
                    <div className="w-full h-full overflow-scroll py-24 px-4 md:px-24">
                        {images.map((image, i) => (
                            <div key={i} className="w-full aspect-video max-h-[calc(100vh-12rem)] relative mb-8 relative flex justify-center">
                                <Image className="object-contain w-full h-auto relative" layout="fill" src={image.url} alt="" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="w-full h-full py-24 px-4 md:px-20">
                        <Swiper
                            modules={[Keyboard]}
                            loop={true}
                            className="flex-1 w-full h-full !overflow-visible md:overflow-hidden"
                            spaceBetween={24}
                            onSwiper={swiper => { setSwiper(swiper) }}
                            onSlideChange={swiper => { setCurrentslide(swiper.activeIndex % images.length) }}
                            preloadImages={true}
                            slidesPerView={1}
                            keyboard
                        >
                            {images.map((image, i) => <SwiperSlide key={i} className="h-full w-full"><Image className="h-full w-full object-contain" src={image.url} alt="" layout="fill" /></SwiperSlide>)}
                        </Swiper>
                    </div >
                )}

                {
                    !scroll && swiper && (
                        <>
                            <div className="absolute text-white bottom-6">{currentSlide + 1}/{images.length}</div>
                            {images.length > 1 && <button className="absolute z-[1] bottom-4 md:bottom-auto left-4 p-2 rounded-full bg-secondary" onClick={() => swiper.slidePrev()}>
                                <IconArrowLeft />
                            </button>}
                            {images.length > 1 && <button className="absolute z-[1] right-4 bottom-4 md:bottom-auto p-2 rounded-full bg-secondary" onClick={() => swiper.slideNext()}>
                                <IconArrowRight />
                            </button>}
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