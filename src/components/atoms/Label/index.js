import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    font-size: 1.5rem;
    display: block;
    font-weight: bolder;
    margin-bottom: 1.25rem;
`;

const Label = ({ ...props }) => <StyledLabel {...props}/>

export default Label;
