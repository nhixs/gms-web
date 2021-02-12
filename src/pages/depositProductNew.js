import React from 'react';
import styled from 'styled-components';

import { useState } from 'react';

import Drawer from "./components/drawer";
import LogoContainer from "./components/logoContainer";
import Koperasi from "../assets/logo.png";
import YellowArrow from "../assets/yellow_arrow.svg";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Polygon1 from "../pages/img/Polygon1.svg"



const DepositProductList = (props) => {

    /* Radio Button */
    const [deposit_value, setValueDeposit] = React.useState('periodic_deposit');
    const [interest_value, setValueInterest] = React.useState('flat');
    const handleChangeDeposit = (event) => {
        setValueDeposit(event.target.value);
    };
    const handleChangeInterest = (event) => {
        setValueInterest(event.target.value);
    };

    /* Dropdown periode Bunga */
    const [periodOption, setPeriodOptionButton] = useState("Pilih Periode Bunga");
    const handlePeriodOption = (dropdowPeriod) => {
        setPeriodOptionButton(dropdowPeriod);
        setOptionPeriod(!optionPeriodOpen);
    }
    const [optionPeriodOpen, setOptionPeriod] = useState(false);
    const handlePeriodOptions = () => {
        setOptionPeriod(!optionPeriodOpen)
    }

    /* Dropdown periode Posing Bunga */
    const [postingOption, setPostingOptionButton] = useState("Pilih Posting Bunga");
    const handlePostingOption = (dropdowPosting) => {
        setPostingOptionButton(dropdowPosting);
        setOptionPosting(!optionPostingOpen);
    }
    const [optionPostingOpen, setOptionPosting] = useState(false);
    const handlePostingOptions = () => {
        setOptionPosting(!optionPostingOpen)
    }

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
                            <RadioGroup value={deposit_value} onChange={handleChangeDeposit} style={{ display: "flex", flexDirection: "row", paddingRight: "8.250em" }}>
                                <FormControlLabel value="time_deposit" control={<Radio />} label="Simpanan Berjangka" />
                                <FormControlLabel value="periodic_deposit" control={<Radio />} label="Simpanan Berkala" />
                            </RadioGroup>
                        </Form>
                        <Form>
                            <Label htmlFor="interest">Bunga</Label>
                            <Form style={{ justifyContent: "space-evenly", paddingRight: "26.4em" }}>
                                <Input id="interest" type="text" style={{ width: "4em", paddingLeft: "1.5em" }} /><Label style={{ marginLeft: ".5em" }}>%</Label>
                            </Form>
                        </Form>
                        <Form>
                            <Label htmlFor="interest_type">Tipe Bunga</Label>
                            <RadioGroup value={interest_value} onChange={handleChangeInterest} style={{ display: "flex", flexDirection: "row", paddingRight: "21.3em" }}>
                                <FormControlLabel value="flat" control={<Radio />} label="Flat" />
                                <FormControlLabel value="efective" control={<Radio />} label="Efektif" />
                            </RadioGroup>
                        </Form>
                        <Form style={{ paddingRight: "17em" }}>
                            <Label>Periode Bunga</Label>
                            <DropDownContainer>
                                <DropDownButton
                                    onClick={() => handlePeriodOptions()}
                                >
                                    <DropDownTitle>{periodOption}</DropDownTitle> <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                                </DropDownButton>
                                {optionPeriodOpen &&
                                    <DropDownOption>
                                        <DropDown
                                            onClick={() => handlePeriodOption("A")}                                                                                >
                                            A
                                        </DropDown>
                                    </DropDownOption>
                                }
                            </DropDownContainer>
                        </Form>
                        <Form style={{ paddingRight: "17em" }}>
                            <Label>Periode Posting Bunga</Label>
                            <DropDownContainer>
                                <DropDownButton
                                    onClick={() => handlePostingOptions()}
                                >
                                    <DropDownTitle>{postingOption}</DropDownTitle> <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                                </DropDownButton>
                                {optionPostingOpen &&
                                    <DropDownOption>
                                        <DropDown
                                            onClick={() => handlePostingOption("A")}
                                        >
                                            A
                                        </DropDown>
                                    </DropDownOption>
                                }
                            </DropDownContainer>
                        </Form>
                        <Form>
                            <Label>Digit Setelah Desimal</Label>
                        </Form>
                        <Form>
                            <Label>Keliapatan Uang</Label>
                        </Form>
                        <Form>
                            <Label>Lock in period</Label>
                        </Form>
                        <Form>
                            <Label>Pajak</Label>
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
const DropDownContainer = styled.div`
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

padding-left: 2.5em;
width: 15em;
`

const DropDownTitle = styled.label`
color: #ffffff;
font-style: italic;
font-size: 18px;
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
export default DepositProductList   