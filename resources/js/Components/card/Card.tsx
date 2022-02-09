import React, { FC } from 'react';

interface Props {
    table?: boolean,
    className?: string
}
const Card: FC<Props> = (props) => {
    return (
        <div className={`bg-white ${props.table ? 'p-0' : 'p-5'} border rounded-md  container ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card;
