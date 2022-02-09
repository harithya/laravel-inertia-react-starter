import React, { FC } from 'react';
import * as HIcons from '@heroicons/react/solid'

export type IconNameProps = keyof typeof HIcons;

interface Props {
    name: IconNameProps,
    className?: string
}

const Icon: FC<Props> = (props) => {
    const { ...icons } = HIcons
    const TheIcon = icons[props.name]
    return <TheIcon className={`h-6 w-6 ${props.className}`} aria-hidden="true" />;
};

export default Icon;
