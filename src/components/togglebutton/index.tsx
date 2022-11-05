import { ReactNode, useEffect, useState } from "react"

const ToggleButton = ({
    defaultSelected,
    children,
    onChange,
    value,
}: {
    defaultSelected: boolean;
    children: ReactNode;
    onChange: (seleted: boolean, value: boolean | string | number | null) => void;
    value?: string | number;
}) => {

    const [selected, setSeleceted] = useState(defaultSelected);

    useEffect(() => {
        if (onChange) {
            onChange(selected, value ?? null);
        }
    }, [selected, onChange, value]);

    return (
        <button
            onClick={() => { setSeleceted(!selected) }}
            className={`${selected ? 'bg-primary text-white border-secondary' : 'bg-secondary  hover:bg-[#ddd]'} rounded-full px-4 py-2 text-md`}
        >
            {children}
        </button>
    )
};

export default ToggleButton;