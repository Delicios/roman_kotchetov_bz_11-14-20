import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import PageIcon from '../../molecules/PageIcon';
import { ReactComponent as CardIcon } from '../../atoms/Icon/icons/card.svg';
import theme from '../../../theme.js';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 25px;

    .align-center {
        text-align: center;
    }

    .card-specs {
        display: flex;
        gap: 2rem;
    }
`

const StyledHeading = styled(Heading)`
    text-align: center;
    font-weight: bold;
    font-size: 44px;
    line-height: 52px;
    margin-bottom: 1.25rem;

    @media screen and (max-width: 640px) {
        font-size: 40px;
        line-height: 47px;
    }
`;

const StyledSubHeading = styled(Heading)`
    font-size: 20px;
    line-height: 23px;
    margin: 0;
    margin-bottom: 55px;
`;

const StyledButton = styled(Button)`
    margin-top: 4.375rem;
    margin-bottom: 3.75rem;
    background: ${theme.color.secondary};
    height: 50px;
    width: 312px;
    margin-top: 4.375rem;
    margin-bottom: 3.75rem;

    &:hover, &:focus, &:active {
        background-color: ${theme.color.secondary};
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
    }

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 640px) {
        width: 100%;
    }
`;

const StyledInput = styled.input`
    background: none;
    border: none;
    border-bottom: 1px solid black;
    font-size: 1.25rem;
    line-height: 2.5rem;
    width: 100%;
    color: ${theme.color.primary};
    margin-bottom: .5rem;
`;

const Error = styled.div`
    color: red;
    font-size: 12px;
    line-height: 21px;
    margin-bottom: 1rem;
`;

const Pretext = styled.div`
    text-align: center;
    font-size: 12px;
    line-height: 24px;
    margin-top: 60px;
    margin-bottom: .5rem;
`;

const StyledLabel = styled.label`
    font-size: 1.5rem;
    display: block;
    font-weight: bolder;
    margin-bottom: 1.25rem;
`;

const SelectedItems = styled.div`
    border: 1px solid ${theme.color.grayTwo};
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

    .selected {
        border: 1px solid ${theme.color.primary};
    }
`;

const Logo = styled.div`
    color: ${theme.color.primary};
    font-style: italic;
    font-size: 40px;
    text-transform: uppercase;
`;

const PricePerMonth = styled.div`
    font-size: 40px;
    font-weight: bold;

    span {
        font-size: 24px;
        font-weight: 500;
    }
`;

const PricePerYear = styled.div`
    font-size: 16.2556px;
    line-height: 19px;
    color: #828282;
`;

const Payment = ({ ...props }) => {
    return (
        <Wrapper {...props}>
            <PageIcon>
                <CardIcon />
            </PageIcon>
            <StyledHeading>Woah, slow down there cowboy!</StyledHeading>
            <StyledSubHeading className="align-center">We’re gonna need to see some payment info</StyledSubHeading>
            <div>
                <StyledLabel level={2}>Credit Card Number</StyledLabel>
                <StyledInput type="text" value="4113 8273 4256" onChange={() => console.log('sure')} />
                <Error>Umm, yeah. We're gonna need this.</Error>
            </div>
            <br />
            <div>
                <StyledLabel level={2}>Cardholder Name</StyledLabel>
                <StyledInput type="text" value="" onChange={() => console.log('sure')} placeholder="John Dough" />
                <Error>Umm, yeah. We're gonna need this.</Error>
            </div>
            <div className="card-specs">
                <div>
                    <StyledLabel level={2}>Expiry Date</StyledLabel>
                    <StyledInput type="text" value="" onChange={() => console.log('sure')} placeholder="MM/YY" />
                    <Error>Umm, yeah. We're gonna need this.</Error>
                </div>
                <div>
                    <StyledLabel level={2}>CCV</StyledLabel>
                    <StyledInput type="text" value="" onChange={() => console.log('sure')} placeholder="###" />
                    <Error>Umm, yeah. We're gonna need this.</Error>
                </div>
            </div>
            <Pretext>selected coverage</Pretext>
            <SelectedItems>
                <Logo>Logo</Logo>
                <Image image={'stars'} />
                <PricePerMonth>$120<span>/mo</span></PricePerMonth>
                <PricePerYear>$1400 per year</PricePerYear>
            </SelectedItems>
            <StyledButton className="complete" href="/">Complete Purchase</StyledButton>
        </Wrapper>
    )
}

export default Payment
