import React, { FC } from 'react'
import { Icon } from '..'

const Action: FC = () => {
    return (
        <div className='flex flex-row space-x-7'>
            <a><Icon name='PencilIcon' className='h-[18px] w-[18px] text-gray-500/70' /></a>
            <a><Icon name='TrashIcon' className='h-[18px] w-[18px] text-gray-500/70' /></a>
        </div>
    )
}

export default Action