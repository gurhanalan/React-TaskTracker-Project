import React, { useState } from "react";
import { TaskDate, TaskTitle, TaskWrapper } from "./task.style";

import { FaTimes, FaTrashAlt, FaThumbsUp } from "react-icons/fa";

function Task({ item, toggleIsDone }) {
    const [isDone, setIsDone] = useState(false);

    return (
        <TaskWrapper onClick={() => setIsDone(!isDone)} status={isDone}>
            <TaskTitle>
                {item.task}{" "}
                <span>
                    {" "}
                    <FaTimes onClick={() => toggleIsDone(item.id)} />{" "}
                </span>
            </TaskTitle>
            <TaskDate>{item.date}</TaskDate>
        </TaskWrapper>
    );
}

export default Task;
