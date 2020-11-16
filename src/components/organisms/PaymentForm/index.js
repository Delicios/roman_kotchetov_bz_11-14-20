import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import Icon from '../../atoms/Icon';
import { ReactComponent as CheckIcon } from '../../atoms/Icon/icons/check.svg';
import theme from '../../../theme';

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

const InputContainer = styled.div`
    position: relative;
`;

const StyledInput = styled(Input)`
    margin-bottom: .5rem;
`;

const StyledIcon = styled(Icon)`
    color: ${theme.color.secondaryDarker};
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
    transition: ease .2s opacity;

    &.valid {
        opacity: 1;
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

    // Need proper validation/formating library
    const filter = (str, type) => {
        const filteredString = str.split('').filter(Number).join('');
        
        // Needs card type validation
        if (type === 'number') {
            setCardNumber(filteredString.slice(0, 20));
        }
        
        // Needs proper i18n character filter
        if (type === 'name') {
            setCardName(str.replace(/[^A-Za-z -,.]+/g, ''));
        }
        
        // Needs proper Month/Year formatter
        if (type === 'date') {
            let filteredString = str.slice(0, 5);
            if(filteredString.length === 2) {
                filteredString = `${filteredString}/`;
            }
            setCardDate(filteredString);
        }
        
        // Needs card type validation
        if (type === 'CVV') {
            setCardCVV(filteredString.slice(0, 4));
        }
    }

    // Wow so cringe
    if (cardNumber && cardName && cardDate && cardCVV &&
        !cardNumberError && !cardNameError && !cardDateError && !cardCVVError) {
        valid(true);
    } else {
        valid(false)
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
                <InputContainer>
                    <StyledInput
                        type="text"
                        autocomplete="off" 
                        value={cardNumber}
                        onChange={e => filter(e.target.value, 'number')}
                        onBlur={() => validateNumber()}
                    />
                    <StyledIcon className={cardNumber.length >= 13 ? 'valid' : ''}><CheckIcon /></StyledIcon>
                </InputContainer>
                <Error className={cardNumberError && cardNumber.length < 13 ? 'invalid': ''}>Umm, yeah. We're gonna need this.</Error>
            </div>
            <div>
                <Label>Cardholder Name</Label>
                <InputContainer>
                    <StyledInput
                        type="text"
                        placeholder="First Last"
                        value={cardName}
                        onChange={e => filter(e.target.value, 'name')}
                        onBlur={() => validateName()}
                    />
                    <StyledIcon className={cardName.length >= 3 ? 'valid' : ''}><CheckIcon /></StyledIcon>
                </InputContainer>
                <Error className={cardNameError && cardName.length < 3 ? 'invalid' : ''}>Umm, yeah. We're gonna need this.</Error>
            </div>
            <CardSpecs>
                <div>
                    <Label>Expiry Date</Label>
                    <InputContainer>
                        <StyledInput
                            type="text"
                            placeholder="MM/YY"
                            value={cardDate}
                            onChange={e => filter(e.target.value, 'date')}
                            onBlur={() => validateDate()}
                        />
                        <StyledIcon className={cardDate.length === 5 ? 'valid' : ''}><CheckIcon /></StyledIcon>
                    </InputContainer>
                    <Error className={cardDateError && cardDate.length < 5 ? 'invalid' : ''}>Umm, yeah. We're gonna need this.</Error>
                </div>
                <div>
                    <Label>CCV</Label>
                    <InputContainer>
                        <StyledInput
                            type="text"
                            placeholder="CVV"
                            value={cardCVV}
                            onChange={e => filter(e.target.value, 'CVV')}
                            onBlur={() => validateCVV()}
                        />
                        <StyledIcon className={cardCVV.length >= 3 ? 'valid' : ''}><CheckIcon /></StyledIcon>
                    </InputContainer>
                    <Error className={cardCVVError && cardCVV.length < 3 ? 'invalid' : ''}>Umm, yeah. We're gonna need this.</Error>
                </div>
            </CardSpecs>
        </>
    )
}

export default PaymentForm;
