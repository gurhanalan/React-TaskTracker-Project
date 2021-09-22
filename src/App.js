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
    const [tasks, setTasks] = useState(taskArray);

    const addTask = (newTask) => setTasks([...tasks, newTask]);
    return (
        <div className="App">
            <WrapperMain>
                <Header />
                <InputList addTask={addTask}/>
                <TaskList taskArray={tasks} />
            </WrapperMain>
        </div>
    );
}

export default App;
