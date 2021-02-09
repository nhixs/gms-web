import React from 'react'
import styled from 'styled-components';

import Drawer from "./components/drawer";
import LogoContainer from './components/logoContainer';
import Koperasi from "../assets/logo.png";
import SearchBar from './components/searchBar';
import DepositProductData from './components/depositProductData';
import Pagination from './components/pagination';

const depositProductList = (props) => {

    return (
        <Drawer title={'Simpanan'} subtitle={'Daftar Produk Simpanan'}>
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
                    </RightSide>
                </Header>
                <Content style={{ alignItems: "center" }}>
                    <Pagination />
                    <DepositProductData />
                </Content>
            </Container>
        </Drawer>
    )
}

const Container = styled.div`
display: flex;
height: fit-content;
flex-direction: column;
justify-content: center;
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

margin-right: 185px;
`

const RightSide = styled.div`
  color: #003459;
`

const Content = styled.div`
display: flex;
flex-direction: column;

`

export default depositProductList

