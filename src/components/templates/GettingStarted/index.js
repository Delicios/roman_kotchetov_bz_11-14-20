import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import BrandBadge from '../../molecules/BrandBadge';
import PageIcon from '../../molecules/PageIcon';
import FeatureList from '../../organisms/FeatureList';
import { ReactComponent as UmbrellaIcon } from '../../atoms/Icon/icons/umbrella.svg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 30px; 
`;

const StyledHeading = styled(Heading)`
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 4vh;
    
    @media screen and (min-width: 640px) {
        font-size: 44px;
        line-height: 52px;
    }
`;

const StyledButton = styled(Button)`
    height: 50px;
    width: 312px;
    margin-top: 5vh;
    margin-bottom: 3vh;

    &:hover, &:focus, &:active {
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
    }

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 640px) {
        width: 100%;
    }
`;

const GettingStarted = ({...props}) => {
    const { view } = props;
    return (
        <Wrapper>
            <PageIcon><UmbrellaIcon /></PageIcon>
            <StyledHeading>So what gives?</StyledHeading>
            <FeatureList />
            <StyledButton secondary onClick={() => view('checkout')}>GET STARTED</StyledButton>
            <BrandBadge></BrandBadge>
        </Wrapper>
    )
}

export default GettingStarted