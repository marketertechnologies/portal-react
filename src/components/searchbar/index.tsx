import Link from "next/link";
import React, { ReactNode } from "react";
import { IconSearch } from "../icons";

const Pill = ({ href, children }: {
    href: string;
    children: ReactNode
}) => (
    <Link href={href} passHref>
        <a className="inline-flex px-3 py-1 md:px-4 md:py-2 rounded-full bg-secondary hover:bg-[#ddd] hover:border-black">{children}</a>
    </Link>
);

const SearchBar = () => {
    return (
        <div className="px-8 flex justify-center mb-8">
            <div className="max-w-[1440px] w-full gap-8 flex flex-col">
                {/* <p>Søk etter ønsket bosted</p> */}
                <div className="relative flex items-center">
                    <input className="pl-10 md:pl-12 font-primary border-b text-3xl md:text-4xl py-4 w-full" placeholder="Finn din nye bolig" type="search" />
                    <span className="pointer-events-none text-[#aaa] absolute left-0 text-xl md:text-2xl"><IconSearch /></span>
                </div>
                <ul className="flex gap-2 flex-wrap">
                    <li>
                        <Pill href="/prosjekter?city=oslo">Oslo</Pill>
                    </li>
                    <li>
                        <Pill href="/prosjekter?city=bergen">Bergen</Pill>
                    </li>
                    <li>
                        <Pill href="/prosjekter?city=stavanger">Stavanger</Pill>
                    </li>
                    <li>
                        <Pill href="/prosjekter?city=trondheim">Trondheim</Pill>
                    </li>
                    <li>
                        <Pill href="/prosjekter?city=fredrikstad">Fredrikstad</Pill>
                    </li>
                    <li>
                        <Pill href="/prosjekter?city=nearby">I nærheten</Pill>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SearchBar;