import { IconBell, IconCaretDown, IconCaretUp, IconHeart, IconLock, IconSearch, IconShieldFilled, IconSignOut, IconUser } from "../icons";
import useLogin from "../../hooks/uselogin";
import { useSession, signOut } from "next-auth/react";
import Image from 'next/image';
import { getInitialsFromName } from "../../utils";
import { useState } from "react";
import Link from "next/link";

const LoginButton = () => {

    const { openLogin, LoginModal } = useLogin();
    const { data, status } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        status == 'authenticated' ?
            <>
                <span className="relative">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="inline-flex p-1 pr-2 bg-secondary rounded-full items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#ddd] flex justify-center items-center relative overflow-hidden">
                            {data?.user?.image ?
                                <Image src={data?.user?.image} layout="fill" alt="" />
                                :
                                (data?.user?.name && getInitialsFromName(data.user.name))
                            }
                        </div>
                        {menuOpen ? <IconCaretUp /> : <IconCaretDown />}
                    </button >
                    {menuOpen && (
                        <div className="w-[280px] z-[1] bg-white shadow-md absolute right-0 rounded-md overflow-hidden">
                            <div className="bg-secondary p-8">
                                <h4 className="flex gap-1 text-md md:text-lg items-center"><span title="Verifisert konto" className="text-primary text-xs"><IconShieldFilled /></span>{data?.user?.name}</h4>
                                <div className="text-xs mt-0">{data?.user?.email}</div>
                                {/* <div className="text-xs flex gap-1 mt-1"><span title="Verifisert konto" className="text-primary"><IconShieldFilled /></span> Verifisert konto</div> */}
                            </div>
                            <ul className="flex flex-col gap-0 p-4 py-8 ">
                                <li>
                                    <Link href="/profil" passHref>
                                        <a className="px-4 py-2 w-full rounded-full flex gap-2 items-center hover:bg-secondary"><IconUser /> Min side</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/profil/varslinger" passHref>
                                        <a className="px-4 py-2 w-full rounded-full flex gap-2 items-center hover:bg-secondary"><IconBell /> Varslinger</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/profil/lagrede-sok" passHref>
                                        <a className="px-4 py-2 w-full rounded-full flex gap-2 items-center hover:bg-secondary"><IconSearch />Lagrede søk</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/profil/favoritter" passHref>
                                        <a className="px-4 py-2 w-full rounded-full flex gap-2 items-center hover:bg-secondary"><IconHeart /> Favoritter</a>
                                    </Link>
                                </li>
                                <li className="mt-4">
                                    <button onClick={() => signOut()} className="px-4 py-2 border w-full rounded-full flex gap-2 items-center hover:border-black"><IconSignOut />Logg ut</button>
                                </li>
                            </ul>
                        </div>
                    )}
                </span>
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
