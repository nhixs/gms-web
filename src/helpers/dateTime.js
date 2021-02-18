import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DateTime = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <Time>GMT+7:00 {date.toLocaleDateString()} {date.toLocaleTimeString()}</Time>
    )
}

const Time = styled.div`
font-family: Franklin Gothic Medium;
font-style: italic;
font-weight: normal;
font-size: 20px;

margin-top: 2em;

color: #C4C4C4;
`

export default DateTime