import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import BrandBadge from '../../molecules/BrandBadge';
import PageIcon from '../../molecules/PageIcon';
import FeatureList from '../../organisms/FeatureList';
import { ReactComponent as UmbrellaIcon } from '../../atoms/Icon/icons/umbrella.svg';
import theme from '../../../theme.js';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    // convert this to display grid and size the elements by percent
`;

const StyledHeading = styled(Heading)`
    text-align: center;
    font-weight: bold;
    font-size: 44px;
    line-height: 52px;
    margin-bottom: 3.75rem;

    @media screen and (max-width: 640px) {
        font-size: 40px;
        line-height: 47px;
    }
`;

const StyledButton = styled(Button)`
    height: 50px;
    width: 312px;
    margin-top: 3rem;
    margin-bottom: 1rem;

    &:hover, &:focus, &:active {
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
    }

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 640px) {
        margin-top: 4.375rem;
        margin-bottom: 3.75rem;
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