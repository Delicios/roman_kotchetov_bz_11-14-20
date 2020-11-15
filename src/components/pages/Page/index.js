import React, { useState } from 'react';
// import { Modal, GettingStarted } from 'components'
import styled from 'styled-components';
import GettingStarted from '../../templates/GettingStarted';
import theme from '../../../theme.js';

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 25px;
    background: ${theme.color.grayFour};


    padding: 20px;
    max-width: 500px;
`;

const Page = (...props) => {
    const [view, template] = useState('start');

    function setView(view) {
        if (view === 'start') {
            template('start');
        }
        if (view === 'checkout-one') {
            template('checkout-one');
        }
        if (view === '') {
            template('');
        }
    }

    return (
        <Modal>
            {/* <Modal onClose={()=>{console.log('Modal Closed')}} closeable isOpen>
            <GettingStarted />
            </Modal> */}
            { view === 'start' &&
                <>
                    <h2>Getting Started</h2>
                    <GettingStarted />
                </>
            }
            { view === 'checkoutOne' &&
                <>
                    <h2>Other View</h2>
                </>
            }
            <button onClick={() => setView('start')} >Home Page</button>
            <button onClick={() => setView('checkout-one')} >A Other Page</button>
            <button onClick={() => setView('')} >Unset Page</button>
        </Modal>
    )
}

export default Page