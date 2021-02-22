import React from 'react';
import styled from 'styled-components';
// import moment from 'moment';
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
    /*set Form function */
    const [form, setForm] = useState({
        name: '',
        description: '',
        interest_calculation: 'flat',
        interest_rate: 0.1,
        deposit_type: 'fixed',
        compound: '',
        posting: '',
        digit_after_decimal: '',
        in_multiple_of: '',
        lock_in_value: '',
        lock_in_period: '',
        tax: '',
        theme_color: 'FFF975'
    })

    /* Submit Function */

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

    /* Radio Button */

    /* Tipe Simpanan */
    const [deposit_value, setValueDeposit] = useState(form.deposit_type);
    const handleChangeDeposit = (event) => {
        setValueDeposit(event.target.value);
    };

    /* Tipe Bunga  */
    const [interest_value, setValueInterest] = useState(form.interest_calculation);
    const handleChangeInterest = (event) => {
        setValueInterest(event.target.value);
    };

    /* Dropdown periode Bunga */
    const [periodOption, setPeriodOptionButton] = useState("Pilih Periode Bunga");
    const handlePeriodOption = (dropDownPeriod) => {
        setForm(state => {
            return {
                ...state,
                compound: dropDownPeriod
            }
        });
        setPeriodOptionButton(dropDownPeriod.charAt(0).toUpperCase() + dropDownPeriod.substring(1));
        setOptionPeriod(!optionPeriodOpen);
    }
    const [optionPeriodOpen, setOptionPeriod] = useState(false);
    const handlePeriodOptions = () => {
        setOptionPeriod(!optionPeriodOpen)
    }

    /* Dropdown periode Posing Bunga */
    const [postingOption, setPostingOptionButton] = useState("Pilih Posting Bunga");
    const handlePostingOption = (dropdowPosting) => {
        setForm(state => {
            return {
                ...state,
                posting: dropdowPosting
            }
        });
        setPostingOptionButton(dropdowPosting.charAt(0).toUpperCase() + dropdowPosting.substring(1));
        setOptionPosting(!optionPostingOpen);
    }
    const [optionPostingOpen, setOptionPosting] = useState(false);
    const handlePostingOptions = () => {
        setOptionPosting(!optionPostingOpen)
    }

    /* Dropdown Lock in Period */
    const [lockOption, setLockOptionButton] = useState("Pilih Periode");
    const handleLockOption = (dropDownLock) => {
        setForm(state => {
            return {
                ...state,
                lock_in_period: dropDownLock
            }
        });
        setLockOptionButton(dropDownLock.charAt(0).toUpperCase() + dropDownLock.substring(1));
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
        setForm(state => {
            return {
                ...state,
                tax: dropDownTax
            }
        });
        setTaxOptionButton(dropDownTax);
        setOptionTax(!optionTaxOpen);
    };
    const [optionTaxOpen, setOptionTax] = useState(false);
    const handleTaxOptions = () => {
        setOptionTax(!optionTaxOpen)
    }

    /* Dropdown Color */

    const [colorOption, setColorOption] = useState("");
    const handleColorOption = (dropDownColor) => {
        setForm(state => {
            return {
                ...state,
                theme_color: dropDownColor.substring(1)
            }
        });
        setColorOption(dropDownColor);
        setOptionColor(!colorOpen);
    };
    const [colorOpen, setOptionColor] = useState(false);
    const handleColorOptions = () => {
        setOptionColor(!colorOpen)
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





    /* Function for simulation */

    const [interest, setInterest] = useState(form.interest_rate);
    const handleInterest = (interest_rate) => {
        setForm(state => {
            return {
                ...state,
                interest_rate
            }
        });
        setInterest(interest_rate);
    }

    const [tenorPeriod, setTenorPeriod] = useState("annually");
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
        console.log(productData)
        console.log(applicationData)

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
                                <ColorButton>
                                    <Color style={{ backgroundColor: "#" + colorOption, marginRight: ".8em" }}></Color>
                                    <img src={YellowArrow} style={{ width: "12px", cursor: "pointer" }} onClick={() => handleColorOptions()} />
                                </ColorButton>
                                {colorOpen &&
                                    <ColorOptions>
                                        <Color style={{ backgroundColor: "#C4C4C4" }}
                                            onClick={() => handleColorOption("C4C4C4")}>
                                        </Color>
                                        <Color
                                            style={{ backgroundColor: "#FFF975" }}
                                            onClick={() => handleColorOption("FFF975")}
                                        >
                                        </Color>
                                        <Color
                                            style={{ backgroundColor: "#75FFA4" }}
                                            onClick={() => handleColorOption("75FFA4")}
                                        >
                                        </Color>
                                        <Color
                                            style={{ backgroundColor: "#75EEFF" }}
                                            onClick={() => handleColorOption("#75EEFF")}
                                        >
                                        </Color>
                                        <Color
                                            style={{ backgroundColor: "#FF4F37" }}
                                            onClick={() => handleColorOption("FF4F37")}
                                        >
                                        </Color>
                                        <Color
                                            style={{ backgroundColor: "#7594FF" }}
                                            onClick={() => handleColorOption("7594FF")}
                                        >
                                        </Color>
                                    </ColorOptions>
                                }
                            </TemaContainer>
                        </RightSide>
                    </Header>
                    <FormGroup>
                        <Form>
                            <Label htmlFor="deposit_name">Nama Simpanan</Label>
                            <Input id="deposit_name" type="text" onChange={(e) => handleInput(e.target.value, "name")} />
                        </Form>
                        <Form>
                            <Label htmlFor="details">Detail</Label>
                            <TextArea onChange={(e) => handleInput(e.target.value, "description")} />
                        </Form>
                        <Form>
                            <Label htmlFor="deposit_type">Tipe Simpanan</Label>
                            <RadioGroup value={deposit_value} onChange={handleChangeDeposit} style={{ display: "flex", flexDirection: "row", paddingRight: "8.250em" }}>
                                <FormControlLabel value="fixed" control={<Radio onClick={(e) => handleInput(e.target.value, "deposit_type")} />} label="Simpanan Berjangka" />
                                <FormControlLabel value="recurring" control={<Radio onClick={(e) => handleInput(e.target.value, "deposit_type")} />} label="Simpanan Berkala" />
                            </RadioGroup>
                        </Form>
                        <Form>
                            <Label htmlFor="interest">Bunga</Label>
                            <Form style={{ justifyContent: "space-evenly", paddingRight: "26.4em" }} value={form.interest_rate}>
                                <Input id="interest" type="number" min="0.1" style={{ width: "4em", paddingLeft: "1em" }} onChange={event => handleInterest(event.target.value)} />
                                <Label style={{ marginLeft: ".5em" }}>%</Label>
                            </Form>
                        </Form>
                        <Form>
                            <Label htmlFor="interest_type">Tipe Bunga</Label>
                            <RadioGroup value={interest_value} onChange={handleChangeInterest} style={{ display: "flex", flexDirection: "row", paddingRight: "21.3em" }}>
                                <FormControlLabel value="flat" control={<Radio onClick={(e) => handleInput(e.target.value, "interest_calculation")} />} label="Flat" />
                                <FormControlLabel value="effective" control={<Radio onClick={(e) => handleInput(e.target.value, "interest_calculation")} />} label="Efektif" />
                            </RadioGroup>
                        </Form>
                        <Form style={{ paddingRight: "17em" }}>
                            <Label>Periode Compound Bunga</Label>
                            <DropDownContainer>
                                <DropDownButton
                                    onClick={() => handlePeriodOptions()}
                                >
                                    <DropDownTitle>{periodOption}</DropDownTitle> <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                                </DropDownButton>
                                {optionPeriodOpen &&
                                    <DropDownOption>
                                        <DropDown
                                            onClick={() => handlePeriodOption("daily")}>
                                            Daily
                                        </DropDown>
                                        <DropDown
                                            onClick={() => handlePeriodOption("monthly")}>
                                            Monthly
                                        </DropDown>
                                        <DropDown
                                            onClick={() => handlePeriodOption("yearly")}>
                                            Yearly
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
                                            onClick={() => handlePostingOption("daily")}
                                        >
                                            Daily
                                        </DropDown>
                                        <DropDown
                                            onClick={() => handlePostingOption("monthly")}
                                        >
                                            Monthly
                                        </DropDown>
                                        <DropDown
                                            onClick={() => handlePostingOption("yearly")}
                                        >
                                            Yearly
                                        </DropDown>
                                    </DropDownOption>
                                }
                            </DropDownContainer>
                        </Form>
                        <Form style={{ paddingRight: "25.5em" }}>
                            <Label>Digit Setelah Desimal</Label>
                            <CounterContainer>
                                <Numb>
                                    {form.digit_after_decimal = count}
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
                                    {form.in_multiple_of = countMoney}
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
                                <Input id="lock_in_value" type="text" style={{ width: "5em", marginRight: "20px" }} onChange={(e) => handleInput(e.target.value, "lock_in_value")} />
                                <DropDownContainer>
                                    <DropDownButton
                                        onClick={() => handleLockOptions()}
                                    >
                                        <DropDownTitle>{lockOption}</DropDownTitle> <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                                    </DropDownButton>
                                    {optionLockOpen &&
                                        <DropDownOption>
                                            <DropDown
                                                onClick={() => handleLockOption("day")}
                                            >
                                                Day
                                            </DropDown>
                                            <DropDown
                                                onClick={() => handleLockOption("month")}
                                            >
                                                Month
                                            </DropDown>
                                            <DropDown
                                                onClick={() => handleLockOption("year")}
                                            >
                                                Year
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
                                                    onClick={() => handleTaxOption("PPh Pasal 4 ayat 2")}
                                                >
                                                    PPh Pasal 4 ayat 2
                                            </DropDown>
                                            </DropDownOption>
                                        }
                                    </DropDownContainer>
                                }
                            </CheckContainer>
                        </Form>
                        <Form style={{ justifyContent: "flex-end" }}>
                            <SubmitButton id="submit" type="submit" value="Tambah" onClick={showForm} />
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
                                <SelectTenor id="periode_list" value={tenorPeriod} onChange={(e) => setTenorPeriod(e.target.value)}>
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
width: 2.5em;
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

padding-left: 1.25em;

width: 32em;
height: 2.3em;
`
const TextArea = styled.textarea`
border: 1px solid #003459;
border-radius: 7px;

padding-left: 1.25em;
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

width: 15em;
`

const DropDownTitle = styled.label`
color: #ffffff;
font-style: italic;
font-size: 18px;
text-align: center;

width: 100%;
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

const ColorButton = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const ColorOptions = styled.div`
display: block;
  position: absolute;
  
  height: fit-content;
  overflow: auto;
  z-index:15;
  background-color: #ffffff;
  border: 1px solid #003459;
`
const Color = styled.div`
display: flex;
  justify-content:center;
  width: 1em;
  height: 1em;
  border: 1px solid #003459;
  font-family: Franklin Gothic Medium;
  font-style: italic;
  font-weight: normal;
  font-size: 20px;


  color: #003459;
  &:hover {
      cursor: pointer;
  }
`

export default DepositProductList   