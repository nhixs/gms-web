import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


import Drawer from "./components/drawer";
import LogoContainer from "./components/logoContainer";
import Koperasi from "../assets/logo.png"



const ClientNew = (props) => {

    const [dropDownButton, setDropDownButton] = useState("Pilih Gender");
    const handleDropDownButton = (dropdown) => {
        setDropDownButton(dropdown);
        setOption(!optionOpen);
    }

    const [optionOpen, setOption] = useState(false);
    const handleOptions = () => {
        setOption(!optionOpen)
    }

    return (
        <Drawer title={'Anggota'} subtitle={'Tambah Anggota'}>
            <Container>
                <Header>
                    <LeftSide>
                        <LogoContainer image={Koperasi} scale={"3em"} space={".5em"} />
                        <KoperasiTitle>Gapura Kayumanis</KoperasiTitle>
                    </LeftSide>
                </Header>
                <FormGroup>
                    <Label htmlFor="name">Nama</Label>
                    <Input id="name" />
                    <Label htmlFor="ktp">KTP</Label>
                    <Input id="ktp" />
                    <Label htmlFor="email">Gender</Label>
                    <DropDownContainer>
                        <DropDownButton
                            onClick={() => handleOptions()}
                        >
                            <DropDownTitle>
                                {dropDownButton}
                            </DropDownTitle>
                        </DropDownButton>
                        {optionOpen &&
                            <DropDownOption>
                                <DropDown
                                    onClick={() => handleDropDownButton("Laki-Laki")}
                                >
                                    Laki-Laki
                                 </DropDown>
                                <DropDown
                                    onClick={() => handleDropDownButton("Perempuan")}
                                >
                                    Perempuan
                                </DropDown>
                            </DropDownOption>
                        }
                    </DropDownContainer>
                    <Label htmlFor="address">Lokasi</Label>
                    <Input id="address" />
                    <Label htmlFor="profesion">Profesi</Label>
                    <Input id="profesion" />
                    <FormGroupFooter>
                        <CancelButton>Batal</CancelButton>
                        <SubmitButton>Tambah</SubmitButton>
                    </FormGroupFooter>
                </FormGroup>
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

const Logo = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-right: 1em;
`

const KoperasiTitle = styled.div`
font-family: Franklin Gothic Medium;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 22px;
width: 105px;
`

const FormGroup = styled.div`
    display: block;
	width: 950px;
    margin: 50px auto;
    background: #FFFFFF;
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
padding: 0.5em;
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;
width: 100%;
`
const DropDownContainer = styled.div`
width: 40%;
display: inline-block;
position: relative;
`

const DropDownOption = styled.div`
  display: block;
  position: absolute;
  min-width: 100%;
  height: fit-content;
  overflow: auto;
  z-index:15;
  background-color: #ffffff;
  border: 1px solid #003459;
`

const DropDownButton = styled.div`
display: flex;
  justify-content: space-between;
  flex: 1;
  color: #ffffff;
  background-color: #003459;
  border-radius:2px;
  z-index:10;
`

const DropDownTitle = styled.label`
    color: #ffffff;
    font-family: Franklin Gothic Medium;
    font-style: italic;
    font-size: 18px; 

    margin-left 135px;
`

const DropDown = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  border: 1px solid #003459;
  font-family: Franklin Gothic Medium;
  font-style: italic;
  font-weight: normal;
  font-size: 20px;


  color: #003459;
  &:hover {
      background-color: #E1ECF4;
  }

`
const FormGroupFooter = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

height: fit-content;
width: 100%;
align-item: center;
margin-top: 120px;
padding: 0px 150px;
`

const CancelButton = styled.button`
background: #F85454;
border: none;
border-radius: 100px;
font-family: Franklin Gothic Medium;
font-style: normal;
font-weight: normal;
font-size: 28px;
line-height: 33px;
text-align: center;
color: #FFFFFF;

width: 210.01px;
height: 40.81px;
`

const SubmitButton = styled.button`
background: #FFCB37;
border: none;
border-radius: 100px;
font-family: Franklin Gothic Medium;
font-style: normal;
font-weight: normal;
font-size: 28px;
line-height: 33px;
text-align: center;
color: #003459;

width: 210.01px;
height: 40.81px;
`
export default ClientNew
