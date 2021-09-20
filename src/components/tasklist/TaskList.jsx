import React from "react";
import { Wrapper } from "../header/Header.style";
import Task from "./Task";

function TaskList({ taskArray }) {
    return (
        <Wrapper>
            {taskArray.map((item) => (
                <Task key={item.id} item={item} />
            ))}
        </Wrapper>
    );
}

export default TaskList;
