import React, { useState } from 'react';
import styled from 'styled-components';

import Drawer from "./components/drawer";

import colors from "../helpers/colors";

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
            <RefreshIcon>asdasdasd</RefreshIcon>
          </Refresh>
          <RefreshDate>asdasd</RefreshDate>
        </TotalContainer>
      </Total>
      <DetailBox>
        <Detail>test</Detail>
        <Detail>test</Detail>
        <Detail>test</Detail>
      </DetailBox>
    </Drawer>
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
const RefreshIcon = styled.div``
const RefreshDate = styled.div``

const DetailBox = styled.div`
 display:flex;
 flex: 1;
 flex-flow: column;
 justify-content:space-between;
 height: 48rem;
 margin: 1em;
`
const Detail = styled.div`
 display:flex;
 padding: 1em;
 height: 15rem;
 background-color: ${colors.white};
 border-radius: 24px;
 box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`



export default Home;