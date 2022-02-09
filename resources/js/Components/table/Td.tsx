import React, { FC } from 'react';

const Td: FC = (props) => {
    return (
        <td className="border-t">
            <span className="px-6 py-4 text-sm flex items-center">
                {props.children}
            </span>
        </td>
    );
};

export default Td;
