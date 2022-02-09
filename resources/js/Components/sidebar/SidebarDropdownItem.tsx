import React, { FC } from 'react';
import { Link } from '@inertiajs/inertia-react';

interface Props {
    title: string,
    href?: string,
}
const SidebarDropdownItem: FC<Props> = (props) => {
    return (
        <li className='mb-4'>
            <Link href={props.href ?? '/'} className='text-gray-500 hover:font-medium cursor-pointer flex justify-between items-center text-[13px]'>
                {props.title}
            </Link>
        </li>
    );
};

export default SidebarDropdownItem;
