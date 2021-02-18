import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


import Drawer from "./components/drawer";
import LogoContainer from "./components/logoContainer";
import Koperasi from "../assets/logo.png"

import Polygon1 from "../pages/img/Polygon1.svg"

const OfficerAdd = (props) => {

    const [form, setForm] = useState({
        nama: '',
        alamat: "",
        email: "",
        role: "",
    })

    const [dropDownButton, setDropDownButton] = useState("Pilih Role Anda");
    const handleDropDownButton = (dropdown) => {
        setDropDownButton(dropdown.charAt(0).toUpperCase() + dropdown.substring(1))
        setForm(state => {
            return {
                ...state,
                role: dropdown
            }
        })
        setOption(!optionOpen);
    }

    const [optionOpen, setOption] = useState(false);
    const handleOptions = () => {
        setOption(!optionOpen)
    }

    const handleInput = (input, label) => {
        let resultInput
        if (input && input !== "") {
            resultInput = input
        }
        else resultInput = ""

        setForm(state => {
            return {
                ...state,
                [label]: resultInput
            }
        })
    }
    const showForm = () => {
        console.log(form);
    }

    return (
        <Drawer title={'Officer'} subtitle={'Tambah Officer'}>
            <Container>
                <Header>
                    <LeftSide>
                        <Logo>
                            <LogoContainer image={Koperasi} scale={"3em"} space={".5em"} />
                            <KoperasiTitle>Gapura Kayumanis</KoperasiTitle>
                        </Logo>
                    </LeftSide>
                </Header>
                <FormGroup>
                    <Label htmlFor="name">Nama</Label>
                    <Input id="name" onChange={(e) => handleInput(e.target.value, "nama")}
                    />
                    <Label htmlFor="alamat">Alamat</Label>
                    <Input id="address" type="text" style={{ height: '75px' }} onChange={(e) => handleInput(e.target.value, "alamat")} />
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" onChange={(e) => handleInput(e.target.value, "email")} />
                    <FormGroupSub>
                        <Label htmlFor="role">Role</Label>
                        <Label htmlFor="foto" style={{ marginRight: '300px' }}>Foto</Label>
                    </FormGroupSub>
                    <FormGroupSub>
                        <DropDownContainer>
                            <DropDownButton
                                onClick={() => handleOptions()}
                            >
                                <DropDownTitle>{dropDownButton}</DropDownTitle> <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                            </DropDownButton>
                            {optionOpen &&
                                <DropDownOption>
                                    <DropDown
                                        onClick={() => handleDropDownButton("operational")}
                                    >Operation</DropDown>
                                    <DropDown
                                        onClick={() => handleDropDownButton("supervisor")}
                                    >Supervisor</DropDown>
                                    <DropDown
                                        onClick={() => handleDropDownButton("accountant")}
                                    >Accountant</DropDown>
                                    <DropDown
                                        onClick={() => handleDropDownButton("hr")}
                                    >HR</DropDown>
                                    <DropDown
                                        onClick={() => handleDropDownButton("finance")}
                                    >Finance</DropDown>
                                </DropDownOption>
                            }
                        </DropDownContainer>
                        <BrowseFile id="foto" type="file" />
                    </FormGroupSub>
                    <FormGroupFooter>
                        <CancelButton id="cancel">Batal</CancelButton>
                        <SubmitButton id="submit" type="submit" value="Tambah" onClick={showForm} />
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
const FormGroupSub = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

height: fit-content;
width: 100%;
align-item: center;
`
const DropDownContainer = styled.div`
width: 40%;
display: inline-block;
position: relative;
`
const DropDownButton = styled.div`
display: flex;
  justify-content: space-between;
  flex: 1;
  color: #ffffff;
  background-color: #003459;
  border-radius:2px;
`
const DropDownTitle = styled.label`
    color: #ffffff;
    font-family: Franklin Gothic Medium;
    font-style: italic;
    font-size: 18px; 

    margin-left 135px;
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

const BrowseFile = styled.input`
margin-right: 46px;
`

const FormGroupFooter = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

height: fit-content;
width: 100%;
align-item: center;
margin-top: 227px;
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

const SubmitButton = styled.input`
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


export default OfficerAdd
