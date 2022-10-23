import useShare from "../../hooks/useShare";
import { IconShare } from "../icons";

interface ShareButtonProps {
    url: string;
    title?: string;
}

const ShareButton = ({
    url,
    title,
}: ShareButtonProps) => {

    const { openShare, ShareModal } = useShare();

    return (
        <>
            <button onClick={openShare} className="bg-[#f4f4f4] inline-flex gap-2 py-2 px-4 rounded-full hover:bg-[#ddd]">
                <span><IconShare /></span>
                <span>Del</span>
            </button>
            <ShareModal url={url} title={title} />
        </>
    );
};

export default ShareButton;
