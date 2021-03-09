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
                            <HeadContent>
                                APP-0000001101
                                <div></div>
                            </HeadContent>
                            <BodyContent>
                                <LeftSide>
                                    <Label1>Nama</Label1>
                                    <Label1>No. Telepon</Label1>
                                    <Label1>Email</Label1>
                                    <Label1>Produk</Label1>



                                </LeftSide>
                                <MidSide>
                                    <Label2>Julius Obed Wahyu Jati</Label2>
                                    <Label2>085716576999</Label2>
                                    <Label2>juliusobed@gmail.com</Label2>
                                    <Label2>Pinjaman Anggunan</Label2>

                                </MidSide>
                                <RightSide>

                                </RightSide>
                            </BodyContent>
                            <Line></Line>
                            <BodyContent>
                                <LeftSide>

                                    <Label1>Nominal</Label1>
                                    <Label1>Tenor</Label1>
                                    <Label1>Tujuan Peminjaman</Label1>


                                </LeftSide>
                                <MidSide>

                                    <Label2 style={{ fontSize: "23px" }}>Rp. 10.000.000</Label2>
                                    <Label2>12 Bulan</Label2>
                                    <Label2 style={{ width: "12em" }}>Untuk membayar uang masuk kuliah 2021 di UMN</Label2>

                                </MidSide>
                                <RightSide>

                                </RightSide>
                            </BodyContent>
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
height: fit-content;

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

margin: 1em 0em;
`

const HeadContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 30px;

margin-left: 1em;
`

const BodyContent = styled.div`
display: flex;
flex-direction: space-between;
margin: 2.5em 0em 0em 0em;
`

const Data = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Label1 = styled.label`
font-size: 18px;

width: 6em;
margin: .5em 0em;
`
const Label2 = styled.label`
font-size: 18px;


`
const LeftSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

margin: 0em 10em 0em .5em;
`
const RightSide = styled.div`

`
const MidSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

width: 20em;
`