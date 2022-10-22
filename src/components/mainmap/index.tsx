import { useState } from "react";
import { IconArrowLeft, IconArrowRight } from "../icons";

const MainMap = (): JSX.Element => {

    const [drawerOpen, setDrawerOpen] = useState(true);

    return (
        <div className="absolute h-full w-full flex">
            <div className={`transition-all bg-white h-full ${drawerOpen ? 'w-[500px]' : 'w-0'}`}></div>
            <div className="bg-[#a5dbef] flex-1 p-8 relative">
                <button className="bg-white flex w-8 h-12  justify-center items-center absolute left-0 top-4    " onClick={() => { setDrawerOpen(!drawerOpen) }}>
                    {!drawerOpen ? <IconArrowRight /> : <IconArrowLeft />}
                </button>
            </div>
        </div>
    );
};

export default MainMap;