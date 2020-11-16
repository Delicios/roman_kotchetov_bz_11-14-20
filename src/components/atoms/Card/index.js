import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme.js';

const Styled = styled.div`
    border-radius: .25rem;
    padding: 1.5rem;
    text-align: center;
    height: calc(100vw - 2rem);
    max-height: 220px;
    background-color: rgba(255,255,255,.3);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-rows: 60px 70px 50px 30px;
    justify-items: center;
    border: ${props => props.selected ? `2px solid ${theme.color.primary}` : `1px solid ${theme.color.grayTwo}`};
`;

const Card = ({ ...props }) => {
    const { selected } = props;
    return (
        <Styled selected={selected} {...props} />
    )
}

export default Card;