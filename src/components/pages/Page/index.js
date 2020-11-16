import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import Modal from '../../molecules/Modal';
import GettingStarted from '../../templates/GettingStarted';
import Checkout from '../../templates/Checkout';
import Payment from '../../templates/Payment';
import theme from '../../../theme.js';

const Page = (...props) => {
    const [view, setView] = useState('start');
    const [modal, setModal] = useState(true);

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
            <Modal title={view}>
                { view === 'start' &&
                    <GettingStarted view={setView} />
                }
                { view === 'checkout' &&
                    <Checkout view={setView} />
                }
                { view === 'payment' &&
                    <Payment view={setView}/>
                }
            </Modal>
            <button onClick={() => setView('start')}>Getting Started</button>
            <button onClick={() => setView('checkout')}>Checkout</button>
            <button onClick={() => setView('payment')}>Payment</button>
        </>
    )
}

export default Page