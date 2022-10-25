import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { IconArrowRight, IconClose, IconFacebookColor, IconGoogleColor } from "../components/icons";

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

const useLogin = () => {

    const [loginOpen, setLoginOpen] = useState(false);
    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);


    useEffect(() => {

        if (loginOpen == true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        }

    }, [loginOpen]);

    useEffect(() => {
        getProviders().then(setProviders);
    }, []);

    const openLogin = () => {
        setLoginOpen(true);
    }

    const LoginModal = () => (
        <Modal
            isOpen={loginOpen}
            onRequestClose={() => setLoginOpen(false)}
            style={modalStyle}
            className="flex flex-col gap-4 justify-center items-center w-full max-w-[480px]"
            contentLabel="Example Modal"
        >
            <div className="bg-white w-full">
                <div className="bg-tertiary p-8 text-lg relative">
                    <button className="absolute top-4 right-4 hover:bg-[#ddd] w-8 h-8 flex justify-center items-center rounded-full" onClick={() => setLoginOpen(false)}><IconClose /></button>
                    <span>Få smarte anbefalinger, oppdateringer og nyheter på nybygg.</span>
                </div>
                <div className="flex flex-col gap-8 p-8">
                    <h4 className="text-xl md:text-2xl">Logg inn eller registrer deg</h4>
                    <fieldset className="flex flex-col gap-2">
                        <label className="uppercase text-xs">E-post</label>
                        <input className="bg-[#f4f4f4] p-4 rounded-md" type="text" placeholder="Skriv din e-postadresse" />
                    </fieldset>
                    <button className="bg-primary text-white p-4 rounded-full inline-flex justify-center gap-2">Gå videre <IconArrowRight /></button>
                    {providers && <>
                        <div className="flex gap-2 items-center text-[#888]">
                            <hr className="border-b border-t-0 flex-1" />
                            <span className="uppercase text-xs">eller</span>
                            <hr className="border-b border-t-0 flex-1" />
                        </div>
                        <div className="flex justify-center gap-4">

                            <button onClick={() => signIn(providers.google.id)} className="flex-1 border px-4 py-2 rounded-full border-[#ccc] hover:border-[#000] flex justify-center gap-2">
                                <IconGoogleColor /> <span>Google</span>
                            </button>
                            <button onClick={() => signIn(providers.google.id)} className="flex-1 border px-4 py-2 rounded-full border-[#ccc] hover:border-[#000] flex justify-center gap-2">
                                <IconFacebookColor /> <span>Facebook</span>
                            </button>
                        </div>
                    </>}
                    <p className="text-xs text-center">Jeg aksepterer Eiendom.no sin personvernserklæring og samtykkeerklæring.</p>
                </div>
            </div>
        </Modal>
    );

    return {
        openLogin,
        LoginModal
    };
}

export default useLogin;