import React, { Component } from 'react';
import styled from 'styled-components';

import { Accordion, Card } from "react-bootstrap";

import "../css/pagination.css";
import DataLoanProduct from "../../../helpers/loan/dataLoanProduct";

export default class loanData extends Component {



    state = {
        showDetail: false
    }

    tonggleDetailHandler = () => {
        const isVisible = this.state.showDetail;
        this.setState({
            showDetail: !isVisible
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

    }

    receivedData() {
        const { status, message, data } = DataLoanProduct;
        const { loanProd } = data
        console.log(loanProd)
        this.setState(state => {
            const data = state.data.concat(loanProd)
            return {
                ...state,
                data
            }
        })

    }
    componentDidMount() {
        if (this.state.data.length === 0) {
            this.receivedData();
        }
    }

    render() {
        const { data } = this.state
        return (
            <>
                { data.length <= 0 && <div>data kosong</div>}
                {
                    data.length > 0 &&
                    <Accordion as={Container} id="cards">
                        {data.map((product, index) =>
                            <Card as={TheCard}>
                                <Accordion.Toggle as={CardHeader} color={"#" + product['theme_color']} eventKey={product.id}>
                                    <Title>
                                        <ProductName>
                                            {product.name}
                                        </ProductName>
                                        <ProductId>
                                            {product.id_loan_prod}
                                        </ProductId>
                                    </Title>
                                    <Subtitle>
                                        <CardData>
                                            <Label>Bunga:</Label>
                                            {product.interest_rate}%
                                        </CardData>
                                        <CardData>
                                            <Label>Tipe Bunga: </Label>
                                            {product.interest_calculation}
                                        </CardData>
                                        <CardData>
                                            <Label>Pajak:</Label>
                                            {product.tax}
                                        </CardData>
                                    </Subtitle>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={product.id}>
                                    <Card.Body>

                                        <DetailHeader>
                                            <Label style={{ fontStyle: "normal" }}>Deskripsi</Label>
                                            <Paragraph>{product.description}</Paragraph>
                                        </DetailHeader>
                                        <DetailBodyContainer>
                                            <DetailLeftSide>
                                                <DataContainer>
                                                    <DetailLabel>Tipe Pinjaman</DetailLabel>
                                                    <DetailData>{product.loan_type}</DetailData>
                                                </DataContainer>
                                                <DataContainer>
                                                    <DetailLabel>Periode Bunga</DetailLabel>
                                                    <DetailData>{product.compound}</DetailData>
                                                </DataContainer>
                                                <DataContainer>
                                                    <DetailLabel>Tipe Anggunan</DetailLabel>
                                                    <DetailData>{product.collateral_type}</DetailData>
                                                </DataContainer>
                                            </DetailLeftSide>
                                            <DetailMidSide>
                                                <DataContainer>
                                                    <DetailLabel>Tipe Bunga</DetailLabel>
                                                    <DetailData>{product.interest_calculation}</DetailData>
                                                </DataContainer>
                                                <DataContainer>
                                                    <DetailLabel>Hari Dalam Setahun</DetailLabel>
                                                    <DetailData>{product.days_in_year}</DetailData>
                                                </DataContainer>
                                            </DetailMidSide>
                                            <DetailRightSide>
                                                <DataContainer>
                                                    <DetailLabel>Pajak</DetailLabel>
                                                    <DetailData>{product.tax}</DetailData>
                                                </DataContainer>
                                                <DataContainer>
                                                    <DetailLabel>Hari Dalam Sebulan</DetailLabel>
                                                    <DetailData>{product.day_in_month}</DetailData>
                                                </DataContainer>
                                            </DetailRightSide>
                                        </DetailBodyContainer>

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                        )}
                    </Accordion>
                }
            </>
        )
    }


}

const CardDetail = styled.div`
width: 450px;
height: 219px;
padding: 5px;

 box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
 border-radius: 0px 0px 20px 20px;
 `

const Paragraph = styled.p`
 margin-left: 10px;
 font-size: 12px;
 font-family: Franklin Gothic Medium;
 `

const DetailHeader = styled.div`
 margin: 10px 15px 10px 25px;
 `

const DetailBody = styled.div`
 display: flex;
 flex-direction: row;

margin-left: 25px;
 padding: 5px;
`
const DetailBodyContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

padding: 0em 3em 0em 3em;
width: 100%;
`
const DetailLabel = styled.label`
font-family: Franklin Gothic Book;
font-size: 10px;

width: 4.5em;
margin-right: 5em;
`

const DetailData = styled.div`
font-family: Franklin Gothic Medium;
font-weight: normal;
font-size: 12px;

width: 4.5em;
margin-right: 5px;

color: #003459;
`

const Label = styled.label`
    font-family: Franklin Gothic Book;
    font-size: 15px;
    font-weight: bold;

    color: #003459;
    padding-right: .6rem;
`

const Container = styled.div`
    display: flex;
    height: fit-content;
    width: 100%;
    align-items:center;
    margin-top: 2em;
    flex-direction: column;
`

const TheCard = styled.div`
    margin: .6em 0 0 0;
    width: 42em;
    height: fit-content;
    border-radius: 4px !important;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.10);
`

const Title = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
const Subtitle = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    padding-top: .4em;
    justify-content: flex-start;
`

const CardHeader = styled.div`
    height: fit-content;
    width: 100%;
    padding: .6em .8em;
    ${props => `background: linear-gradient(92.02deg, ${props.color} 0.26%, #FFFFFF 79.73%);`}
`

const ProductName = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: #003459;
`

const ProductId = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    /* margin-top: 23px;
    margin-right: 45px; */
    color: #003459;
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

const CardData = styled.div`
    font-size: 12px;
    font-weight: bold;
    margin-right: .6em;
    `

const DataContainer = styled.div`
display: flex;
felx-direction: row;
justify-content: space-between;
`