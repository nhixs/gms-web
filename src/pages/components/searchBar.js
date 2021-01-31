import React from 'react';
import styled from 'styled-components';
import zoom from '../img/zoom.svg';
import { Input } from '@material-ui/core';


const SearchBar = (props) => {
    return (

        <Box>
            <img src={zoom} style={{ margin: "5px", width: "15px" }} />
            <Input type="text" placeholder={"Cari Officer"} disableUnderline={true} />
        </Box>

    )
}

const Box = styled.div`
width: 265px;
height: 35px;
line-height: fit-content;

border: 1px solid #003459;
box-sizing: border-box;
border-radius: 10px;
`



export default SearchBar
