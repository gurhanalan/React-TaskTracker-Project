import React, { useState } from "react";
import { TaskDate, TaskTitle, TaskWrapper } from "./task.style";

import { FaTimes, FaTrashAlt } from "react-icons/fa";

function Task({ item }) {
    const [isDone, setIsDone] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    return (
        <TaskWrapper
            onClick={() => setIsDone(!isDone)}
            status={isDone}
            closed={isClosed}
        >
            <TaskTitle>
                {item.task}{" "}
                <span>
                    {" "}
                    <FaTrashAlt />
                    <FaTimes onClick={() => setIsClosed(!isClosed)} />{" "}
                </span>
            </TaskTitle>
            <TaskDate>{item.date}</TaskDate>
        </TaskWrapper>
    );
}

export default Task;
