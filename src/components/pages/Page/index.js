import React, { useState, useEffect } from 'react';
import Modal from '../../molecules/Modal';
import GettingStarted from '../../templates/GettingStarted';
import Checkout from '../../templates/Checkout';
import Payment from '../../templates/Payment';
import Thanks from '../../templates/Thanks';

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
        if (view === 'thanks') {
            setView('thanks');
        }
    }, [view]);

    return (
        <>
            <Modal title={view} view={setView}>
                { view === 'start' &&
                    <GettingStarted view={setView} />
                }
                { view === 'checkout' &&
                    <Checkout view={setView} />
                }
                { view === 'payment' &&
                    <Payment view={setView}/>
                }
                { view === 'thanks' &&
                    <Thanks view={setView}/>
                }
                { view === 'close' &&
                    <></>
                }
            </Modal>
            <button onClick={() => setView('start')}>Getting Started</button>
            <button onClick={() => setView('checkout')}>Checkout</button>
            <button onClick={() => setView('payment')}>Payment</button>
            <button onClick={() => setView('thanks')}>Thanks</button>
        </>
    )
}

export default Page