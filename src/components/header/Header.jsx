import React from "react";
import { ButtonHeader, Title, Wrapper } from "./Header.style";

function Header() {
    return (
        <Wrapper>
            <Title>Task Tracker</Title>
            <ButtonHeader>Hide Task Bar</ButtonHeader>
        </Wrapper>
    );
}

export default Header;
