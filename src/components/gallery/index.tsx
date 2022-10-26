import Image from "next/image";
import useGallery from "../../hooks/useGallery";

import { Image as ImageType } from "../../types/project";

const Gallery = ({
    images
}: {
    images: ImageType[];
}) => {

    const { openGallery, GalleryModal } = useGallery();

    return (
        <>
            <div className="pb-[56%] lg:pb-[40%] bg-black w-full relative" onClick={openGallery}>
                {images && images[0] && <Image className="object-cover" alt="" layout="fill" src={images[0].url} />}
                <button className="bg-white text-black px-4 py-2 rounded-full absolute bottom-4 right-4">Åpne galleri</button>
            </div>
            <GalleryModal images={images} />
        </>
    )
};

export default Gallery;