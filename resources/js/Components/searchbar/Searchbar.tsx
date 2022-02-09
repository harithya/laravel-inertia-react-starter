import React, { memo } from 'react';

const Searchbar = () => {
    return (
        <div className='flex items-center space-x-4 w-4/12 py-1 rounded-md border bg-white pl-5'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input type={"search"} className="rounded-sm w-full border-none focus:ring-0" placeholder="Masukan kata kunci" />
        </div>
    );
};

export default memo(Searchbar);
