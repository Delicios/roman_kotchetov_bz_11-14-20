import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NumberedHeader from '../../molecules/NumberedHeader';
import OptionItem from '../../molecules/OptionItem';
import Input from '../../atoms/Input';
import CheckoutFooter from '../../molecules/CheckoutFooter';
import { ReactComponent as BriefcaseIcon } from '../../atoms/Icon/icons/briefcase.svg';
import { ReactComponent as CloudIcon } from '../../atoms/Icon/icons/cloud-rain.svg';
import { ReactComponent as PackageIcon } from '../../atoms/Icon/icons/package.svg';
import { ReactComponent as WifiIcon } from '../../atoms/Icon/icons/wifi.svg';

const Wrapper = styled.div`
    display: grid;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 40px;
`;

const Label = styled.label`
    cursor: pointer;
    display: grid;

    input {
        opacity: 0;
        position: absolute;
    }
`;

const Container = styled.div`
    @media screen and (min-width: 680px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 25px; 
    }
`;

const Checkout = ({...props}) => {
    const { view } = props;
    const [selectedOption, setSelectedOption] = useState('');
    const [valid, setFormValidation] = useState(false);

    useEffect(() => {
        if (selectedOption) {
            setFormValidation(true);
        }
    }, [selectedOption]);

    // Could be DRYrer
    return (
        <>
            <Wrapper>
                <NumberedHeader
                    title="What type of insurance are you looking for?" step={1} />
                <Container>
                <Label>
                    <input
                        type="radio"
                        name="insurance"
                        value="Professional"
                        onChange={() => setSelectedOption("Professional")}
                    />
                    <OptionItem
                        title="Professional Liability"
                        description="Erros & Omissions (E&O insurance)"
                        className={selectedOption === 'Professional' ? 'selected' : ''}
                    >
                        <BriefcaseIcon />
                    </OptionItem>
                </Label>
                <Label>
                    <input
                        type="radio"
                        name="insurance"
                        value="General"
                        onChange={() => setSelectedOption("General")}
                    />
                    <OptionItem
                        title="General Liability"
                        description="Help mitigate against loss (CGL insurance)"
                        className={selectedOption === 'General' ? 'selected' : ''}
                    >
                        <CloudIcon />
                    </OptionItem>
                </Label>
                <Label>
                    <input
                        type="radio"
                        name="insurance"
                        value="Business"
                        onChange={() => setSelectedOption("Business")}
                    />
                    <OptionItem
                        title="Business Owner’s Policy"
                        description="The complete package (BOP)"
                        className={selectedOption === 'Business' ? 'selected' : ''}
                    >
                        <PackageIcon />
                    </OptionItem>
                </Label>
                <Label>
                    <input
                        type="radio"
                        name="insurance"
                        value="Cyber"
                        onChange={() => setSelectedOption("Cyber")}
                    />
                    <OptionItem
                        title="Cyber"
                        description="Internet-bsed risks (CLIC)"
                        className={selectedOption === 'Cyber' ? 'selected' : ''}
                    >
                        <WifiIcon />
                    </OptionItem>
                </Label>
                </Container>
            </Wrapper>
            <Wrapper className="faded">
                <NumberedHeader
                    title="What’s the name of your business?" step={2} />
                <div>
                    <Input
                        type="text"
                        placeholder="Business Name"
                        value=""
                        onChange={() => console.log('stop complaining')}
                    />
                </div>
            </Wrapper>
            <CheckoutFooter step={"1/7"} view={view} validation={valid}/>
        </>
    )
}

export default Checkout