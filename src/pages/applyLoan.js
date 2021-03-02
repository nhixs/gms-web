import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Accordion } from "react-bootstrap";

import Drawer from "./components/drawer";
import LogoContainer from './components/logoContainer';
import Koperasi from '../assets/logo.png';
import Polygon1 from "../pages/img/Polygon1.svg";
import DataLoanProduct from "../helpers/loan/dataLoanProduct";
import Zoom from "../pages/img/zoom.svg";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ApplyLoan = (props) => {

    const [form, setForm] = useState({
        id_loan: '',
        id_client: '',
        loan_name: '',
        amount: '',
        tenor: '',
        loan_purpose: '',
        period_unit: "monthly",
        dependents: '',
        client_income: '',
        partner_status: '',
        partner_name: '',
        partner_profesion: '',
        live_in_the_same_house: ''
    })
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


    /*Dropdown Product*/
    const [dropDownButton, setDropDownButton] = useState("Pilih Produk");
    const handleDropDownButton = (value) => {
        setDropDownButton(value["name"]);
        setForm(state => {
            return {
                ...state,
                id_loan: value["id_loan_prod"]
            }
        })
        setOption(!optionOpen);
    }
    const [optionOpen, setOption] = useState(false);
    const handleOptions = () => {
        setOption(!optionOpen)

    }

    /*Dropdown Tenor*/
    const [dropDownTenor, setDropDownTenor] = useState("Pilih Tenor");
    const handleDropDownTenor = (value) => {
        const [tenor, periodUnit] = value.split(" ")
        let selectPeriod
        switch (periodUnit) {
            case "Tahun": {
                selectPeriod = "annually"
            }
            case "Minggu":
                selectPeriod = "weekly"
                break;
            default:
                selectPeriod = "monthly";
                break;

        }
        setDropDownTenor(value);
        setForm(state => ({
            ...state,
            tenor: parseInt(tenor),
            period_unit: selectPeriod
        }))
        setOptionTenor(!optionOpenTenor);
    }
    const [optionOpenTenor, setOptionTenor] = useState(false);
    const handleOptionsTenor = () => {
        setOptionTenor(!optionOpenTenor)

    }

    /*Dropdown Income*/
    const [dropDownIncome, setDropDownIncome] = useState("Pilih Penghasilan");
    const handleDropDownIncome = (value) => {

        let selectIncome
        switch (value) {
            case "< 4jt":
                selectIncome = "< 4jt"
                break;
            case "< 5jt":
                selectIncome = "< 5jt"
                break;
            case "< 6jt":
                selectIncome = "< 6jt"
                break;
            case "< 7jt":
                selectIncome = "< 7jt"
                break;
            default:
                selectIncome = "8jt"
                break;
        }
        setDropDownIncome(value);
        setForm(state => ({
            ...state,
            client_income: selectIncome
        }))
        setOptionIncome(!optionOpenIncome);
    }

    const [optionOpenIncome, setOptionIncome] = useState(false);
    const handleOptionsIncome = () => {
        setOptionIncome(!optionOpenIncome)

    }

    /*Dropdown Income*/
    const [dropDownIncomeCouple, setDropDownIncomeCouple] = useState("Pilih Penghasilan Pasangan");
    const handleDropDownIncomeCouple = (value) => {
        let selectIncome
        switch (value) {
            case "< 4jt":
                selectIncome = "< 4jt"
                break;
            case "< 5jt":
                selectIncome = "< 5jt"
                break;
            case "< 6jt":
                selectIncome = "< 6jt"
                break;
            case "< 7jt":
                selectIncome = "< 7jt"
                break;
            default:
                selectIncome = "8jt"
                break;
        }
        setDropDownIncomeCouple(value);
        setForm(state => ({
            ...state,
            partner_income: selectIncome
        }))
        setOptionCouple(!optionOpenCouple);
    }
    const [optionOpenCouple, setOptionCouple] = useState(false);
    const handleOptionsCouple = () => {
        setOptionCouple(!optionOpenCouple)

    }

    /* Radio Button Couple */
    const [couple, setCouple] = React.useState('1');
    const handleCouple = (event) => {
        setCouple(event.target.value);
    };

    /* Radio Button Live Together */
    const [live, setLive] = React.useState('1');
    const handleLive = (event) => {
        setLive(event.target.value);
    };

    /* Radio Button Collateral Type */
    const [collateralType, setCollateralType] = React.useState('vehicle');
    const handleCollateralType = (event) => {
        setCollateralType(event.target.value);
    };

    const [color, setColor] = useState('#003459');
    const [textColor, setTextColor] = useState('white');

    const { status, message, data } = DataLoanProduct;
    const { loanProd } = data;

    return (
        <Drawer title={'Pinjaman'} subtitle={'Pengjuan Pinjaman'}>
            <Container>
                <Header>
                    <LeftSide>
                        <LogoContainer image={Koperasi} scale={"3em"} space={".5em"} />
                        <KoperasiTitle>Gapura Kayumanis</KoperasiTitle>
                    </LeftSide>
                    <LabelTitle>Formulir Pengajuan</LabelTitle>
                </Header>
                <FormGroup>
                    <Accordion style={{ width: "100%" }}>
                        <DropDownContainer style={{ marginLeft: "20.3em" }}>
                            <DropDownButton
                                onClick={() => { handleOptions(); setColor("#E1ECF4"); setTextColor('#003459') }}
                                style={{ background: color, border: "1px solid #003459" }}
                            >
                                <div></div>
                                <DropDownTitle style={{ color: textColor }}>
                                    {dropDownButton}
                                </DropDownTitle>
                                <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                            </DropDownButton>
                            {optionOpen &&
                                <DropDownOption>
                                    {loanProd.map((value, id) => (
                                        <Accordion.Toggle as={DropDown} eventKey={value.id}
                                            onClick={() => { handleDropDownButton(value) }} >
                                            {value["id_loan_prod"] + " - " + value["name"]}
                                        </Accordion.Toggle>
                                    ))}
                                </DropDownOption>
                            }
                        </DropDownContainer>
                        {loanProd.map((value, id) => (
                            <>
                                <Accordion.Collapse eventKey={value.id}>
                                    <CardForm>
                                        <Paragraph>{value["description"]}</Paragraph>
                                        <DetailCard>
                                            <DetailLeftSide>
                                                <DetailData>
                                                    <DetailLabel>Tipe Pinjaman</DetailLabel>
                                                    <DetailValue>
                                                        {value["with_collateral"]}
                                                    </DetailValue>
                                                </DetailData>
                                                <DetailData>
                                                    <DetailLabel>Periode Bunga</DetailLabel>
                                                    <DetailValue>
                                                        {value["posting"].charAt(0).toUpperCase() + value["posting"].substring(1)}
                                                    </DetailValue>
                                                </DetailData>
                                            </DetailLeftSide>
                                            <DetailMidSide>
                                                <DetailData>
                                                    <DetailLabel>Tipe Bunga</DetailLabel>
                                                    <DetailValue>
                                                        {value["interest_calculation"].charAt(0).toUpperCase() + value["interest_calculation"].substring(1)}
                                                    </DetailValue>
                                                </DetailData>
                                                <DetailData>
                                                    <DetailLabel>Hari Dalam Setahun</DetailLabel>
                                                    <DetailValue>
                                                        {value["days_in_year"]}
                                                    </DetailValue>
                                                </DetailData>
                                            </DetailMidSide>
                                            <DetailRightSide>
                                                <DetailData>
                                                    <DetailLabel>Pajak</DetailLabel>
                                                    <DetailValue>
                                                        {value["tax"].charAt(0).toUpperCase() + value["tax"].substring(1)}
                                                    </DetailValue>
                                                </DetailData>
                                                <DetailData>
                                                    <DetailLabel>Hari Dalam Sebulan</DetailLabel>
                                                    <DetailValue>
                                                        {value["day_in_month"]}
                                                    </DetailValue>
                                                </DetailData>
                                            </DetailRightSide>
                                        </DetailCard>
                                    </CardForm>
                                </Accordion.Collapse>

                            </>
                        ))}
                    </Accordion>
                    <Line />
                    <Label style={{ fontSize: "35px", marginTop: "1em" }}>Data Anggota</Label>
                    <Form>
                        <Label>Anggota</Label>
                        <SearchBox>
                            <Input style={{
                                outline: "none",
                                border: "none",
                                width: "32em",
                                fontStyle: "italic",
                                margin: "4px 0px 0px 3px"
                            }} placeholder="Cari Anggota" />
                            <img src={Zoom} />
                        </SearchBox>
                    </Form>
                    <Form>
                        <Label>Nama Pinjaman</Label>
                        <Input onChange={(e) => handleInput(e.target.value, "loan_name")}></Input>
                    </Form>
                    <Form>
                        <Label>Masukan Nominal</Label>
                        <Input type="number" onChange={(e) => handleInput(e.target.value, "amount")}></Input>
                    </Form>
                    <Form>
                        <Label>Tenor</Label>
                        <DropDownContainer>
                            <DropDownButton
                                onClick={() => handleOptionsTenor()}
                            ><div></div>
                                <DropDownTitle>{dropDownTenor}</DropDownTitle>
                                <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                            </DropDownButton>
                            {optionOpenTenor &&
                                <DropDownOption>
                                    {["3 Bulan", "6 Bulan", "9 Bulan"].map((value, id) => {
                                        return <DropDown
                                            onClick={() => handleDropDownTenor(value)}
                                            children={value}
                                        />
                                    })}
                                </DropDownOption>
                            }
                        </DropDownContainer>
                    </Form>
                    <Form>
                        <Label>Tujuan Pinjaman</Label>
                        <TextArea onChange={(e) => handleInput(e.target.value, "loan_purpose")}></TextArea>
                    </Form>
                    <Form>
                        <Label>Penghasilan</Label>
                        <DropDownContainer>
                            <DropDownButton
                                onClick={() => handleOptionsIncome()}
                            ><div></div>
                                <DropDownTitle>{dropDownIncome}</DropDownTitle>
                                <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                            </DropDownButton>
                            {optionOpenIncome &&
                                <DropDownOption>
                                    {["< 4jt", "< 5jt", "< 6jt", "< 7jt", "8jt"].map((value) => {
                                        return <DropDown
                                            onClick={() => handleDropDownIncome(value)}
                                            children={value}
                                        />
                                    })}

                                </DropDownOption>
                            }
                        </DropDownContainer>
                    </Form>
                    <Form>
                        <Label>Upload Slip Gaji</Label>
                        <PreviewButton style={{ marginLeft: "1.9em" }}>Preview</PreviewButton>
                        <InputFile type="file" />
                    </Form>
                    <Form>
                        <Label>Jumlah Tanggungan</Label>
                        <Input type="number" style={{ width: "7em", marginRight: "27.5em" }}
                            onChange={(e) => handleInput(e.target.value, "dependents")}
                        />
                    </Form>
                    <Label style={{ fontSize: "35px", marginTop: "1em" }}>Data Pasangan</Label>
                    <Form>
                        <Label>Status Pasangan</Label>
                        <RadioGroup value={couple} onChange={handleCouple} style={{ display: "flex", flexDirection: "row", padding: "0em 0em 0em 6.4em", justifyContent: "space-between", width: "80%" }}>
                            <FormControlLabel value="married"
                                control={<Radio
                                    onChange={(e) => handleInput(e.target.value, "partner_status")}
                                />} label="Punya Pasangan" />
                            <FormControlLabel value="single" control={<Radio
                                onChange={(e) => handleInput(e.target.value, "partner_status")}
                            />} label="Tidak Punya Pasangan" />
                        </RadioGroup>
                    </Form>
                    <Form>
                        <Label>Nama Pasangan</Label>
                        <Input onChange={(e) => handleInput(e.target.value, "partner_name")} />
                    </Form>
                    <Form>
                        <Label>Pekerjaan</Label>
                        <Input onChange={(e) => handleInput(e.target.value, "partner_profesion")} />
                    </Form>
                    <Form>
                        <Label>Penghasilan</Label>
                        <DropDownContainer>
                            <DropDownButton
                                onClick={() => handleOptionsCouple()}
                            ><div></div>
                                <DropDownTitle>{dropDownIncomeCouple}</DropDownTitle>
                                <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                            </DropDownButton>
                            {optionOpenCouple &&
                                <DropDownOption>
                                    {["< 4jt", "< 5jt", "< 6jt", "< 7jt", "8jt"].map((value) => {
                                        return <DropDown
                                            onClick={() => handleDropDownIncomeCouple(value)}
                                            children={value}
                                        />
                                    })}
                                </DropDownOption>
                            }
                        </DropDownContainer>
                    </Form>
                    <Form>
                        <Label>Upload Slip Gaji</Label>
                        <PreviewButton style={{ marginLeft: "1.9em" }}>Preview</PreviewButton>
                        <InputFile type="file" />
                    </Form>
                    <Form>
                        <Label>Tinggal Serumah</Label>
                        <RadioGroup value={live} onChange={handleLive} style={{ display: "flex", flexDirection: "row", padding: "0em 9em 0em 6.5em", justifyContent: "space-between", width: "80%" }}>
                            <FormControlLabel value="no" control={<Radio
                                onChange={(e) => handleInput(e.target.value, "live_in_the_same_house")}
                            />} label="Tidak" />
                            <FormControlLabel value="ya" control={<Radio
                                onChange={(e) => handleInput(e.target.value, "live_in_the_same_house")}
                            />} label="Ya" />
                        </RadioGroup>
                    </Form>
                    <Form>
                        <Label>Alamat Pasangan</Label>
                        <TextArea onChange={(e) => handleInput(e.target.value, "partner_address")}></TextArea>
                    </Form>
                    <Label style={{ fontSize: "35px", marginTop: "1em" }}>Data Anggunan</Label>
                    <Form>
                        <Label>Jenis Anggunan</Label>
                        <RadioGroup value={collateralType} onChange={handleCollateralType} style={{ display: "flex", flexDirection: "row", padding: "0em 9em 0em 6.5em", justifyContent: "space-between", width: "80%" }}>
                            <FormControlLabel value="vehicle" control={<Radio
                                onChange={(e) => handleInput(e.target.value, "collaterall_type")}
                            />}
                                label="Kendaraan" />
                            <FormControlLabel value="property" control={<Radio
                                onChange={(e) => handleInput(e.target.value, "collaterall_type")}
                            />}
                                label="Properti" />
                        </RadioGroup>
                    </Form>
                    <Form>
                        <Label>No.BPKB</Label>
                        <Input onChange={(e) => handleInput(e.target.value, "bpkb_number")} ></Input>
                    </Form>
                    <Form>
                        <Label>Jenis Kendaraan</Label>
                        <Input onChange={(e) => handleInput(e.target.value, "vehicle_type")}></Input>
                    </Form>
                    <Form>
                        <Label>Tahun Produksi</Label>
                        <Input onChange={(e) => handleInput(e.target.value, "vehicle_year")}></Input>
                    </Form>
                    <Form>
                        <Label>Upload Foto Kendaraan</Label>
                        <PreviewButton style={{ marginRight: "1.6em" }}>Preview</PreviewButton>
                        <InputFile type="file" />
                    </Form>
                    <Form>
                        <Label>Upload Foto BPKB</Label>
                        <PreviewButton style={{ marginLeft: ".8em" }}>Preview</PreviewButton>
                        <InputFile type="file" />
                    </Form>
                    <FormGroupFooter>
                        <CancelButton>Batal</CancelButton>
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
flex-direction: column;
width: 100 %;
justify-content: center;
`
const LeftSide = styled.div`
display: flex;
flex-direction: row;
align-items: start;
`
const LabelTitle = styled.div`
margin : 20px 5px 5px 100px;
display: block;
font-family: Franklin Gothic Medium;
font-style: normal;
font-weight: normal;
font-size: 20px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin: 50px auto;
    background: #FFFFFF;
`
const DropDownContainer = styled.div`
display: inline-block;
position: relative;

width: 40%;
margin-right: 14em;
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
  text-align: center;
  &:focus {
      background-color: #E1ECF4;
  }
`

const DropDownTitle = styled.label`
    color: #ffffff;
    font-family: Franklin Gothic Medium;
    font-style: italic;
    font-size: 18px;
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
const Form = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;


width: 80%;
margin: 2em 0em 0em 0em;
`
const SearchBox = styled.div`
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;

width: 35em;
`
const Label = styled.label`
font-size: 20px;
`
const Input = styled.input`
text-align:center;
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;
outline: none;

padding: .5em;
width: 35em;
`

const CardForm = styled.div`
display: flex;
flex-direction: column;

margin: 2em 10em;
`
const Paragraph = styled.div`
text-align: center;
margin: 0em 0em 5em 0em;
`
const DetailCard = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const DetailLeftSide = styled.div`
display: flex;
flex-direction: column;
`

const DetailMidSide = styled.div`
display: flex;
flex-direction: column;
`

const DetailRightSide = styled.div`
display: flex;
flex-direction: column;
`

const DetailData = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

margin: .5em 0em;
width: 12em;
`
const DetailLabel = styled.div`
font-family: Franklin Gothic Book;

width: 5em;
`

const DetailValue = styled.div`
text-align: end;
font-size: 18px;
`

const Line = styled.div`
border: .5px solid #003459;

width: 55em;
`

const TextArea = styled.textarea`
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;
outline: none;

padding: .5em;
width: 34.7em;
`
const PreviewButton = styled.button`
background: #E1ECF4;
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;
font-size: 20px;

width: 7em;
`


const InputFile = styled.input`

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
outline: none;

width: 210.01px;
height: 40.81px;
`

export default ApplyLoan