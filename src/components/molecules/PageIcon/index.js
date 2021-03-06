import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import theme from '../../../theme';

const StyledIcon = styled(Icon)`
    margin: 0 auto;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    padding: 20px;
    background: ${theme.color.primaryLighter};
    color: ${theme.color.primary};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    margin-top: 30px;
    margin-bottom: 35px;

     @media screen and (max-width: 640px) {
        margin-top: 20px;
        margin-bottom: 15px;
     }
`;

const PageIcon = ({ ...props }) => <StyledIcon {...props} />;

export default PageIcon;