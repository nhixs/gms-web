import React from 'react';
import styled from 'styled-components';

import Drawer from "./components/drawer";

const clientNew = (props) => {
    return (
        <Drawer title={'Anggota'} subtitle={'Tambah Anggota'}>
            <Container>

            </Container>
        </Drawer>
    )
}

const Container = styled.div`
display: flex;
height: fit-content;
flex-direction: column;
width: 69em;
padding: 2em;
background-color: #ffffff;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
border-radius: 24px;
`


export default clientNew
