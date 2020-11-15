import React, { useState } from 'react';
import styled from 'styled-components';
import GettingStarted from '../../templates/GettingStarted';
import Checkout from '../../templates/Checkout';
import theme from '../../../theme.js';

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 25px;
    background: ${theme.color.grayFour};
    

    padding: 20px;
    max-width: 500px;
    position: relative;
    min-height: 
`;

const Page = (...props) => {
    const [view, setView] = useState('start');

    function changeView(view) {
        if (view === 'start') {
            setView('start');
        }
        if (view === 'checkout-one') {
            setView('checkout-one');
        }
    }

    return (
        <>
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
                { view === 'checkout-one' &&
                    <>
                        <h2>Other View</h2>
                        <Checkout />
                    </>
                }
            </Modal>
            <button onClick={() => changeView('start')} >Getting Started</button>
            <button onClick={() => changeView('checkout-one')} >Checkout Page </button>
        </>
    )
}

export default Page