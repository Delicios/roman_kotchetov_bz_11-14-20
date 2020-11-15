import React from 'react';
import styled from 'styled-components';
import List from '../../atoms/List';

const StyledList = styled(List)`
  display: grid;
  grid-template-columns: 1fr;
`;

const FeatureList = ({ ...props }) => (
    <div {...props}>
        <StyledList default>
            <li>
                Answer a few simple questions about your business
            </li>
            <li>
                Browse through specially curated quotes
            </li>
            <li>
                Select your quote-of-choice and receive your policy instantly
            </li>
        </StyledList>
    </div>
)

export default FeatureList;
