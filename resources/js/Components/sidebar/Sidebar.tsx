import React, { FC } from 'react';
import { SidebarDropdownItem } from '..';
import Divider from '../divider/Divider';
import SidebarItem from './SidebarItem';

const Sidebar: FC = () => {
    return (
        <div className='bg-white  h-screen sticky  w-80 border-r left-0 top-0 bottom-0'>
            {/* Header  */}
            <div className='flex space-x-5 items-center p-5'>
                <img className='w-8 h-8 object-contain' src='https://www.svgrepo.com/show/354399/strapi-icon.svg' />
                <div className='flex flex-col'>
                    <h3 className='font-semibold text-sm'>Strapi Dashboard</h3>
                    <span className='text-xs text-gray-400'>Workplace</span>
                </div>
            </div>
            <Divider />
            {/* Content */}
            <div className='p-5'>
                <ul>
                    <SidebarItem
                        title='Dashboard'
                        href='/'
                        icon="HomeIcon" />
                    <SidebarItem
                        title='Master'
                        withDropdown
                        icon={"ViewGridAddIcon"}>
                        <SidebarDropdownItem href='/admin/master/category' title='Category' />
                        <SidebarDropdownItem title='Brand' />
                    </SidebarItem>
                </ul>
            </div>
            {/* Footer */}
            <div className='absolute right-0 left-0 bottom-0'>
                <Divider />
                <div className='flex items-center space-x-4 p-5'>
                    <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' className='h-8 w-8 rounded-full object-cover' />
                    <span className='font-medium text-sm text-gray-500'>Harithya Wisesa</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
