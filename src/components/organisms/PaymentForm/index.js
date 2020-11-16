import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';

const StyledLabel = styled.label`
    font-size: 1.5rem;
    display: block;
    font-weight: bolder;
    margin-bottom: 1.25rem;
`;

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

const PaymentForm = ({ ...props }) => {
    const { valid } = props;
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    
    const [cardNumberError, setCardNumberError] = useState('');
    const [cardNameError, setCardNameError] = useState('');
    const [cardDateError, setCardDateError] = useState('');
    const [cardCVVError, setCardCVVError] = useState('');

    // Needs proper validation/formating library
    const validate = (str, type) => {
        console.log(str);
        const filteredString = str.split('').filter(Number).join('');
        
        if (type === 'number') {
            setCardNumber(filteredString.slice(0, 20));
        }
        
        if (type === 'name') {
            setCardName(str.replace(/[^A-Za-z -,.]+/g, ''));
            setCardNameError(cardName ? false : true);
        }
        
        if (type === 'date') {
            setCardDate(filteredString.slice(0, 4));
            setCardDateError(cardDate ? false : true);
        }
        
        if (type === 'CVV') {
            setCardCVV(filteredString.slice(0, 3));
            setCardCVVError(cardCVV ? false : true);
        }
    }

    const validateNumber = () => cardNumber ? setCardNumberError(false): setCardNumberError(true);
    const validateName = () => cardName ? setCardNameError(false): setCardNameError(true);
    const validateDate = () => cardDate ? setCardDateError(false): setCardDateError(true);
    const validateCVV = () => cardCVV ? setCardCVVError(false): setCardCVVError(true);

    return (
        <>
            <div>
                <StyledLabel>Credit Card Number</StyledLabel>
                <StyledInput
                    type="text"
                    autocomplete="off" 
                    value={cardNumber}
                    onChange={e => validate(e.target.value, 'number')}
                    onBlur={e => validateNumber()}
                />
                <Error className={cardNumberError ? 'invalid': ''}>Umm, yeah. We're gonna need this.</Error>
            </div>
            <div>
                <StyledLabel>Cardholder Name</StyledLabel>
                <StyledInput
                    type="text"
                    placeholder="First Last"
                    value={cardName}
                    onChange={e => validate(e.target.value, 'name')}
                    onBlur={e => validateName()}
                />
                <Error className={cardNameError ? 'invalid' : ''}>Umm, yeah. We're gonna need this.</Error>
            </div>
            <div className="card-specs">
                <div>
                    <StyledLabel>Expiry Date</StyledLabel>
                    <StyledInput
                        type="text"
                        placeholder="MM/YY"
                        value={cardDate}
                        onChange={e => validate(e.target.value, 'date')}
                        onBlur={e => validateDate()}
                    />
                    <Error className={cardDateError ? 'invalid' : ''}>Umm, yeah. We're gonna need this.</Error>
                </div>
                <div>
                    <StyledLabel>CCV</StyledLabel>
                    <StyledInput
                        type="text"
                        placeholder="CVV"
                        value={cardCVV}
                        onChange={e => validate(e.target.value, 'CVV')}
                        onBlur={e => validateCVV()}
                    />
                    <Error className={cardCVVError ? 'invalid' : ''}>Umm, yeah. We're gonna need this.</Error>
                </div>
            </div>
        </>
    )
}

export default PaymentForm;
