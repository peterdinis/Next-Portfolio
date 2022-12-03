import React from 'react';
import Navbar from './Navbar';

interface Props {
    children: React.ReactNode;
}

export default function Layout(props: Props) {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}