import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
    display: inline-block;
    font-size: 30px;
    width: 26px;
    height: 26px;
    margin: 0.1em;
    box-sizing: border-box;

    & > svg {
        width: 100%;
        height: 100%;
        fill: currentcolor;
        stroke: none;
    }
`;

const Icon = ({...props}) => {
    // const svg = require(`./icons/${icon}.svg`);
    return <Wrapper {...props} />
}

export default Icon;