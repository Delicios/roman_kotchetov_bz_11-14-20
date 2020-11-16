import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';

const StyledInput = styled.input`
    background: none;
    border: none;
    border-bottom: 1px solid black;
    font-size: 1.25rem;
    line-height: 2.5rem;
    width: 100%;
    color: ${theme.color.primary};
    margin-bottom: .25rem;
    outline: none;
`;

const Input = ({ ...props }) => {
    const { selected } = props;
    return (
        <StyledInput selected={selected} {...props} autoComplete="off" />
    )
}

export default Input;