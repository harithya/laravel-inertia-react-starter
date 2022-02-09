import React, { FC } from 'react';

interface Props {
    isHeader?: boolean
}
const Tr: FC<Props> = (props) => {
    return (
        <tr className={`${props.isHeader ? 'text-left font-semibold' : ''} `}>
            {props.children}
        </tr>
    );
};

export default Tr;