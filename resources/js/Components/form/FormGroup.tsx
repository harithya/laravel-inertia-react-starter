import React, { FC } from 'react';

interface Props {
    title: string,
    error?: string
}
const FormGroup: FC<Props> = (props) => {
    return (
        <div className={`form-group  ${props.error && "form-error"}`}>
            <label>{props.title}</label>
            {props.children}
            {props.error && <p className='text-red-500 text-xs mt-1'>{props.error}</p>}
        </div>
    );
};

export default FormGroup;
