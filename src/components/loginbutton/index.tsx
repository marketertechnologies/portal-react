import { IconArrowRight, IconLock } from "../icons";
import useLogin from "../../hooks/uselogin";
import { useSession } from "next-auth/react";
import Image from 'next/image';
import { getInitialsFromName } from "../../utils";

const LoginButton = () => {

    const { openLogin, LoginModal } = useLogin();
    const { data, status } = useSession();

    return (
        status == 'authenticated' ?
            <>
                <button className="inline-flex p-1 bg-secondary rounded-full items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#ddd] flex justify-center items-center relative overflow-hidden">
                        {data?.user?.image ?
                            <Image src={data?.user?.image} layout="fill" alt="" />
                            :
                            (data?.user?.name && getInitialsFromName(data.user.name))
                        }
                    </div>
                    <IconArrowRight />
                </button >
            </>
            :
            <>
                <button onClick={openLogin} className="bg-[#f4f4f4] inline-flex gap-2 py-2 px-2 md:px-4 rounded-full hover:bg-[#ddd]">
                    <span><IconLock /></span>
                    <span className="hidden md:inline">Logg inn</span>
                </button>
                <LoginModal />
            </>
    );
};

export default LoginButton;
