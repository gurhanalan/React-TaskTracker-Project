import React from "react";
import { ButtonHeader, Title, Wrapper } from "./Header.style";

function Header() {
    return (
        <div>
            <Wrapper>
                <Title>Task Tracker</Title>
                <ButtonHeader>Hide Task Bar</ButtonHeader>
            </Wrapper>
        </div>
    );
}

export default Header;
