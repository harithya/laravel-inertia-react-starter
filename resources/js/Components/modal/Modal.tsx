import React, { FC } from 'react';
import { Button } from '..';

interface Props {
    isOpen?: boolean
}
const Modal: FC<Props> = (props) => {
    return (
        <div className='fixed z-10 inset-0  max-w-full max-h-full bg-gray-300/70 flex justify-center items-center' >
            <div className='w-4/12 h-52 bg-white border rounded-md'>
                <div className='bg-slate-50 border-b p-4 flex justify-between items-center '>
                    <label className='text-sm font-medium text-gray-600'>Tambah Data</label>
                    <Button variant="secondary" className='py-1.5 px-1.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Button>
                </div>
                <div>
                    {props.children}
                </div>
                <div className='bg-slate-50 border-b p-4 '>
                    <Button variant="secondary" >
                        Batal
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
