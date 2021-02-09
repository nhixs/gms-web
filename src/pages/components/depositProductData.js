import React, { Component } from 'react';
import styled from 'styled-components';

import "./css/pagination.css";
import DataDepositProduct from "../../helpers/dataDepositProduct";


export default class depositDataProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    receivedData() {
        const { status, message, data } = DataDepositProduct;
        const { depositProd } = data
        console.log(depositProd)
        this.setState(state => {
            const data = state.data.concat(depositProd)
            return {
                ...state,
                data
            }
        })
        console.log(this.state.data);
        console.log("ini data")
    }
    componentDidMount() {
        if (this.state.data.length === 0) {
            this.receivedData();
        }
    }
    render() {
        const { data } = this.state

        console.log(this.state.data);
        console.log("render");
        return (
            <>
                { data.length <= 0 && <div>data kosong</div>}
                {
                    data.length > 0 &&
                    data.map(product =>
                        <div key={product.id}>
                            <Card>
                                <CardHeader>
                                    <ProductName>
                                        {product.name}
                                    </ProductName>
                                    <ProductId>
                                        {product.id_deposit_prod}
                                    </ProductId>
                                </CardHeader>
                                <CardBody>

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
                                </CardBody>
                            </Card>
                        </div>
                    )
                }
            </>
        )
    }
}

const Label = styled.label`
font-family: Franklin Gothic Book;
font-size: 12px;

color: #003459;
`
const Card = styled.div`
width: 446px;
height: 85px;

margin: 15px 0px 0px 10px;

background: linear-gradient(92.02deg, #FFF975 0.26%, #FFFFFF 79.73%);
box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.10);
border-radius: 20px;
`

const CardHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const ProductName = styled.div`
font-family: Franklin Gothic Medium;
font-style: normal;
font-weight: normal;
font-size: 25px;

margin-left: 25px;

color: #003459;
`

const ProductId = styled.div`
font-family: Franklin Gothic Medium;
font-style: normal;
font-weight: normal;
font-size: 10px;

margin-top: 23px;
margin-right: 45px;

color: #003459;
`
const CardBody = styled.div`
display: flex;
flex-direction: row;

margin-top: 15px;
margin-left: 25px;
`

const CardData = styled.div`
font-size: 12px;
font-weight: bold;
`