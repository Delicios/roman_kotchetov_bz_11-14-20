import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GettingStarted from '../../templates/GettingStarted';
import Checkout from '../../templates/Checkout';
import Payment from '../../templates/Payment';
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

    useEffect(() => {
        if (view === 'start') {
            setView('start');
        }
        if (view === 'checkout') {
            setView('checkout');
        }
        if (view === 'payment') {
            setView('payment');
        }
    }, [view]);

    return (
        <>
            <Modal>
                {/* <Modal onClose={()=>{console.log('Modal Closed')}} closeable isOpen>
                <GettingStarted />
                </Modal> */}
                { view === 'start' &&
                    <>
                        <h2>Getting Started</h2>
                        <GettingStarted view={setView} />
                    </>
                }
                { view === 'checkout' &&
                    <>
                        <h2>Checkout</h2>
                        <Checkout view={setView} />
                    </>
                }
                { view === 'payment' &&
                    <>
                        <h2>Payment</h2>
                        <Payment view={setView}/>
                    </>
                }
            </Modal>
            <button onClick={() => setView('start')}>Getting Started</button>
            <button onClick={() => setView('checkout')}>Checkout</button>
            <button onClick={() => setView('payment')}>Payment</button>
        </>
    )
}

export default Page