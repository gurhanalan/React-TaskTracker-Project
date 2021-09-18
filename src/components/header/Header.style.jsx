import styled from "styled-components";

const colors = {
    color1: "#33B864",
    color1dark: "#677A04",
    color2: "#FFE5AD",
};

export const Title = styled.h1`
    font-size: 4rem;
    color: ${colors.color1};
    display: inline-block;
    margin: 0 auto;

    transition: all 0.3s;
    &:hover {
        color: ${colors.color1dark};
    }
`;

export const ButtonHeader = styled.button`
    font-size: 2rem;
    color: ${colors.color1};
    display: inline-block;
    border: none;
    background-color: ${colors.color2};
    padding: 1rem 2rem;
    margin: 0 auto;
    border-radius: 0.5rem;
    cursor: pointer;

    transition: all 0.3s;
    &:hover {
        color: ${colors.color1dark};
    }
`;

export const Wrapper = styled.div`
    padding: 2rem 0;
    display: flex;
    gap: 2rem;
    align-items: center;
    flex-direction: ${(props) => (props.row ? "row" : "column")};
    /* flex-direction: column; */
`;
