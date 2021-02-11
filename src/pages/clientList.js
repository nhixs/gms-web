import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import Drawer from "./components/drawer";
import LogoContainer from './components/logoContainer';
import Koperasi from "../assets/logo.png";
import SearchBar from "../pages/components/searchBar";
import { Checkbox } from '@material-ui/core';
import dataClient from "../helpers/client/dataClient";



const ClientList = (props) => {

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
        const { value, index } = props
        const { id, name, ktp, gender, address, profesion } = value
        return (
            <tr>
                <th scope="row" style={{ color: "#003459", border: "1px solid #003459", textAlign: "center" }}>
                    {index + 1}
                </th>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center" }}>
                    {id}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center" }}>
                    {name}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center", width: "30%", }}>
                    {ktp}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center" }}>
                    {gender}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center" }}>
                    {address}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center" }}>
                    {profesion}
                </td>
                <td style={{ color: "#003459", border: "1px solid #003459", textAlign: "center" }}>
                    <div>
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
                    <div style={{ marginTop: "5px" }}>
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
            </tr>
        )
    }
    return (
        <Drawer title={'Anggota'} subtitle={'Daftar Anggota'}>
            <Container>
                <Header>
                    <LeftSide>
                        <Logo>
                            <LogoContainer image={Koperasi} scale={"3em"} space={".5em"} />
                            <KoperasiTitle>Gapura Kayumanis</KoperasiTitle>
                        </Logo>
                    </LeftSide>
                    <MidSide>
                        <SearchBar></SearchBar>
                    </MidSide>
                    <RightSide>
                        <SortOption>
                            <SortTitle>Urutkan :</SortTitle>
                            <Option>
                                <VariableOption>
                                    <SortButton
                                        onClick={() => handleOptions()}
                                    >
                                        {titleButton}
                                    </SortButton>
                                    {optionOpen &&
                                        <DropdownOptions>
                                            <DropDown
                                                onClick={() => handleTitleButton("Name")}
                                            >Name</DropDown>
                                            <DropDown
                                                onClick={() => handleTitleButton("Role")}
                                            >Role</DropDown>
                                            <DropDown
                                                onClick={() => handleTitleButton("Id")}
                                            >Id</DropDown>
                                        </DropdownOptions>
                                    }
                                </VariableOption>
                                <OrderOption>
                                    <OrderBy>
                                        <Checkbox></Checkbox>Asc
                                    </OrderBy>
                                    <OrderBy>
                                        <Checkbox></Checkbox>Desc
                                    </OrderBy>
                                </OrderOption>
                            </Option>
                        </SortOption>
                    </RightSide>
                </Header>
                <TableContainer>
                    <table style={{ width: "100%" }} >
                        <thead>
                            <tr style={{ backgroundColor: "#003459" }}>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>No</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>ID</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Nama</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>No. KTP</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Gender</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Lokasi</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Profesi</th>
                                <th scope="col" style={{ color: "white", border: "1px solid white", textAlign: "center" }}>Action</th>
                                {/* {role === "supervisor" && <th>Action</th>} */}
                            </tr>
                        </thead>
                        <tbody>
                            {dataClient.length === 0 && (
                                <div>
                                    Tidak ada Data
                                </div>
                            )}
                            {dataClient.length > 0 && dataClient.map((value, index) => {
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

const MidSide = styled.div`
display: flex;
flex-direction: row;
align-items: center; 
`

const RightSide = styled.div`
color: #003459;
`

const SortOption = styled.div`
display: flex;
flex-direction: row;
line-height: fit-content;
`

const SortTitle = styled.div`
font-family: Franklin Gothic Medium;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 20px;
`

const Option = styled.div`
display: flex;
flex-direction: column;
line-height: fit-content;
`

const VariableOption = styled.div`
width: 100%;
`

const SortButton = styled.div`
background: #003459;
border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;
color: #ffffff;
font-family: Franklin Gothic Medium;
font-style: italic;
font-weight: normal;
font-size: 17px;
line-height: 20px;
text-align: center;

width: 128px;
height: 20px;
margin-left: 5px
`

const DropdownOptions = styled.div`
display: flex;
position: absolute;
justify-content: center;
flex-direction: column;
width: 8.4em;
height: fit-content;
flex: 1;
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
line-height: 23px;


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
const TableContainer = styled.div`
`
export default ClientList;
