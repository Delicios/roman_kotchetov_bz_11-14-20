import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../theme';

const StyledButton = styled.button`
    text-decoration: none;
    color: ${theme.color.grayOne};
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    margin: 0 auto;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: .5rem;
    text-align: center;
    cursor: pointer;
    border: none;
    height: 40px;
    width: 80px;
    font-size: 18px;
    line-height: 21px;
    background-color: ${props => props.secondary ? theme.color.secondary : theme.color.primaryLighter};
    transition: ease .125s box-shadow, ease .125s background-color;
    font-weight: bold;
    text-transform: uppercase;
    transition: ease .1s box-shadow, ease .1s background-color;

    &:hover, &:focus, &:active {
        background-color: ${props => props.secondary ? theme.color.secondaryLighter : theme.color.primary};
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
    }

    &:focus {
        outline: none;
    }

    &:hover:disabled, &:focus:disabled {
        cursor: unset;
        background-color: rgba(239,239,239,.3);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    }

    &.disabled {
        cursor: not-allowed;
        opacity: 0.5;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
        pointer-events: none;
    }
`;

const Button = ({ ...props }) => {
    const { type } = props;
    return <StyledButton type={type} {...props} />
}

Button.propTypes = {
    disabled: PropTypes.bool,
    href: PropTypes.string,
}

export default Button;
