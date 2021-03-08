import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Accordion } from "react-bootstrap";
import Axios from 'axios';
import qs from 'querystring';

import Drawer from "./components/drawer";
import LogoContainer from './components/logoContainer';
import Koperasi from '../assets/logo.png';
import Polygon1 from "../pages/img/Polygon1.svg"
import DataDepositProduct from "../helpers/deposit/dataDepositProduct";
import Zoom from "../pages/img/zoom.svg";

const ApplyDeposit = (props) => {
    const [gettingClients, setGettingClients] = useState(false);
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const fetchingClient = async (value) => {
        setGettingClients(true)
        setClients([])
        let param;
        if (value && value != '') {
            param = "?" + qs.stringify({ search: value })
        } else {
            param = ''
        }
        const fetchClients = await Axios.get('http://192.168.1.12:6464/client/profile' + param)
        const { status, message, data } = fetchClients.data
        setClients([...data.clients])
        setGettingClients(false)
    }

    const [form, setForm] = useState({
        id_deposit: '',
        id_client: '',
        deposit_name: '',
        amount: '',
        tenor: '',
        period_unit: "monthly",
        description: ''
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

    // dropdown deposit
    const [dropDownButton, setDropDownButton] = useState("Pilih Produk");
    const handleDropDownButton = (value) => {
        setDropDownButton(value["name"]);
        setForm(state => {
            return {
                ...state,
                id_deposit: value["id_deposit_prod"]
            }
        })
        setOption(!optionOpen);
    }

    const [optionOpen, setOption] = useState(false);
    const handleOptions = () => {
        setOption(!optionOpen)

    }

    const [color, setColor] = useState('#003459');
    const [textColor, setTextColor] = useState('white');

    const { status, message, data } = DataDepositProduct;
    const { depositProd } = data;

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
    console.log(clients)
    console.log(selectedClient)
    return (
        <Drawer title={'Simpanan'} subtitle={'Pengajuan Simpanan'}>
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
                            ><div></div>
                                <DropDownTitle style={{ color: textColor }}>
                                    {dropDownButton}
                                </DropDownTitle>
                                <img src={Polygon1} style={{ width: "15px", marginRight: "14px" }} />
                            </DropDownButton>
                            {optionOpen &&
                                <DropDownOption>
                                    {depositProd.map((value, id) => (
                                        <Accordion.Toggle as={DropDown} eventKey={value.id}
                                            onClick={() => { handleDropDownButton(value) }}
                                        >
                                            {value["id_deposit_prod"] + "-" + value["name"]}
                                        </Accordion.Toggle>
                                    ))}
                                </DropDownOption>
                            }
                        </DropDownContainer>
                        {depositProd.map((value, id) => (
                            <>
                                <Accordion.Collapse eventKey={value.id}>
                                    <CardForm>
                                        <Paragraph>{value["description"]}</Paragraph>
                                        <DetailCard>
                                            <DetailLeftSide>
                                                <DetailData>
                                                    <DetailLabel>Tipe Simpanan</DetailLabel>
                                                    <DetailValue>{value["name"]}</DetailValue>
                                                </DetailData>
                                                <DetailData>
                                                    <DetailLabel>Periode Bunga</DetailLabel>
                                                    <DetailValue>{value["compound"].charAt(0).toUpperCase() + value["compound"].substring(1)}</DetailValue>
                                                </DetailData>
                                                <DetailData>
                                                    <DetailLabel>Periode Posting Bunga</DetailLabel>
                                                    <DetailValue>{value["posting"].charAt(0).toUpperCase() + value["lock_in_period"].substring(1)}</DetailValue>
                                                </DetailData>
                                            </DetailLeftSide>
                                            <DetailMidSide>
                                                <DetailData>
                                                    <DetailLabel>Tipe Bunga</DetailLabel>
                                                    <DetailValue>{value["interest_calculation"].charAt(0).toUpperCase() + value["interest_calculation"].substring(1)}</DetailValue>
                                                </DetailData>
                                                <DetailData>
                                                    <DetailLabel>Hari Dalam Setahun</DetailLabel>
                                                    <DetailValue>{value["days_in_year"]}</DetailValue>
                                                </DetailData>
                                            </DetailMidSide>
                                            <DetailRightSide>
                                                <DetailData>
                                                    <DetailLabel>Pajak</DetailLabel>
                                                    <DetailValue>{value["tax"].charAt(0).toUpperCase() + value["tax"].substring(1)}</DetailValue>
                                                </DetailData>
                                                <DetailData>
                                                    <DetailLabel>Lock In Period</DetailLabel>
                                                    <DetailValue>{value["lock_in_period"].charAt(0).toUpperCase() + value["lock_in_period"].substring(1)}</DetailValue>
                                                </DetailData>
                                            </DetailRightSide>
                                        </DetailCard>
                                    </CardForm>
                                </Accordion.Collapse>
                            </>
                        ))}
                    </Accordion>
                    <Line />
                    <Form>
                        <Label>Anggota</Label>
                        <SearchBox>
                            <Input list="anggota" onChange={(e) => fetchingClient(e.target.value)} style={{
                                outline: "none",
                                border: "none",
                                width: "32em",
                                fontStyle: "italic",
                                margin: "4px 0px 0px 3px"
                            }} placeholder="Cari Anggota" />
                            <datalist id="anggota">
                                {!gettingClients &&
                                    clients.length > 0 ?

                                    clients.map((value, id) => <option onClick={(e) => setSelectedClient(e.target.value)} value={value["client"].id_client} children={value["client"].full_name} />)
                                    : <option value={null} children="data tidak ditemukan !" />
                                }
                            </datalist>

                            <img src={Zoom} />
                        </SearchBox>
                    </Form>
                    <Form>
                        <Label>Nama Simpanan</Label>
                        <Input onChange={(e) => handleInput(e.target.value, "deposit_name")} ></Input>
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
                        <Label>Keterangan</Label>
                        <TextArea onChange={(e) => handleInput(e.target.value, "description")} ></TextArea>
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
justify-content: space-between;
`
const LeftSide = styled.div`
display: flex;
flex-direction: row;
align-items: center;
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

const Label = styled.label`
margin-bottom: 0.5em;
color: #003459;
display: block;
font-family: Franklin Gothic Medium;
font-style: normal;
font-weight: normal;
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
const Paragraph = styled.p`
text-align: center;
margin: 0em 0em 5em 0em;
`

const CardForm = styled.div`
display: flex;
flex-direction: column;

margin: 2em 10em;
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

margin-left: 2em;
`

const DetailRightSide = styled.div`
display: flex;
flex-direction: column;
`
const DetailLabel = styled.div`
font-family: Franklin Gothic Book;
text-align: start;

width: 7em;
`

const DetailValue = styled.div`
text-align: start;
font-size: 18px;

margin: 0em 0em 0em 2em;
width: 5em;
`
const DetailData = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

margin: .5em 0em;
width: 15em;
`

const Line = styled.div`
border: .5px solid #003459;

margin-top: 1em;
width: 55em;
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
const TextArea = styled.textarea`
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;
outline: none;

padding: .5em;
width: 34.7em;
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
export default ApplyDeposit