import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import { ReactComponent as UmbrellaIcon } from '../../atoms/Icon/icons/umbrella.svg';
import { ReactComponent as CloseIcon } from '../../atoms/Icon/icons/close.svg';
import theme from '../../../theme';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background: ${theme.color.grayFour};
    box-shadow: 0 25px 50px rgba(0,0,0,0.2);
    border-radius: 10px;
    height: 100%;
    max-height: calc(100vh - 20%);
    width: calc(100vw - 20px);
    max-width: 768px;
    padding: 25px;
    overflow: hidden;
    overflow-y: scroll;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }

    @media screen and (max-width: 600px) {
        height: 100vh;
        max-height: 100vh;
        border-radius: 0;
        width: 100vw;
    }
`;

const StyledIcon = styled(Icon)`
    height: 26px;
    width: 26px;
    color: ${theme.color.primary};
    position: absolute;
    left: 0;
    top: 0;
`;

const StyledButton = styled(Button)`
    height: 36px;
    width: 36px;
    line-height: 36px;
    color: ${theme.color.grayOne};
    fill: ${theme.color.grayOne};
    background: ${theme.color.grayFour};
    box-shadow: none;
    border-radius: 50%;

    &:hover, &:focus, &:active {
        background-color: ${theme.color.secondary};
    }

    &:focus {
        outline: none;
    }
`;

const StyledCloseIcon = styled(CloseIcon)`
    fill: ${theme.color.grayOne};
`;

const Header = styled.div`
    display: flex;
    align-items: flex-start;
    height: 36px;

    > *:first-child {
        flex: 1;
    }
`;

const StyledHeading = styled.div`
    position: relative;
    color: ${theme.color.primary};
    font-size: .9rem;
    padding-left: 40px;
    line-height: 36px;
`;

const Container = styled.div`
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    overflow-y: scroll;
    padding: 0 20px;

    @media screen and (min-width: 600px) {
        padding: 0 50px;
    }

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
`;

const Modal = ({...props}) => {
    const { title, view, children } = props;

    return (
        <>
        { title !== 'close' &&
            <Wrapper>
                <Header>
                    <StyledHeading>
                        {title !== 'start' &&
                        <>
                            <StyledIcon>
                                <UmbrellaIcon />
                            </StyledIcon>
                            Umbrella Hub
                        </>
                        }
                        </StyledHeading>
                    <StyledButton onClick={() => view('close')}><StyledCloseIcon /></StyledButton>
                    </Header>
                <Container>
                    {children}
                </Container>
            </Wrapper>
            }
        </>
    )
}

export default Modal;