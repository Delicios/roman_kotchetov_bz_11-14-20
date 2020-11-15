import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import theme from '../../../theme.js';

const StyledIcon = styled(Icon)`
    margin: 0 auto;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    padding: 20px;
    background: ${theme.color.primaryLighter};
    color: ${theme.color.primary};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    margin-bottom: 45px;
`;

const PageIcon = ({ ...props }) => {
    const { children } = props;
    return (
        <StyledIcon>
            {children}
        </StyledIcon>
    )
}

export default PageIcon;