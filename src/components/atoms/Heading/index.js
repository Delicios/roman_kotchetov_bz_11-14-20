import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';

const StyledHeading = styled.h1`
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${theme.color.grayOne};
`;

const Heading = ({ ...props }) => <StyledHeading {...props} />;

export default Heading;
