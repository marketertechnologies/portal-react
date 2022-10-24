import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { IconChatBubble, IconClose, IconEnvelope, IconLink } from "../components/icons";

const modalStyle = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
    },
};

const useShare = () => {

    const [modalOpen, setModalOpen] = useState(false);

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


    const openShare = () => {
        setModalOpen(true);
    }

    interface ShareModalProps {
        url: string;
        title?: string;
    }

    const ShareModal = ({
        url,
        title,
    }: ShareModalProps) => (
        <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={modalStyle}
            className="flex flex-col gap-4 justify-center items-center w-full max-w-[480px]"
            contentLabel="Example Modal"
        >
            <div className="bg-white w-full">
                <div className="flex flex-col gap-8 p-8 relative">
                    <button className="absolute top-4 right-4 hover:bg-[#ddd] w-8 h-8 flex justify-center items-center rounded-full" onClick={() => setModalOpen(false)}><IconClose /></button>
                    <h4 className="text-xl md:text-2xl">Del {title}</h4>
                    <fieldset className="flex flex-col gap-2">
                        <div className="bg-[#f4f4f4] p-4 rounded-md">{url}</div>
                    </fieldset>
                    <button className="bg-primary text-white p-4 rounded-full inline-flex justify-center gap-2"><IconLink /> Kopier lenke</button>
                    <div className="flex gap-4">
                        <button className="flex-1 border hover:border-black text-black py-2 px-4 rounded-full inline-flex justify-center gap-2"><IconEnvelope />E-post</button>
                        <button className="flex-1 border hover:border-black text-black py-2 px-4 rounded-full inline-flex justify-center gap-2"><IconChatBubble />Send SMS</button>
                    </div>
                </div>
            </div>
        </Modal>
    );

    return {
        openShare,
        ShareModal
    };
}

export default useShare;