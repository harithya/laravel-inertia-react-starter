import React, { FC } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { LinkPaginationProps } from '@/Types';

interface Props {
    links: LinkPaginationProps[]
}

const PageLink: FC<LinkPaginationProps> = ({ active, label, url }) => {
    return (
        <InertiaLink className={`mr-1 mb-1 px-4 py-3 border border-solid border-gray-300 rounded text-sm hover:bg-white focus:outline-none focus:border-indigo-700 focus:text-indigo-700 ${active && 'bg-white'}`} href={url ?? ''}>
            <span className='text-sm' dangerouslySetInnerHTML={{ __html: label ?? '' }}></span>
        </InertiaLink>
    );
};

const PageInactive: FC<LinkPaginationProps> = ({ label }) => {
    return (
        <div className={`mr-1 mb-1 px-3 py-3 text-sm border rounded border-solid border-gray-300 text-gray`} dangerouslySetInnerHTML={{ __html: label ?? '' }} />
    );
};

const Pagination: FC<Props> = ({ links }) => {
    // dont render, if there's only 1 page (previous, 1, next)
    if (links.length === 3) return null;
    return (
        <div className="flex flex-wrap mt-6 -mb-1 space-x-2">
            {links.map(({ active, label, url }) => {
                return url === null ? (
                    <PageInactive key={label} label={label} />
                ) : (
                    <PageLink key={label} label={label} active={active} url={url} />
                );
            })}
        </div>
    );
};

export default Pagination;