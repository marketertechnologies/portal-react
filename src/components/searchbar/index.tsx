import Link from "next/link";

const SearchBar = () => {
    return (
        <div className="px-8 flex justify-center mb-8">
            <div className="max-w-[1440px] w-full gap-4 flex flex-col">
                {/* <p>Søk etter ønsket bosted</p> */}
                <input className="font-primary border-b text-3xl md:text-4xl py-4 w-full" placeholder="Finn din nye bolig" type="search" />
                <ul className="flex gap-2 flex-wrap">
                    <li>
                        <Link href="/prosjekter?city=oslo" passHref>
                            <a className="inline-flex px-4 py-2 border rounded-full hover:border-black">Oslo</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/prosjekter?city=bergen" passHref>
                            <a className="inline-flex px-4 py-2 border rounded-full hover:border-black">Bergen</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/prosjekter?city=stavanger" passHref>
                            <a className="inline-flex px-4 py-2 border rounded-full hover:border-black">Stavanger</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/prosjekter?city=trondheim" passHref>
                            <a className="inline-flex px-4 py-2 border rounded-full hover:border-black">Trondheim</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/prosjekter?city=fredrikstad" passHref>
                            <a className="inline-flex px-4 py-2 border rounded-full hover:border-black">Fredrikstad</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/prosjekter?city=nearby" passHref>
                            <a className="whitespace-nowrap inline-flex px-4 py-2 border rounded-full hover:border-black">I nærheten</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SearchBar;