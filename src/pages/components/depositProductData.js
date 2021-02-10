import React, { Component } from 'react';
import styled from 'styled-components';

import { Accordion, Card } from "react-bootstrap";

import "./css/pagination.css";
import DataDepositProduct from "../../helpers/dataDepositProduct";


export default class depositProductData extends Component {
    state = {
        showDetail: false
    }

    toggleDetailHandler = () => {
        const isVisible = this.state.showDetail;
        this.setState({
            showDetail: !isVisible
        });
    }


    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    receivedData() {
        const { status, message, data } = DataDepositProduct;
        const { depositProd } = data
        this.setState(state => {
            const data = state.data.concat(depositProd)
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
            /* <>
                 { data.length <= 0 && <div>data kosong</div>}
                 {
                     data.length > 0 &&
                     data.map(product =>
                         <div>
                             <Accordion defaultActiveKey="0">
                                 <Card key={product.id}>
                                     <CardHeader>
                                         <ProductName >
                                             {product.name}
                                         </ProductName>
                                         <ProductId>
                                             {product.id_deposit_prod}
                                         </ProductId>
                                     </CardHeader>
                                     <CardBody>
                                         <CardData>
                                             <Label>Bunga</Label>
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
                                     </CardBody>
                                 </Card>
                                 {detail}
                             </Accordion>
                         </div>
                     )
                 }
             </>*/
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
                                            {product.id_deposit_prod}
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
                                            <Label>Deskripsi</Label>
                                            <Paragraph>{product.description}</Paragraph>
                                        </DetailHeader>
                                        <DetailBodyContainer>
                                            <DetailBody>
                                                <DetailLabel>Tipe Simpanan</DetailLabel>
                                                <DetailData>{product.deposit_type}</DetailData>
                                                <DetailLabel>Tipe Bunga</DetailLabel>
                                                <DetailData>{product.interest_calculation}</DetailData>
                                                <DetailLabel>Pajak</DetailLabel>
                                                <DetailData>{product.tax}</DetailData>
                                            </DetailBody>
                                            <DetailBody>
                                                <DetailLabel>Periode Bunga</DetailLabel>
                                                <DetailData>{product.compound}</DetailData>
                                                <DetailLabel>Hari Dalam Setahun</DetailLabel>
                                                <DetailData>360</DetailData>
                                            </DetailBody>
                                            <DetailBody>
                                                <DetailLabel>Periode Posting Bunga</DetailLabel>
                                                <DetailData>{product.posting}</DetailData>
                                                <DetailLabel>Lock In Period</DetailLabel>
                                                <DetailData>{product.lock_in_period}</DetailData>
                                            </DetailBody>
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

// const Label = styled.label`
// font-family: Franklin Gothic Medium;
// font-size: 15px;
// margin-right: 5px;
// margin-left: 10px;

// color: #003459;
// `
// const Card = styled.div`
// width: 446px;
// height: 85px;

// margin: 15px 0px 0px 10px;

// background: linear-gradient(92.02deg, #FFF975 0.26%, #FFFFFF 79.73%);
// box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.10);
// border-radius: 20px;
// `

// const CardHeader = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// `

// const ProductName = styled.div`
// font-family: Franklin Gothic Medium;
// font-style: normal;
// font-weight: normal;
// font-size: 25px;

// margin-left: 25px;

// color: #003459;
// `

// const ProductId = styled.div`
// font-family: Franklin Gothic Medium;
// font-style: normal;
// font-weight: normal;
// font-size: 10px;

// margin-top: 23px;
// margin-right: 45px;

// color: #003459;
// `
// const CardBody = styled.div`
// display: flex;
// flex-direction: row;

// margin-top: 15px;
// margin-left: 25px;
// `

// const CardData = styled.div`
// font-size: 12px;
// font-weight: bold;
// `

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

`
const DetailLabel = styled.label`
font-family: Franklin Gothic Book;
font-size: 10px;

margin-right: 5px;
`

const DetailData = styled.div`
font-family: Franklin Gothic Medium;
font-weight: normal;
font-size: 12px;

margin-right: 5px;

color: #003459;
`

const Label = styled.label`
    /* font-family: Franklin Gothic Book; */
    font-size: 12px;
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
    /* font-family: Franklin Gothic Medium; */
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    /* margin-left: 25px; */
    color: #003459;
`

const ProductId = styled.div`
    /* font-family: Franklin Gothic Medium; */
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    /* margin-top: 23px;
    margin-right: 45px; */
    color: #003459;
`
const CardBody = styled.div``



const CardData = styled.div`
    font-size: 12px;
    font-weight: bold;
    margin-right: .6em;
    `