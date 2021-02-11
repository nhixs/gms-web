import React from 'react';
import styled from 'styled-components';

import Drawer from "./components/drawer";
import LogoContainer from "./components/logoContainer";
import Koperasi from "../assets/logo.png";
import YellowArrow from "../assets/yellow_arrow.svg";

const DepositProductList = (props) => {
    return (
        <Drawer title={'Simpanan'} subtitle={'Tambah Produk Simpanan'}>
            <Content>
                <ContainerMain>
                    <Header>
                        <LeftSide>
                            <LogoContainer image={Koperasi} scale={"3em"} space={".5em"} />
                            <KoperasiTitle>Gapura Kayumanis</KoperasiTitle>
                        </LeftSide>
                        <MidSide>
                        </MidSide>
                        <RightSide>
                            Tema
                        <TemaContainer>
                                <ColorChooser />
                                <img src={YellowArrow} style={{ width: "12px" }} />
                            </TemaContainer>
                        </RightSide>
                    </Header>
                    <FormGroup>
                        <Form>
                            <Label htmlFor="deposit_name">Nama Simpanan</Label>
                            <Input id="deposit_name" type="text" />
                        </Form>
                        <Form>
                            <Label htmlFor="details">Detail</Label>
                            <TextArea />
                        </Form>
                        <Form>
                            <Label htmlFor="deposit_type">Tipe Simpanan</Label>
                            <div><Input type="radio" /><Input type="radio" /></div>
                        </Form>
                    </FormGroup>
                </ContainerMain>
                <ContainerSub>

                </ContainerSub>
            </Content>
        </Drawer>
    )
}

const Content = styled.div`
display: flex;
flex-direction: row;

width: 100%;
`
const ContainerMain = styled.div`
display: flex;
height: fit-content;
flex-direction: column;
width: 75em;

margin-right: 2em; 
padding: 4em;
background-color: #ffffff;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
border-radius: 24px;
`
const ContainerSub = styled.div`
background-color: #ffffff;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
border-radius: 24px;

width: 34em;
height: 22em;
`
const Header = styled.div`
display: flex;
flex-direction: row;
width: 100 %;
justify-content: space-between;
`
const LeftSide = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const MidSide = styled.div``
const RightSide = styled.div`
display: flex;
flex-direction: row;

font-size: 25px;
`

const KoperasiTitle = styled.div`
font-family: Franklin Gothic Medium;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 22px;
width: 105px;
`

const TemaContainer = styled.div`
width: 2.1em;
height: 1.5em;

display: flex;
flex-direction: row;
justify-content: space-between;

padding: .3em;
margin-left: 1.2em;
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 5px;
`

const ColorChooser = styled.div`
width: 1.2em;
height: .8em;

margin-right: .1em;

background: #C4C4C4;
border-radius: 3px;
`

const FormGroup = styled.div`
display: flex;
flex-direction: column;

width: 98%;
margin: 50px auto;
`
const Form = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

margin: 0em 0em 1.56em 0em;
`
const Label = styled.label`
margin-bottom: 0.5em;
color: #003459;
display: block;
font-family: Franklin Gothic Medium;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 34px;
`

const Input = styled.input`
border: 1px solid #003459;
border-radius: 7px;

width: 32em;
height: 2.3em;
`

const TextArea = styled.textarea`
border: 1px solid #003459;
border-radius: 7px;

width: 32em;
height: 6.9em;
`
export default DepositProductList