import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


import Drawer from "./components/drawer";
import LogoContainer from "./components/logoContainer";
import Koperasi from "../assets/logo.png"
import SearchBar from "../pages/components/searchBar";
import { Checkbox } from '@material-ui/core';

const OfficerList = (props) => {
    const [optionOpen, setOption] = useState(false);
    const [titleButton, setTitleButton] = useState("Pilih");
    const handleTitleButton = (title) => {
        setTitleButton(title);
        setOption(!optionOpen);
    }
    const handleOptions = () => {
        setOption(!optionOpen)
    }

    return (
        <Drawer title={'Officer'} subtitle={'Daftar Officer'}>
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
                                                onClick={() => handleTitleButton("Name")}
                                            >Name
                                            </DropDown>
                                            <DropDown
                                                onClick={() => handleTitleButton("Role")}
                                            >Role</DropDown>
                                            <DropDown
                                                onClick={() => handleTitleButton("Id")}
                                            >Id</DropDown>
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
                    <Table>
                        <TableRow>
                            <TableHead>
                                First Name
                            </TableHead>
                            <TableHead>
                                Last Name
                            </TableHead>
                            <TableHead>
                                Age
                            </TableHead>
                        </TableRow>
                    </Table>
                </TableContainer>
            </Container>
        </Drawer>
    );
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
z-index: 10;
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
const Table = styled.table`
border: 1px solid black;
border-collapse: collapse;
`

const TableRow = styled.tr`

`

const TableHead = styled.th`

`
export default OfficerList;