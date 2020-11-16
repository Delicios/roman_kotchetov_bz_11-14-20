import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';

const StyledInput = styled(Input)`
    margin-bottom: .5rem;
`;

const Error = styled.div`
    color: red;
    font-size: 12px;
    line-height: 21px;
    margin-bottom: 1rem;
    visibility: hidden;
    opacity: 0;
    transition: ease .2s opacity, ease .2s visibility;

    &.invalid {
        opacity: 1;
        visibility: visible
    }
`;

const CardSpecs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
`;


const PaymentForm = ({ ...props }) => {
    const { formValidation } = props;
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    
    const [cardNumberError, setCardNumberError] = useState('');
    const [cardNameError, setCardNameError] = useState('');
    const [cardDateError, setCardDateError] = useState('');
    const [cardCVVError, setCardCVVError] = useState('');

    const [valid, setValidation] = useState(formValidation);

    if (!cardNumberError && !cardNameError && !cardDateError && !cardCVVError) {
        console.log('sure');
        // formValidation(true);
    }

    // Needs proper validation/formating library
    const filter = (str, type) => {
        const filteredString = str.split('').filter(Number).join('');
        
        if (type === 'number') {
            setCardNumber(filteredString.slice(0, 20));
        }
        
        if (type === 'name') {
            setCardName(str.replace(/[^A-Za-z -,.]+/g, ''));
        }
        
        if (type === 'date') {
            setCardDate(filteredString.slice(0, 4));
        }
        
        if (type === 'CVV') {
            setCardCVV(filteredString.slice(0, 3));
        }
    }

    const validateNumber = () => cardNumber ? setCardNumberError(false) : setCardNumberError(true);
    const validateName = () => cardName ? setCardNameError(false) : setCardNameError(true);
    const validateDate = () => cardDate ? setCardDateError(false) : setCardDateError(true);
    const validateCVV = () => cardCVV ? setCardCVVError(false) : setCardCVVError(true);

    // Could be DRYer
    return (
        <>
            <div>
                <Label>Credit Card Number</Label>
                <StyledInput
                    type="text"
                    autocomplete="off" 
                    value={cardNumber}
                    onChange={e => filter(e.target.value, 'number')}
                    onBlur={() => validateNumber()}
                />
                <Error className={cardNumberError ? 'invalid': ''}>Umm, yeah. We're gonna need this.</Error>
            </div>
            <div>
                <Label>Cardholder Name</Label>
                <StyledInput
                    type="text"
                    placeholder="First Last"
                    value={cardName}
                    onChange={e => filter(e.target.value, 'name')}
                    onBlur={() => validateName()}
                />
                <Error className={cardNameError ? 'invalid' : ''}>Umm, yeah. We're gonna need this.</Error>
            </div>
            <CardSpecs>
                <div>
                    <Label>Expiry Date</Label>
                    <StyledInput
                        type="text"
                        placeholder="MM/YY"
                        value={cardDate}
                        onChange={e => filter(e.target.value, 'date')}
                        onBlur={() => validateDate()}
                    />
                    <Error className={cardDateError ? 'invalid' : ''}>Umm, yeah. We're gonna need this.</Error>
                </div>
                <div>
                    <Label>CCV</Label>
                    <StyledInput
                        type="text"
                        placeholder="CVV"
                        value={cardCVV}
                        onChange={e => filter(e.target.value, 'CVV')}
                        onBlur={() => validateCVV()}
                    />
                    <Error className={cardCVVError ? 'invalid' : ''}>Umm, yeah. We're gonna need this.</Error>
                </div>
            </CardSpecs>
        </>
    )
}

export default PaymentForm;
