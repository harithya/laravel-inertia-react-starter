import React, { FC } from 'react';

const Th: FC = (props) => {
    return <th className='px-6 py-4 text-sm font-semibold text-gray-500'>{props.children}</th>;
};

export default Th;
