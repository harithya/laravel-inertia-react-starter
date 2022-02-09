import React, { FC } from 'react';
import Th from './Th'
import Tr from './Tr'

interface Props {
    thead?: Array<string>
}
const Table: FC<Props> = (props) => {
    return (
        <table className="w-full whitespace-nowrap">
            {props.thead && (
                <thead>
                    <Tr isHeader>
                        {props.thead.map((val, index) => <Th key={`th-${index}`}>{val}</Th>)}
                    </Tr>
                </thead>
            )}
            {props.children}
        </table>
    );
};

export default Table;
