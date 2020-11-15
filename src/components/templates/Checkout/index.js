import React, { Component, useState } from 'react';
import styled from 'styled-components';
import NumberedHeader from '../../molecules/NumberedHeader';
import OptionItem from '../../molecules/OptionItem';
import CheckoutFooter from '../../molecules/CheckoutFooter';
import { ReactComponent as BriefcaseIcon } from '../../atoms/Icon/icons/briefcase.svg';
import { ReactComponent as CloudIcon } from '../../atoms/Icon/icons/cloud-rain.svg';
import { ReactComponent as PackageIcon } from '../../atoms/Icon/icons/package.svg';
import { ReactComponent as WifiIcon } from '../../atoms/Icon/icons/wifi.svg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 4rem;
`;

const Label = styled.label`
    cursor: pointer;

    input {
        opacity: 0;
        position: absolute;
    }
`;

class Checkout extends Component {
    constructor() {
        super();
        this.state = {
            name: "Type"
        };
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e) {
        this.setState({
            selectedOption: e.target.value
        });
        console.log(e.target.value);
    }

    render() {
        return (
            <>
                <Wrapper>
                    <NumberedHeader title="What type of insurance are you looking for?" step={1} />
                    <Label>
                        <input
                            type="radio"
                            value="Professional"
                            checked={this.state.selectedOption === "Professional"}
                            onChange={this.onValueChange}
                        />
                        <OptionItem title="Professional Liability" description="Erros & Omissions (E&O insurance)" >
                            <BriefcaseIcon />
                        </OptionItem>
                    </Label>
                    <Label>
                        <input
                            type="radio"
                            value="General"
                            checked={this.state.selectedOption === "General"}
                            onChange={this.onValueChange}
                        />
                        <OptionItem title="General Liability" description="Help mitigate against loss (CGL insurance)" >
                            <CloudIcon />
                        </OptionItem>
                    </Label>
                    <Label>
                        <input
                            type="radio"
                            value="Business"
                            checked={this.state.selectedOption === "Business"}
                            onChange={this.onValueChange}
                        />
                        <OptionItem title="Business Owner’s Policy" description="The complete package (BOP)" >
                            <PackageIcon />
                        </OptionItem>
                    </Label>
                    <Label>
                        <input
                            type="radio"
                            value="Cyber"
                            checked={this.state.selectedOption === "Cyber"}
                            onChange={this.onValueChange}
                        />
                        <OptionItem title="Cyber" description="Internet-bsed risks (CLIC)" >
                            <WifiIcon />
                        </OptionItem>
                    </Label>
                </Wrapper>
                <CheckoutFooter step={"1/7"} />
            </>
        )
    }
}

export default Checkout