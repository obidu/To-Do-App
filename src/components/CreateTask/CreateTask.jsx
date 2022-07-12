import React from "react";
import './CreateTask.css'
import { useState } from "react";
import Card from "../Card/Card";
import { useRef } from "react";
import { Context } from "../../context/context";
import TaskList from "../TaskList/TaskList";

const CreateTask = ({ title, description }) => {

    const { cards, setCards, setHide } = Context()


    // const [addCard, setAddCard] = useState([
    //     {
    //         title: 'React Chapter 1',
    //         description: 'npx create-react-app'
    //     }
    // ]);

    const titleRef = useRef('');
    const descriptionRef = useRef('');

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setAddCard({
    //         ...addCard,
    //         [name]: value,
    //     });
    //     // console.log(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempObj = { title: null, description: null };
        tempObj.title = titleRef.current.value;
        tempObj.description = descriptionRef.current.value;
        setCards([...cards, tempObj])
        e.target.reset();
        setHide(false);
    }


    return (
        <div>


            <form className="task-creator-container" onSubmit={handleSubmit}>
                <div className="title-container">
                    <label htmlFor="title">Title</label>
                    <input type='text' ref={titleRef} name='title' required={true} placeholder=" ex: React day 1" /*value={addCard.title}*/ ></input>
                </div>

                <div className="description-container">
                    <label htmlFor="description">Description</label>
                    <input type='text' ref={descriptionRef} name='description' required={true} placeholder="ex: Learn 'npx create-react-app' " ></input>
                </div>

                <div className="submit-btn">
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </div>
    )

}

export default CreateTask;