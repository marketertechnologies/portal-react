import Link from "next/link";
import { IconFacebook, IconInstagram, IconLinkedIn } from "../icons";
import { NorwegianLogo } from "../logo";

const Footer = (): JSX.Element => {

    return (
        <footer className="bg-[#f9f3f3] flex flex-col">
            <div className="flex justify-center px-8 py-12">
                <div className="w-full max-w-[1440px] flex flex-col md:grid md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2">
                        <Link href="/" passHref>
                            <a className="inline-flex">
                                <NorwegianLogo />
                            </a>
                        </Link>
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li className="uppercase text-xs">For boligkjøpere</li>
                        <li>
                            <Link href="" passHref>
                                <a>Finn ditt nye hjem</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-4">
                        <li className="uppercase text-xs">For utbyggere</li>
                        <li>
                            <Link href="" passHref>
                                <a>Hvordan fungerer det?</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref>
                                <a>Bli kunde</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-4">
                        <li className="uppercase text-xs">Eiendom.no</li>
                        <li>
                            <Link href="" passHref>
                                <a>Om tjenesten</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref>
                                <a>Support</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref>
                                <a>Artikler</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center px-8 py-8 border-t">
                <div className="w-full max-w-[1440px] text-sm flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <span>© 2022 Eiendom.no</span>
                        <Link href="https://www.marketer.tech/privacy-policy" passHref>
                            <a>Personvernserklæring</a>
                        </Link>
                        <Link href="/samtykke" passHref>
                            <a>Samtykkeerklæring</a>
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        <Link href="" passHref>
                            <a>
                                <IconFacebook />
                            </a>
                        </Link>
                        <Link href="" passHref>
                            <a>
                                <IconInstagram />
                            </a>
                        </Link>
                        <Link href="" passHref>
                            <a>
                                <IconLinkedIn />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;