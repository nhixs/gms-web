import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useState } from 'react';

import PerhitunganBunga from '../helpers/perhitunganBunga';
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

    /* Counter Digit after decimal */
    const [count, setCount] = useState(0);

    // Create handleIncrement event handler
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    //Create handleDecrement event handler
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    /* Counter Digit kelipatan uang */
    const [countMoney, setCountMoney] = useState(10);

    const handleMoneyInc = () => {
        setCountMoney(prevCountMoney => prevCountMoney * 10);
    };

    const handleMoneyDec = () => {
        setCountMoney(prevCountMoney => prevCountMoney / 10);
    };

    /* Dropdown Lock in Period */
    const [lockOption, setLockOptionButton] = useState("Pilih Periode");
    const handleLockOption = (dropDownLock) => {
        setLockOptionButton(dropDownLock);
        setOptionLock(!optionLockOpen);
    };
    const [optionLockOpen, setOptionLock] = useState(false);
    const handleLockOptions = () => {
        setOptionLock(!optionLockOpen)
    }

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

    /* Function for simulation */

    const [interest, setInterest] = useState(0);
    const handleInterest = (interest) => {
        const newInterest = parseFloat(interest);
        if (!Number.isNaN(newInterest)) {
            setInterest(newInterest);
        } else {
            setInterest(' tidak valid ');
        }
    }

    const [tenorPeriod, setTenorPeriod] = useState();
    const [tenor, setTenor] = useState(0);
    const [amount, setAmount] = useState(0);
    const handleAmount = (amount) => {
        const newAmount = parseFloat(amount);
        setAmount(newAmount);
    }
    const simulateInterest = async () => {
        const productData = {
            interest_rate: interest,
            interest_calculation: interest_value,
            digit_after_decimal: count
        }

        const applicationData = {
            period_unit: tenorPeriod,
            amount,
            tenor,
            start_date: "16-02-2021"
        }

        const interestCalc = await PerhitunganBunga(productData, applicationData)

        console.log(interestCalc)

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
                                <Input id="interest" type="text" style={{ width: "4em", paddingLeft: "1.5em" }} onChange={event => handleInterest(event.target.value)} /><Label style={{ marginLeft: ".5em" }}>%</Label>
                            </Form>
                        </Form>
                        <Form>
                            <Label htmlFor="interest_type">Tipe Bunga</Label>
                            <RadioGroup value={interest_value} onChange={handleChangeInterest} style={{ display: "flex", flexDirection: "row", paddingRight: "21.3em" }}>
                                <FormControlLabel value="flat" control={<Radio />} label="Flat" />
                                <FormControlLabel value="effective" control={<Radio />} label="Efektif" />
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
                        <Form style={{ paddingRight: "25.5em" }}>
                            <Label>Digit Setelah Desimal</Label>
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
                        <Form style={{ paddingRight: "25.5em" }}>
                            <Label>Keliapatan Uang</Label>
                            <CounterContainer>
                                <Numb>
                                    {countMoney}
                                </Numb>
                                <Counter>
                                    <CounterButton onClick={handleMoneyInc}><img src={IncrementArrow} style={{ width: ".5em", paddingBottom: "0.62em" }} /></CounterButton>
                                    <CounterButton onClick={handleMoneyDec}><img src={DecrementArrow} style={{ width: ".5em", paddingBottom: "2em" }} /></CounterButton>
                                </Counter>
                            </CounterContainer>
                        </Form>
                        <Form style={{ paddingRight: "10.7em" }}>
                            <Label>Lock in period</Label>
                            <LockGroup>
                                <Input id="lock_in_period" type="text" style={{ width: "5em", marginRight: "20px" }} />
                                <DropDownContainer>
                                    <DropDownButton
                                        onClick={() => handleLockOptions()}
                                    >
                                        <DropDownTitle>{lockOption}</DropDownTitle> <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                                    </DropDownButton>
                                    {optionLockOpen &&
                                        <DropDownOption>
                                            <DropDown
                                                onClick={() => handleLockOption("A")}
                                            >
                                                A
                                        </DropDown>
                                        </DropDownOption>
                                    }
                                </DropDownContainer>
                            </LockGroup>
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
                        <Form style={{ justifyContent: "flex-end" }}>
                            <SubmitButton>Tambah</SubmitButton>
                        </Form>
                    </FormGroup>
                </ContainerMain>
                <ContentSub>
                    <ContainerSub>
                        <ContainerSubHeader>
                            Simulasi Perhitungan Bunga
                        </ContainerSubHeader>
                        <FormGroup style={{ padding: "0 20px 0 20px", marginTop: "20px" }}>
                            <FormSub>
                                <Label>Bunga</Label>
                                <h2>{interest}%</h2>
                            </FormSub>
                            <FormSub>
                                <Label>Nominal</Label>
                                <h4>Rp</h4>
                                <Input id="nominal" type="number" style={{ width: "200px" }}
                                    onChange={(e) => handleAmount(e.target.value)} />
                            </FormSub>
                            <FormSub>
                                <Label>Tenor</Label>
                                <SelectTenor id="periode_list" onChange={(e) => setTenorPeriod(e.target.value)}>
                                    <Tenor value="monthly" >Bulan</Tenor>
                                    <Tenor value="annually" >Tahun</Tenor>
                                </SelectTenor>
                                <Input type="number" min="0" max="12" style={{ width: "100px" }} onChange={(e) => setTenor(parseFloat(e.target.value))} />
                            </FormSub>
                            <ButtonSmall onClick={simulateInterest}>Submit</ButtonSmall>
                        </FormGroup>
                    </ContainerSub>
                    <ContainerSub style={{ marginTop: "2em" }}>
                        <Table>
                            <TableRow>
                                <TableHead>No</TableHead>
                                <TableHead>Bunga</TableHead>
                                <TableHead>Setoran</TableHead>
                                <TableHead>Tanggal</TableHead>
                            </TableRow>
                            <TableRow>
                                <TableData>1</TableData>
                                <TableData>6</TableData>
                                <TableData>1.714.000</TableData>
                                <TableData>01/01/2021</TableData>
                            </TableRow>
                        </Table>
                    </ContainerSub>
                </ContentSub>
            </Content>
        </Drawer >
    )
}

const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

width: 100%;
`
const ContainerMain = styled.div`
display: flex;
height: fit-content;
flex-direction: column;
width: 64em;

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
font-style: normal;
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
font-size: 18px;
text-align: center;
color: #003459;

margin: 3em 0em 0em 12.2em;

width: 6.5em;
height: 2.2em;
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

const SelectTenor = styled.select`
border: 1px solid #003459;
border-radius: 7px;

padding-left: .5em;
width: 6.25em;
`
const Tenor = styled.option`

`

export default DepositProductList   