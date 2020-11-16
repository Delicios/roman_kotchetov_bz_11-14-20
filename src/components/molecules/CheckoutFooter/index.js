import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import { ReactComponent as DownIcon } from '../../atoms/Icon/icons/chevron-down.svg';
import { ReactComponent as UpIcon } from '../../atoms/Icon/icons/chevron-up.svg';

import theme from '../../../theme.js';

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.color.primary}; // color primary 1
    height: 60px;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
    color: white;
    font-weight: bold;
    font-size: 18px;
    line-height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: baseline;
    padding: 0 2rem;
`;

const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    align-content: center;
`;

const StyledButton = styled(Button)`
    height: 36px;
    width: 36px;
    line-height: 34px;
    border-radius: 3px;x
    color: ${theme.color.grayOne}; // color grayscale 4
    background: ${theme.color.grayFour}; // color grayscale 0

    &:hover, &:focus, &:active {
        background-color: ${theme.color.secondary}; // color success 0
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
    }

    &:focus {
        outline: none;
    }

    &.disabled {
        cursor: not-allowed;
        opacity: 0.5;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
        pointer-events: none;
    }

    @media screen and (max-width: 640px) {
        width: 100%;
    }
`;

const CheckoutFooter = ({ ...props }) => {
    const { step, view, validation } = props;

    return (
        <Wrapper>
            <div className="step-location">
                {step}
            </div>
            <ButtonWrapper>
                <StyledButton className="disabled">
                    <UpIcon />
                </StyledButton>
                <StyledButton onClick={() => view('payment')} className={validation ? '' : 'disabled'}>
                    <DownIcon />
                </StyledButton>
            </ButtonWrapper>
        </Wrapper>
    )
}

CheckoutFooter.propTypes = {
    step: PropTypes.string
}

export default CheckoutFooter;