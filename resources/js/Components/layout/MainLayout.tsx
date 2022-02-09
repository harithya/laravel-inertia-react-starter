import React, { FC } from 'react';
import Container from '../layout/Container';
import Sidebar from '../sidebar/Sidebar';


const MainLayout: FC = (props) => {
    return (
        <div className='flex container'>
            <Sidebar />
            <Container className='px-10 py-14'>
                {props.children}
            </Container>
        </div>
    );
};

export default MainLayout;
