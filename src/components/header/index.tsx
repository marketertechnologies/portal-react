import Link from "next/link";
import { IconMap, IconSearch } from "../icons";
import LoginButton from "../loginbutton";
import { NorwegianLogo, LogoIcon } from "../logo";

const Header = (): JSX.Element => {

    return (
        <header className="border-b px-8 flex justify-center">
            <nav className="max-w-[1440px] w-full flex h-20 items-center justify-between">
                <div className="flex gap-4 md:gap-8 items-center">
                    <Link href="/" passHref>
                        <a><span className="hidden md:inline"><NorwegianLogo /></span><span className="md:hidden"><LogoIcon /></span></a>
                    </Link>
                    <div className="flex gap-2 items-center">
                        <button className="inline-flex gap-2 py-2 px-2 md:px-4 rounded-full">
                            <span><IconSearch /></span>
                            <span className="hidden md:inline">Søk</span>
                        </button>
                        <Link href="/prosjekter" passHref>
                            <a className="inline-flex py-2 px-2 md:px-4 md:gap-2 rounded-full">
                                <span><IconMap /></span>
                                <span className="hidden md:inline">Vis boliger på kart</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <Link href="/om-oss" passHref>
                        <a className="inline-flex py-2 px-4 rounded-full hidden md:inline">Om oss</a>
                    </Link>
                    <LoginButton />
                </div>
            </nav>
        </header>
    )

}

export default Header;