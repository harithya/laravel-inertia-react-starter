import React, { FC } from 'react';

interface Props {
    className?: string
}
const Container: FC<Props> = (props) => {
    return (
        <div className={`container ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Container;
