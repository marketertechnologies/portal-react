import { useState } from "react";
import { IconHeart, IconHeartFilled } from "../icons";

const LikeButton = ({
    uuid,
    liked = false,
}: {
    uuid?: string;
    liked?: boolean;
}): JSX.Element | null => {

    const [isLiked, setIsLiked] = useState(liked);

    if (!uuid) return null;

    return (
        <button onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsLiked(!isLiked);
        }} className={`bg-[#f4f4f4] inline-flex gap-2 py-2 px-2 rounded-full hover:bg-[#ddd] ${isLiked ? 'text-primary' : 'text-black'}`}>
            <span>{isLiked ? <IconHeartFilled /> : <IconHeart />}</span>
        </button>
    );
};

export default LikeButton;
