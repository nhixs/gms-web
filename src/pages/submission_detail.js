import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import Drawer from "./components/drawer";


const SubmissionDetail = (props) => {

    const [active, setActive] = useState(0);
    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };

    return (
        <Drawer title={'Pengajuan'} subtitle={'Detail Pengajuan'}>
            <Container1>
                <div className="App">

                    <Tabs>
                        <TabButton onClick={handleClick} active={active === 0} id={0}>
                            Pegajuan
                        </TabButton>

                        <TabButton onClick={handleClick} active={active === 1} id={1}>
                            Dokumen
                        </TabButton>
                        <TabButton onClick={handleClick} active={active === 2} id={2}>
                            Personal Data
                        </TabButton>
                    </Tabs>
                    <Line />
                    <>
                        <Content active={active === 0}>
                            <h1>Content 1</h1>
                        </Content>
                        <Content active={active === 1}>
                            <h1>Content 2</h1>
                        </Content>
                        <Content active={active === 2}>
                            <h1>Content 3</h1>
                        </Content>
                    </>

                </div>


            </Container1>
        </Drawer>
    )
}

export default SubmissionDetail;


const Container1 = styled.div`
width: 682px;
height: 520px;

padding: 2em;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
border-radius: 24px 24px 24px 24px;
`
const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
`
const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "lightgray")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }
`
const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`
const TabButton = styled.button`
width: 115px;
height: 32px;

background-color: ${props => (props.active ? "#003459" : "#ffffff")};
color: ${props => (props.active ? "#ffffff" : "#003459")};
font-family: Franklin Gothic Medium;
border-radius: 10px;
outline: none;
border: none;
`

const Line = styled.div`
border: .5px solid #003459;
`