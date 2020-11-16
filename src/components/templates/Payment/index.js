import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../atoms/Card';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import PageIcon from '../../molecules/PageIcon';
import PaymentForm from '../../organisms/PaymentForm';
import { ReactComponent as CardIcon } from '../../atoms/Icon/icons/card.svg';
import { ReactComponent as Stars } from '../../atoms/Image/images/stars.svg';
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
    height: 50px;
    width: 312px;
    margin-top: 4.375rem;
    margin-bottom: 3.75rem;

`;

const Pretext = styled.div`
    text-align: center;
    font-size: 12px;
    line-height: 24px;
    margin-top: 60px;
    margin-bottom: .5rem;
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
    const [valid, setFormValidation] = useState(false);

    const checkForm = () => {
        setFormValidation(true);
    }

    return (
        <Wrapper {...props}>
            <PageIcon>
                <CardIcon />
            </PageIcon>
            <StyledHeading>Woah, slow down there cowboy!</StyledHeading>
            <StyledSubHeading className="align-center">We’re gonna need to see some payment info</StyledSubHeading>
            <PaymentForm formValidation={valid} />
            <Pretext>selected coverage</Pretext>
            <Card selected>
                <Logo>Logo</Logo>
                <Image><Stars /></Image>
                <PricePerMonth>$120<span>/mo</span></PricePerMonth>
                <PricePerYear>$1400 per year</PricePerYear>
            </Card>
            <StyledButton secondary onSubmit={e => checkForm()} className={valid ? '' : 'disabled'}>Complete Purchase</StyledButton>
        </Wrapper>
    )
}

export default Payment
