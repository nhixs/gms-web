import React, { Component } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import ReactPaginate from 'react-paginate';
import "./css/pagination.css";

import backArrow from "../img/back_arrow.svg";
import forwardArrow from "../img/forward_arrow.svg";

export default class pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {

                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => <React.Fragment>

                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),

                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={<img src={backArrow} style={{ width: "12px" }} />}
                    nextLabel={<img src={forwardArrow} style={{ width: "12px" }} />}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>

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