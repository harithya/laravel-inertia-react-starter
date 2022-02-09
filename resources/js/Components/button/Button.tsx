import React, { FC } from 'react';

interface Props {
    className?: string,
    onClick?: () => void,
    variant?: "primary" | "secondary"
}
const Button: FC<Props> = (props) => {
    const getVariant = () => {
        const variant = {
            "primary": "hover:bg-blue-700 border bg-blue-600 text-white",
            "secondary": "hover:bg-gray-100 border bg-white text-gray-600 border"
        }
        return variant[props.variant ?? "primary"];
    }
    return <button
        onClick={props.onClick}
        className={`py-2 px-5 font-normal text-sm items-center ${getVariant()} rounded-md ${props.className}`}>
        {props.children}
    </button>;
};

export default Button;
