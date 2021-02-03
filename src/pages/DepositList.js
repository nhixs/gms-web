import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Checkbox } from '@material-ui/core';

import Drawer from "./components/drawer";
import LogoContainer from "./components/logoContainer";
import Koperasi from "../assets/logo.png"
import SearchBar from "../pages/components/searchBar";
import dataDeposit from "../helpers/dataDeposit";

const DepositList = (props) => {

    const [titleButton, setTitleButton] = useState("Pilih");
    const handleTitleButton = (title) => {
        setTitleButton(title);
        setOption(!optionOpen);
    }

    const [optionOpen, setOption] = useState(false);
    const handleOptions = () => {
        setOption(!optionOpen)
    }

    const TableRow = (props) => {
        const { value } = props
        const { id_deposit, name, deposit_product, deposit_amount, amount_of_deposit, period, interest, status } = value
        return (
            <tr>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center", width: "12%" }}>
                    {id_deposit}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center", width: "15%" }}>
                    {name}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center", width: "15%" }}>
                    {deposit_product}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center", width: "12%" }}>
                    {deposit_amount}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center", width: "12%", }}>
                    {amount_of_deposit}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center", width: "7%", }}>
                    {period}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center", width: "7%", }}>
                    {interest}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center", width: "7%" }}>
                    <div style={{ margin: "4px 0px" }}>
                        <button style={{
                            color: "#003459",
                            fontFamily: "Franklin Gothic",
                            fontSize: "15px",
                            background: "#E1ECF4",
                            borderRadius: "100px",
                            border: "none",
                            width: "70px",
                            height: "25"
                        }}>EDIT</button>
                    </div>
                    <div style={{ margin: "4px 0px" }}>
                        <button style={{
                            color: "#ffffff",
                            fontFamily: "Franklin Gothic",
                            fontSize: "15px",
                            background: "#F85454",
                            borderRadius: "100px",
                            border: "none",
                            width: "70px",
                            height: "25"
                        }}>Hapus</button>
                    </div>
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center", width: "7%" }}>
                    {status}
                </td>
            </tr>
        )
    }
    return (
        <Drawer title={'Simpanan'} subtitle={'Daftar Simpanan Anggota'}>
            <Container>
                <Header>
                    <LeftSide>
                        <LogoContainer image={Koperasi} scale={"3em"} space={".5em"} />
                        <KoperasiTitle>Gapura Kayumanis</KoperasiTitle>
                    </LeftSide>
                    <MidSide>
                        <SearchBar></SearchBar>
                    </MidSide>
                    <RightSide>
                        <SortOptions>
                            <SortTitle>Urutkan :</SortTitle>
                            <Option>
                                <VariableOptions>
                                    <SortButton
                                        onClick={() => handleOptions()}
                                    >
                                        {titleButton}
                                    </SortButton>
                                    {optionOpen &&
                                        <DropDownOptions>
                                            <DropDown
                                                onClick={() => handleTitleButton("Nomer")}
                                            >Nomer
                                            </DropDown>
                                            <DropDown
                                                onClick={() => handleTitleButton("Nama")}
                                            >Nama
                                            </DropDown>
                                            <DropDown
                                                onClick={() => handleTitleButton("Produk")}
                                            >Produk
                                            </DropDown>
                                            <DropDown
                                                onClick={() => handleTitleButton("Status")}
                                            >Status
                                            </DropDown>
                                            <DropDown
                                                onClick={() => handleTitleButton("Total")}
                                            >Total
                                            </DropDown>
                                            <DropDown
                                                onClick={() => handleTitleButton("Setoran")}
                                            >Setoran
                                            </DropDown>
                                        </DropDownOptions>
                                    }
                                </VariableOptions>
                                <OrderOption>
                                    <OrderBy>
                                        <Checkbox></Checkbox>Asc
                                    </OrderBy>
                                    <OrderBy>
                                        <Checkbox></Checkbox>Desc
                                    </OrderBy>
                                </OrderOption>
                            </Option>
                        </SortOptions>
                    </RightSide>
                </Header>
                <TableContainer>
                    <table style={{ width: "100%" }} >
                        <thead>
                            <tr style={{ backgroundColor: "#003459" }}>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>No. Simpanan</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Nama</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Produk Simpanan</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Total Simpanan</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Besar Setoran</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Periode</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Bunga</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Action</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Status</th>
                                {/* {role === "supervisor" && <th>Action</th>} */}
                            </tr>
                        </thead>
                        <tbody>
                            {dataDeposit.length === 0 && (
                                <div>
                                    Tidak ada Data
                                </div>
                            )}
                            {dataDeposit.length > 0 && dataDeposit.map((value, index) => {
                                return <TableRow value={value} index={index} />
                            })}
                        </tbody>
                    </table>
                </TableContainer>
            </Container>
        </Drawer>
    )
}

const Container = styled.div`
display: flex;
height: fit-content;
flex-direction: column;
width: 90em;
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


const RightSide = styled.div`
  color: #003459;
`
const SortOptions = styled.div`
display: flex;
flex-direction: row;
line-height: fit-content;
`
const SortTitle = styled.div`
font-family: Franklin Gothic Medium;
font-size: 20px;
padding: 0 1.2em;
`
const Option = styled.div`
display: flex;
flex-direction: column;
line-height: fit-content;
`
const VariableOptions = styled.div`
width: 100%;
display: inline-block;
position: relative;
`
const SortButton = styled.div`
/* background: #003459;
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;
color: #ffffff;
font-family: Franklin Gothic Medium;
font-style: italic;
font-weight: normal;
font-size: 17px;
text-align: center;
width: 100%;
height: 20px;
margin-left: 5px
*/
display: flex;
  justify-content: center;
  flex: 1;
  color: #ffffff;
  background-color: #003459;
  border-radius:2px;
  z-index:10;
`
const DropDownOptions = styled.div`
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


  color: #003459;
  &:hover {
      background-color: #E1ECF4;
  }

`
const OrderOption = styled.div`
display: flex;
flex-direction: row;
line-height: fit-content;
justify-content: space-between;

`

const OrderBy = styled.div`
font-family: Franklin Gothic Medium;
font-style: italic;
font-weight: normal;
font-size: 17px;
line-height: 23px;


color: #003459;
`
const CheckBox = styled.div`
border: 0.5px solid #003459;
box-sizing: border-box;
`
const MidSide = styled.div`
display: flex;
flex-direction: row;
align-items: center; 
`

const TableContainer = styled.div`
`

export default DepositList
