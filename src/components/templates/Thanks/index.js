import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import PageIcon from '../../molecules/PageIcon';
import { ReactComponent as CardIcon } from '../../atoms/Icon/icons/card.svg';

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
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    margin: 0;
    margin-bottom: 55px;
    
    @media screen and (max-width: 640px) {
        font-size: 20px;
        line-height: 23px;
    }
`;

const StyledButton = styled(Button)`
    height: 50px;
    width: 312px;
    margin-top: 4.375rem;
    margin-bottom: 3.75rem;
`;

const Thanks = ({ ...props }) => {
    return (
        <Wrapper {...props}>
            <PageIcon>
                <CardIcon />
            </PageIcon>
            <StyledHeading>That worked!</StyledHeading>
            <StyledSubHeading className="align-center">Your payment was successful, and your policy documents are on their way to their new home - your inbox!</StyledSubHeading>
            <StyledButton secondary>DOWNLOAD POLICY DOCS</StyledButton>
        </Wrapper>
    )
}

export default Thanks
