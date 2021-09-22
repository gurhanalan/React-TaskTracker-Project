import styled, { css } from "styled-components";
import { colors } from "../header/Header.style";

export const TaskDate = styled.p`
    font-size: 1.5rem;
    color: black;
    /* width: 35rem; */
`;

export const TaskTitle = styled(TaskDate)`
    color: black;
    font-weight: bolder;
    letter-spacing: 1px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0rem 0 1rem;
    span {
        display: flex;
        gap: 1rem;

        & > * {
            color: gray;
            cursor: pointer;

            &:last-child {
                color: red;
            }
        }
    }
`;

export const TaskWrapper = styled.div`
    background-color: ${colors.color1};
    padding: 1rem 2rem;
    width: 40rem;
    border-radius: 0.5rem;
    box-shadow: 0 2rem 2rem hsla(0, 0%, 0%, 0.3);
    cursor: pointer;
    user-select: none;
    ${(props) =>
        props.status &&
        css`
            border-left: solid 0.5rem red;
            background-color: ${colors.color3};
            text-decoration: line-through solid red;
            text-decoration-thickness: 20%;
        `}
`;
