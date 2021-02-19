import React, { useState } from 'react';
import styled from 'styled-components';

import Drawer from "./components/drawer";

import colors from "../helpers/colors";

import refresh from "../assets/refresh.svg";
import DateTime from "../helpers/dateTime";
import GetMoney from "../assets/home1.svg";
import ShakeHand from "../assets/home2.svg";
import MoneyPuch from "../assets/home3.svg";
import PaperStack from "../assets/paperStack.svg";
import CheckBoard from "../assets/checkBoard.svg";

const Home = (props) => {

  const [homeData, setHomeData] = useState({
    depositTotal: 1437543,
    loanTotal: 70800124,
    clientTotal: 1225,
    candidateTotal: 95,
    appliedDeposit: 2,
    pendingDeposit: 18,
    appliedLoan: 115,
    pendingLoan: 13,
  })
  const anggota = "1255";
  const calonAnggota = "95";
  const approvedDeposit = "2";
  const pendingDeposit = "18";
  const approvedLoan = "115";
  const pendingLoan = "13";

  return (
    <Drawer title={'Home'} >
      <Total>
        <TotalContainer>
          <Title>Total Simpanan</Title>
          <Content>{Intl.NumberFormat('id', { style: 'currency', currency: 'IDR' }).format(homeData.depositTotal)}</Content>
        </TotalContainer>
        <TotalContainer>
          <Title>Total Pinjaman</Title>
          <Content>{Intl.NumberFormat('id', { style: 'currency', currency: 'IDR' }).format(homeData.loanTotal)}</Content>
        </TotalContainer>
        <TotalContainer>
          <Refresh>
            <RefreshIcon><img src={refresh} style={{ height: "5em" }} /></RefreshIcon>
          </Refresh>
          <RefreshDate>
            <DateTime></DateTime>
          </RefreshDate>
        </TotalContainer>
      </Total>
      <DetailBox>
        <Detail>
          <img src={ShakeHand} style={{ width: "3.5em", paddingBottom: "10em" }} />
          <DataContainer style={{ alignItems: "center", padding: "0em 0em 0em 8.75em", marginRight: "2.5em" }}>
            <Label>Jumlah Anggota</Label>
            <Data>{anggota}</Data>
            <Button style={{ width: "4.5em" }}>Review</Button>
          </DataContainer>
          <Line style={{ marginRight: "8.3em" }}></Line>
          <DataContainer style={{ alignItems: "center", paddingRight: "8.3em" }}>
            <Label>Calon Anggota</Label>
            <Data>{calonAnggota}</Data>
            <Button style={{ width: "4.5em" }}>Review</Button>
          </DataContainer>
        </Detail>
        <Detail style={{
          margin: "1.5em 0em 1.5em"
        }}>
          <img src={MoneyPuch} style={{ width: "3.5em", paddingBottom: "10em" }} />
          <ContentContainer>
            <ContentHeader>Aplikasi Simpanan</ContentHeader>
            <ContentDetail>
              <img src={CheckBoard} style={{ width: "5em", marginRight: "2em" }} />
              <DataContainer>
                <Label style={{ margin: "0" }}>Approved</Label>
                <Data style={{ margin: "0" }}>{approvedDeposit}</Data>
                <Button>Review</Button>
              </DataContainer>
              <Line></Line>
              <img src={PaperStack} style={{ width: "5em", marginRight: "2em" }} />
              <DataContainer>
                <Label style={{ margin: "0" }}>Pending</Label>
                <Data style={{ margin: "0" }}>{pendingDeposit}</Data>
                <Button>Review</Button>
              </DataContainer>
            </ContentDetail>
          </ContentContainer>
        </Detail>
        <Detail>
          <img src={GetMoney} style={{ width: "3.5em", paddingBottom: "10em" }} />
          <ContentContainer>
            <ContentHeader>Aplikasi Pinjaman</ContentHeader>
            <ContentDetail>
              <img src={CheckBoard} style={{ width: "5em", marginRight: "2em" }} />
              <DataContainer>
                <Label style={{ margin: "0" }}>Approved</Label>
                <Data style={{ margin: "0" }}>{approvedLoan}</Data>
                <Button>Review</Button>
              </DataContainer>
              <Line></Line>
              <img src={PaperStack} style={{ width: "5em", marginRight: "2em" }} />
              <DataContainer>
                <Label style={{ margin: "0" }}>Pending</Label>
                <Data style={{ margin: "0" }}>{pendingLoan}</Data>
                <Button>Review</Button>
              </DataContainer>
            </ContentDetail>
          </ContentContainer>
        </Detail>
      </DetailBox>
    </Drawer >
  )
}

const Total = styled.div`
 display:flex;
 flex: 1;
 flex-flow: column wrap;
 height: 48rem;
 margin: 1em;
 align-items: center;
 justify-content: space-evenly;
 background-color: ${colors.white};
 border-radius: 24px;
 box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`

const TotalContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 1rem 1.8rem;
`

const Title = styled.div`
  font-size: 3em;
  text-transform: uppercase;
  font-weight: bold;
`
const Content = styled.div`
  font-size: 3.8em;
  font-weight: lighter;
`

const Refresh = styled.div``
const RefreshIcon = styled.button`
border: none;
background: none;
`
const RefreshDate = styled.div`
display: flex;
justify-content:space-between; 
fle-direction: row;

font-style: italic;
font-size: 25px;
`

const DetailBox = styled.div`
 display:flex;
 flex: 1;
 flex-flow: column;
 height: 48rem;
 margin: 1em;
`
const Detail = styled.div`
 display:flex;
 justify-content: space-between;
 padding: 1em;
 height: 15rem;
 background-color: ${colors.white};
 border-radius: 24px;
 box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`

const DataContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

padding: 0em 4.7em 0em 0em;
`

const Button = styled.button`

background: #E1ECF4;
border-radius: 100px;
border: none;
`

const Label = styled.div`
font-family: Franklin Gothic Medium;
font-size: 20px;
text-align: center;

margin: 0em 0em .5em 0em;
`
const Data = styled.div`
font-size: 40px;
text-align: center;

margin: 0em 0em .5em 0em;
`
const Line = styled.div`
border: .25px solid #003459;
transform: rotate(180deg);

margin: 2em 3em 0em 0em;

height: 8em;
`
const ContentDetail = styled.div`
display:flex;
justify-content: space-between;

padding: 0em 5.7em 0em 0em;
`
const ContentHeader = styled.div`
font-size: 30px;
text-align: center;

padding: 0em 1.4em 0em 0em;
`
const ContentContainer = styled.div`
display: flex;
flex-direction: column;

`
export default Home;