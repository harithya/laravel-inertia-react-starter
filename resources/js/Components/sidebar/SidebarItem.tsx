import React, { FC, useState } from 'react';
import Icon, { IconNameProps } from '../icon/Icon'
import { Link } from '@inertiajs/inertia-react'

interface Props {
    title: string,
    icon?: IconNameProps,
    href?: string,
    withDropdown?: boolean,
}
const SidebarItem: FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className='mb-8'>
            {props.href ? (
                <Link href={props.href ?? '/'} className='text-gray-500 hover:font-medium flex items-center space-x-4 text-sm'>
                    {props.icon && <Icon name={props.icon} className="text-gray-500/70 h-5 w-5" />}
                    <span>{props.title}</span>
                </Link>
            ) : (
                <a onClick={() => setIsOpen((prev) => !prev)} className='text-gray-500 hover:font-medium cursor-pointer flex justify-between items-center text-sm'>
                    <div className='flex items-center space-x-4 '>
                        {props.icon && <Icon name={props.icon} className="text-gray-500/70 h-5 w-5" />}
                        <span>{props.title}</span>
                    </div>
                    {props.withDropdown && <Icon name='ChevronDownIcon' className='h-4 w-4' />}
                </a>
            )}

            {/* Item dropdowns */}
            {(props.withDropdown && isOpen) && <ul className=' px-9 mt-6'>
                {props.children}
            </ul>}
        </li>
    );
};

export default SidebarItem;
