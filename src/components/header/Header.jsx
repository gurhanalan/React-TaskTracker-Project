import React from "react";
import { ButtonHeader, Title, Wrapper } from "./Header.style";
import { colors } from "./Header.style";

function Header({ toggleInputDisplay, showInputField }) {
    return (
        <Wrapper>
            <Title>Task Tracker</Title>
            <ButtonHeader
                onClick={toggleInputDisplay}
                style={{
                    backgroundColor: `${
                        showInputField ? colors.color2 : colors.color3
                    }`,
                }}
            >
                {showInputField ? "Hide Task Bar" : "Show Task Bar"}
            </ButtonHeader>
        </Wrapper>
    );
}

export default Header;
