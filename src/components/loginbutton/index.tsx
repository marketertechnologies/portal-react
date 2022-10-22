import { IconLock } from "../icons";
import useLogin from "../../hooks/uselogin";

const LoginButton = () => {

    const { openLogin, LoginModal } = useLogin();

    return (
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
