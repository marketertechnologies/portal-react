import { ReactNode } from "react";
import Image from "next/image";

const Banner = ({
    children
}: {
    layout?: string;
    children?: ReactNode
}): JSX.Element => {

    return (
        <div className="flex justify-center md:px-8">
            <div className={`w-full max-w-[1440px] md:min-h-[500px] justify-center items-center bg-secondary flex flex-col md:flex-row`}>
                <div className="flex w-full flex-1 p-8 py-16 md:p-16">
                    <div className="max-w-[500px] flex flex-col justify-center gap-8">
                        {children}
                    </div>
                </div>
                <div className="w-full md:w-[40%] relative h-[200px] md:h-full">
                    <Image src="/images/illustration1.png" alt="" className="object-contain" layout="fill" />
                </div>
            </div>
        </div>
    )
}

export default Banner;