import React, { FC } from 'react';

interface Props {
    title: string,
    subtitle?: string,
    dataCount?: number
}
const Section: FC<Props> = (props) => {
    return (
        <div className='container'>
            <div className='mb-10'>
                <h2 className='text-3xl font-medium mb-4'>{props.title}</h2>
                {props.subtitle && <p className='text-gray-400 text-sm -mt-2  tracking-wide'>{props.subtitle}</p>}
                {props.dataCount && <p className='text-gray-400 text-sm -mt-2  tracking-wide'>{props.dataCount} Enteries Found</p>}
            </div>
            <div className='container'>
                {props.children}
            </div>
        </div>
    );
};

export default Section;
