import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import Drawer from "./components/drawer";

const SubmissionDetail = (props) => {

    const types = ['Pengajuan', 'Dokumen', 'Personal Data'];
    function TabGroup() {
        const [active, setActive] = useState(types[0]);
        return (
            <>
                <ButtonGroup>
                    {types.map(type => (
                        <Tab
                            key={type}
                            active={active === type}
                            onClick={() => setActive(type)}
                        >
                            {type}
                        </Tab>
                    ))}
                </ButtonGroup>
                <p />
                <p> Your payment selection: {active} </p>
            </>
        );
    }

    return (
        <Drawer title={'Pengajuan'} subtitle={'Detail Pengajuan'}>
            <Container1>
                <TabGroup />
            </Container1>


        </Drawer>
    )
}

export default SubmissionDetail;
const Tab = styled.button`
    font-size: 20px;
    padding: 10px 60px;
    cursor: pointer;
    opacity: 0.6;
    background: white;
    border: 0;
    border-radius: 24px;
    outline: 0;
    
    ${({ active }) =>
        active &&
        `
      color: #ffffff;
      border-bottom: 2px solid black;
      background-color: #003459;
      opacity: 1;
    `}
  `
const ButtonGroup = styled.div`
    display: flex;

    margin: 4em 0em 0em 4em;
  `

const Container1 = styled.div`
width: 1079px;
height: 893px;

background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
border-radius: 24px 24px 24px 24px;
`