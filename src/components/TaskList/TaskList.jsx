import React from "react";
import './TaskList.css';
import { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import CreateTask from "../CreateTask/CreateTask";
import List from "../List/List";
import { Context } from "../../context/context";

// import { Ctx } from "../../context/context";

// const context = useContext(Ctx)
// ca sa fie folosit trebuia scris context.setCards


const TaskList = () => {
    const { cards, hide, setHide} = Context()

    const addTaskHandler = (e) => {
        // console.log('add task');
        setHide(true);
    };

    const closeModalHandler = () => {
        setHide(false);
    }

    return (
        <div className="task-container">
            <div className="task-create-btn">
                <h1 >Tasks for today</h1>
                <button onClick={addTaskHandler}>+  Add Task</button>
            </div>
            <div className="tasks">
                {cards && <List />}
                {hide && <CreateTask />}
                {hide && <Backdrop onClick={closeModalHandler} />}
            </div>
        </div >
    )
}

export default TaskList;