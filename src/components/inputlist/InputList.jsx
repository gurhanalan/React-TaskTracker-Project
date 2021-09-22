import React, { useState } from "react";
import { ButtonHeader, Wrapper } from "../header/Header.style";
import Input from "./Input";

function InputList({ addTask }) {
    const [taskNew, setTaskNew] = useState("");
    const [date, setDate] = useState("");

    const handleTaskNewChange = (newText) => setTaskNew(newText);
    const handleDateChange = (newText) => setDate(newText);
    const handleSubmit = () => {
        if (!taskNew || !date) {
            alert("Please fill both fields");
            return;
        }
        const id = Date.now();
        const task = {
            id: id,
            task: taskNew,
            date: date,
            isDone: false,
        };
        setTaskNew("");
        setDate("");
        addTask(task);
    };
    return (
        <Wrapper>
            <Input
                label="Task"
                placeholder="Enter a task"
                change={handleTaskNewChange}
                value={taskNew}
            />
            <Input
                label="Date and Time"
                placeholder="Feb 5th at 2:30pm"
                change={handleDateChange}
                value={date}
            />
            <ButtonHeader onClick={handleSubmit}>Add Task</ButtonHeader>
            {/* {console.log(taskNew, date)} */}
        </Wrapper>
    );
}

export default InputList;
