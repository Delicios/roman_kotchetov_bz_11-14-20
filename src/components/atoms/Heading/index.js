import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
    margin: 0;
    margin-top: 0.85714em;
    margin-bottom: 0.57142em;
    color: #333; // color dark gray
`;

const Heading = ({ ...props }) => <StyledHeading {...props} />;

export default Heading;
