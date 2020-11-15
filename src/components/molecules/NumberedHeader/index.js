import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Badge from '../../atoms/Badge';
import Heading from '../../atoms/Heading';

const StyledHeading = styled(Heading)`
    font-weight: bold;
    font-size: 32.7901px;
    line-height: 38px;
    @media screen and (max-width: 640px) {
        font-size: 24px;
        line-height: 28px;
    }
`;

const Wrapper = styled.div`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 60px 1fr;
    margin-bottom: 2.5rem;
`;

const NumberedHeader = ({ ...props }) => {
    const { title, step } = props;
    return (
        <Wrapper>
            <Badge palette="primary">{step}</Badge>
            <StyledHeading>{title}</StyledHeading>
        </Wrapper>
    )
}

NumberedHeader.propTypes = {
    step: PropTypes.number,
    title: PropTypes.string,
}

export default NumberedHeader