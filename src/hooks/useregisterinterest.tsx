import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { IconClose } from "../components/icons";

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

const useRegisterInterest = () => {

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

    const openRegisterInterestForm = () => {
        setModalOpen(true);
    }

    const RegisterInterestModal = () => (
        <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={modalStyle}
            className="flex flex-col gap-4 justify-center items-center w-full max-w-[480px]"
            contentLabel="Example Modal"
        >
            <div className="bg-white relative w-full">
                <button className="absolute top-4 right-4 hover:bg-[#ddd] w-8 h-8 flex justify-center items-center rounded-full" onClick={() => setModalOpen(false)}><IconClose /></button>
                <div className="flex flex-col gap-6 p-8">
                    <h4 className="text-xl md:text-2xl">Meld interesse</h4>
                    <fieldset className="flex flex-col gap-1">
                        <label className="uppercase text-xs">Fullt navn</label>
                        <input className="bg-[#f4f4f4] p-4 rounded-md" type="text" name="fullname" placeholder="Skriv din fulle navn" />
                    </fieldset>
                    <fieldset className="flex flex-col gap-1">
                        <label className="uppercase text-xs">E-post</label>
                        <input className="bg-[#f4f4f4] p-4 rounded-md" type="email" name="email" placeholder="Skriv din e-postadresse" />
                    </fieldset>
                    <fieldset className="flex flex-col gap-1">
                        <label className="uppercase text-xs">Telefon</label>
                        <input className="bg-[#f4f4f4] p-4 rounded-md" type="tel" name="phone" />
                    </fieldset>
                    <fieldset className="flex flex-col gap-1">
                        <label className="uppercase text-xs">Melding (valgfri)</label>
                        <textarea className="bg-[#f4f4f4] p-4 rounded-md" rows={3} />
                    </fieldset>
                    <button className="bg-primary text-white p-4 rounded-full">Meld interesse</button>
                    <p className="text-xs text-center">Jeg aksepterer Eiendom.no sin personvernserklæring og samtykkeerklæring.</p>
                </div>
            </div>
        </Modal>
    );

    return {
        openRegisterInterestForm,
        RegisterInterestModal
    };
}

export default useRegisterInterest;