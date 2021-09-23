import "./App.css";
import React, { useState } from "react";

import Header from "./components/header/Header";
import InputList from "./components/inputlist/InputList";
import { WrapperMain } from "./components/main-wrapper/WrapperMain";
import TaskList from "./components/tasklist/TaskList";

const taskArray = [
    {
        id: "1",
        task: "Study React",
        date: "Feb 5th at 2:30pm",
        isDone: false,
    },
    {
        id: "2",
        task: "Study Javascript",
        date: "Feb 5th at 6:30pm",
        isDone: false,
    },
];

function App() {
    // Hooks
    const [tasks, setTasks] = useState(taskArray);
    const [showInputField, setShowInputField] = useState(true);

    // Functions
    const addTask = (newTask) => setTasks([...tasks, newTask]);
    const toggleInputDisplay = () => setShowInputField(!showInputField);

    const toggleIsDone = (idtarget) => {
        setTasks(
            tasks.map((task) =>
                task.id === idtarget ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    return (
        <div className="App">
            <WrapperMain>
                <Header
                    toggleInputDisplay={toggleInputDisplay}
                    showInputField={showInputField}
                />
                <InputList addTask={addTask} showInputField={showInputField} />
                <TaskList taskArray={tasks} toggleIsDone={toggleIsDone} />
            </WrapperMain>
        </div>
    );
}

export default App;
