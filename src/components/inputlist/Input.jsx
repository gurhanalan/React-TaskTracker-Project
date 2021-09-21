import React from "react";
import { LabelInput, InputText, InputWrapper } from "./input.style";

function Input({ label, placeholder, change, value }) {
    return (
        <InputWrapper>
            <LabelInput>{label}</LabelInput>
            <InputText
                onChange={(e) => {
                    change(e.target.value);
                }}
                placeholder={placeholder}
                type="text"
                value={value}
            ></InputText>
        </InputWrapper>
    );
}

export default Input;
