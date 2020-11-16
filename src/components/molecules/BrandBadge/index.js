import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import { ReactComponent as ZapIcon } from '../../atoms/Icon/icons/zap.svg';
import theme from '../../../theme';

const StyledIcon = styled(Icon)`
    color: ${theme.color.grayTwo};
    height: 20px;
    width: 20px;
    transform: translate(0px, 5px);
`
const StyledBadge = styled.div`
    font-size: .9rem;
    line-height: 1.5rem;
    padding: 0.1em 0.3em;
    text-align: center;
    color: ${theme.color.grayTwo};
`

const BrandBadge = ({ ...props }) => {
    return (
        <StyledBadge {...props}>
            <StyledIcon><ZapIcon /></StyledIcon> Powered by Briza
        </StyledBadge>
    )
}

export default BrandBadge
