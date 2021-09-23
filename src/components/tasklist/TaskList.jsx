import React from "react";
import { Wrapper } from "../header/Header.style";
import Task from "./Task";

function TaskList({ taskArray, toggleIsDone }) {
    return (
        <Wrapper>
            {taskArray.filter((item) => !item.isDone).length === 0
                ? "No task to show"
                : taskArray.map(
                      (item) =>
                          !item.isDone && (
                              <Task
                                  key={item.id}
                                  item={item}
                                  toggleIsDone={toggleIsDone}
                              />
                          )
                  )}
        </Wrapper>
    );
}

export default TaskList;
