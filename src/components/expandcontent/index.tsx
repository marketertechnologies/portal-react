import { ReactNode, useState } from "react";

const ExpandContent = ({
    height,
    children
}: {
    height: string;
    children: ReactNode;
}): JSX.Element => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <div className="overflow-hidden relative" style={{ 'height': expanded ? 'auto' : height }}>
                {children}
                {!expanded && <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)]"></div>}
            </div>
            <div className="flex justify-center items-center mt-4">
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="border px-4 py-2 rounded-full text-black"
                >{expanded ? 'Vis mindre' : 'Vis mer'}</button>
            </div>
        </div>
    )
};

export default ExpandContent