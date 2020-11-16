import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import theme from '../../../theme';

const StyledIcon = styled(Icon)`
    display: grid;
    align-items: center;
    justify-content: center;
    margin: auto;
    color: ${theme.color.primary};
`;

const StyledHeading = styled(Heading)`
    font-size: 17.0345px;
    line-height: 20px;
    margin-bottom: 5px;
    margin-top: 0;
`;

const StyledParagraph = styled(Paragraph)`
    font-size: 12px;
    line-height: 14px;
    margin: 0;
`;

const TextWrapper = styled.div``;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 70px 1fr;
    box-sizing: border-box;
    padding: 1.5625rem 1.25rem;
    padding-left: 0;
    background-color: ${theme.color.grayFive};
    border: 1px solid ${theme.color.grayTwo};
    box-sizing: border-box;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-bottom: 1.25rem;
    transition: ease .2s box-shadow, ease .2s border-color;

    &.selected {
        border-color: ${theme.color.primary};
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), inset 0 0 0 1px ${theme.color.primary};
    }
`;

const OptionItem = ({ ...props }) => {
    const { title, description } = props;
    return (
        <Wrapper {...props}>
            <StyledIcon {...props} />
            <TextWrapper>
                <StyledHeading>{title}</StyledHeading>
                <StyledParagraph>{description}</StyledParagraph>
            </TextWrapper>
        </Wrapper>
    )
}

OptionItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default OptionItem