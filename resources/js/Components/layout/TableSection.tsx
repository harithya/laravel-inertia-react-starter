import React, { FC } from 'react';
import { Button, Card, Modal, Searchbar } from '..';

interface Props {
    href: string,
}
const TableSection: FC<Props> = (props) => {
    return (
        <>
            <div className='mb-5 flex justify-between items-center'>
                <Searchbar />
                <Button className='flex items-center space-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <span>Buat entri baru</span>
                </Button>
            </div>
            <Card table>
                {props.children}
            </Card>
        </>
    );
};

export default TableSection;
