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
import Polygon1 from "../pages/img/Polygon1.svg";
import DecrementArrow from "../assets/arrow_down.svg";
import IncrementArrow from "../assets/arrow_up.svg";

const LoanProductList = (props) => {

    /* Radio Button Loan Type */
    const [collateral, setCollateral] = React.useState('with collateral');
    const handelCollateral = (event) => {
        setCollateral(event.target.value);
    };

    /* Radio Button Interest Type */
    const [interest, setInterest] = React.useState('flat');
    const handleInterest = (event) => {
        setInterest(event.target.value);
    };

    /* Dropdown Compound Interest */
    const [compound, setCompound] = useState("Pilih Periode");
    const handleCompoundOpen = (dropDownCompound) => {
        setCompound(dropDownCompound);
        setCompoundOpen(!compoundOpen);
    };
    const [compoundOpen, setCompoundOpen] = useState(false);
    const handleCompoundOption = () => {
        setCompoundOpen(!compoundOpen);
    };

    /* Dropdown Posting Interest */
    const [posting, setPosting] = useState("Pilih Periode");
    const handlePostingOpen = (dropDownPosting) => {
        setPosting(dropDownPosting);
        setPostingOpen(!postingOpen);
    };
    const [postingOpen, setPostingOpen] = useState(false);
    const handlePostingOption = () => {
        setPostingOpen(!postingOpen);
    };

    /* Counter Decimal */
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    /* Radio Button Multiples of Money */
    const [multiples, setMultiples] = React.useState('100');
    const handleMultiples = (event) => {
        setMultiples(event.target.value);
    };

    /* Checkbox Pajak */
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked)
    }

    /* Dropdown Pajak */
    const [taxOption, setTaxOptionButton] = useState("Pilih Pajak");
    const handleTaxOption = (dropDownTax) => {
        setTaxOptionButton(dropDownTax);
        setOptionTax(!optionTaxOpen);
    };
    const [optionTaxOpen, setOptionTax] = useState(false);
    const handleTaxOptions = () => {
        setOptionTax(!optionTaxOpen)
    }

    return (
        <Drawer title={'Pinjaman'} subtitle={'Tambah Produk Pinjaman'}>
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
                            <Label htmlFor="loan_name">Nama Pinjaman</Label>
                            <Input id="loan_name" type="text" />
                        </Form>
                        <Form>
                            <Label htmlFor="details">Detail</Label>
                            <TextArea />
                        </Form>
                        <Form>
                            <Label htmlFor="deposit_type">Tipe Pinjaman</Label>
                            <RadioGroup value={collateral} onChange={handelCollateral} style={{ display: "flex", flexDirection: "row", paddingRight: "8.250em" }}>
                                <FormControlLabel value="with_collateral" control={<Radio />} label="Degan Anggunan" />
                                <FormControlLabel value="without_collateral" control={<Radio />} label="Tanpa Anggunan" />
                            </RadioGroup>
                        </Form>
                        <Form>
                            <Label htmlFor="interest_calculation">Perhitungan Bunga</Label>
                            <RadioGroup value={interest} onChange={handleInterest} style={{ display: "flex", flexDirection: "row", paddingRight: "21.3em" }}>
                                <FormControlLabel value="flat" control={<Radio />} label="Flat" />
                                <FormControlLabel value="efective" control={<Radio />} label="Efektif" />
                            </RadioGroup>
                        </Form>
                        <Form>
                            <Label htmlFor="interest">Bunga</Label>
                            <Input id="interest" type="text" style={{ width: "4em", paddingLeft: "1.5em" }} onChange={event => setInterest(event.target.value)} /><Label style={{ marginLeft: ".5em" }}>%</Label>
                        </Form>
                        <Form>
                            <Label>Compound Interest</Label>
                            <DropDownContainer>
                                <DropDownButton
                                    onClick={() => handleCompoundOpen()}
                                >
                                    <DropDownTitle>{compound}</DropDownTitle> <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                                </DropDownButton>
                                {compoundOpen &&
                                    <DropDownOption>
                                        <DropDown
                                            onClick={() => handleCompoundOption("A")}                                                                                >
                                            A
                                        </DropDown>
                                    </DropDownOption>
                                }
                            </DropDownContainer>
                        </Form>
                        <Form>
                            <Label>Periode Posting Bunga</Label>
                            <DropDownContainer>
                                <DropDownButton
                                    onClick={() => handlePostingOpen()}
                                >
                                    <DropDownTitle>{posting}</DropDownTitle><img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                                </DropDownButton>
                                {postingOpen &&
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
                            <Label>Digit Setalah Desimal</Label>
                            <CounterContainer>
                                <Numb>
                                    {count}
                                </Numb>
                                <Counter>
                                    <CounterButton onClick={handleIncrement}><img src={IncrementArrow} style={{ width: ".5em", paddingBottom: "0.62em" }} /></CounterButton>
                                    <CounterButton onClick={handleDecrement}><img src={DecrementArrow} style={{ width: ".5em", paddingBottom: "2em" }} /></CounterButton>
                                </Counter>
                            </CounterContainer>
                        </Form>
                        <Form>
                            <Label>Kelipatan Uang</Label>
                            <RadioGroup value={multiples} onChange={handleMultiples} style={{ display: "flex", flexDirection: "row", paddingRight: "8.250em" }}>
                                <FormControlLabel value="100" control={<Radio />} label="100" />
                                <FormControlLabel value="1000" control={<Radio />} label="1.000" />
                                <FormControlLabel value="10000" control={<Radio />} label="10.000" />
                            </RadioGroup>
                        </Form>
                        <Form>
                            <Label>Pajak</Label>
                            <CheckContainer>
                                <Input type="checkbox" checked={checked} onChange={handleChange} style={{ width: "5em" }} />
                                {checked &&
                                    <DropDownContainer>
                                        <DropDownButton
                                            onClick={() => handleTaxOptions()}
                                        >
                                            <DropDownTitle >{taxOption}</DropDownTitle> <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                                        </DropDownButton>
                                        {optionTaxOpen &&
                                            <DropDownOption>
                                                <DropDown
                                                    onClick={() => handleTaxOption("A")}
                                                >
                                                    A
                                            </DropDown>
                                            </DropDownOption>
                                        }
                                    </DropDownContainer>
                                }
                            </CheckContainer>
                        </Form>
                    </FormGroup>
                </ContainerMain>
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

width: 24em;
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
font-weight: normal;
font-size: 20px;
line-height: 34px;
`

const Input = styled.input`
border: 1px solid #003459;
border-radius: 7px;

padding-left: 20px;

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

const CounterContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

padding: 0px 5px 3px 30px;
width: 5.2em;
height: 2.3em;

font-size: 20px;

border: 1px solid #003459;
box-sizing: border-box;
`

const CounterButton = styled.div`

`

const Counter = styled.div`

`
const Numb = styled.div`
padding: 7px 0 0 8px;
`
const LockGroup = styled.div`
display: flex;
flex-direction: row;
`
const CheckContainer = styled.div`
display: flex;
flex-direction: row;

padding-right: 215px;
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

margin-top: 100px;

width: 210.01px;
height: 40.81px;
`
const ContainerSubHeader = styled.div`
text-align: center;
font-size: 27px;

margin-top: .5em;
`
const ButtonSmall = styled.button`
background: #FFCB37;
border: none;
border-radius: 100px;
font-family: Franklin Gothic Medium;
font-style: normal;
font-weight: normal;
font-size: 14x;
text-align: center;
color: #003459;

margin-left: 250px;

width: 70px;
height: 10x;
`
const FormSub = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

margin: 0em 0em .5em 0em;
`

const ContentSub = styled.div`
display: flex;
flex-direction: column;
`

const Table = styled.table`
margin: 1em 1em 0em 1em;
border: 1px solid black;
`

const TableRow = styled.tr`
border: 1px solid black;
width: 100%;
`

const TableHead = styled.th`
background: #003459;
border: 1px solid #ffffff;
box-sizing: border-box;
color: #ffffff;

text-align: center;
`

const TableData = styled.td`
text-align: center;
border: 1px solid black;
`

export default LoanProductList