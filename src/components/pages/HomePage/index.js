import React from 'react';
// import { Modal, GettingStarted } from 'components'
import styled from 'styled-components';
import GettingStarted from '../../templates/GettingStarted';

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 25px;
    background: #f9f9f9;; //color light gray

    max-width: 450px;
`;

const HomePage = () => {
    return (
        <Modal>
            {/* <Modal onClose={()=>{console.log('Modal Closed')}} closeable isOpen>
            <GettingStarted />
            </Modal> */}
            <GettingStarted />
        </Modal>
    )
}

export default HomePage