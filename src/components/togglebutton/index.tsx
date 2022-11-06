import { ReactNode, useEffect, useState } from "react"

interface ToggleButtonProps {
    defaultSelected: boolean;
    children?: ReactNode;
    returnValue: boolean | number | string | null;
    onChange: (selected: boolean, returnValue: boolean | number | string | null) => void
}

const ToggleButton = ({
    defaultSelected,
    children,
    returnValue,
    onChange
}: ToggleButtonProps) => {

    const [selected, setSeleceted] = useState(defaultSelected);

    useEffect(() => {
        if (onChange) {
            onChange(selected, returnValue);
        }
    }, [selected, onChange, returnValue]);

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