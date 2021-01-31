import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import Drawer from "./components/drawer";
import LogoContainer from './components/logoContainer';
import Koperasi from "../assets/logo.png";
import SearchBar from "../pages/components/searchBar";
import { Checkbox } from '@material-ui/core';


const ClientList = (props) => {
    const [optionOpen, setOption] = useState(false);
    const handleOptions = () => {
        setOption(!optionOpen)
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
                                        Pilih
                                    </SortButton>
                                    {optionOpen &&
                                        <DropdownOptions>
                                            <DropDown>Name</DropDown>
                                            <DropDown>Role</DropDown>
                                            <DropDown>Id</DropDown>
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
export default ClientList;
