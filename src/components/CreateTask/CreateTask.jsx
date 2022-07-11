import React from "react";
import './CreateTask.css'
import { useState } from "react";
import Card from "../Card/Card";
import { render } from "@testing-library/react";

const CreateTask = ({ title, description }) => {

    const cardTexts = {
        title: '',
        description: '',
        // cardNumber: index  //numarul fiecarui card tinut minte, pt a putea fi sters cel dorit
    }

    const [addCard, setAddCard] = useState(cardTexts);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddCard({
            ...addCard,
            [name]: value,
        });
        // console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(addCard.title)
        render(<Card title={addCard.title} description={addCard.description} />)
    };


    return (
        <div>
            <form className="task-creator-container" onSubmit={handleSubmit}>
                <div className="title-container">
                    <label htmlFor="title">Title</label>
                    <input type='text' onChange={handleChange} name='title' placeholder=" eg: React day 1" value={addCard.title} ></input>
                </div>

                <div className="description-container">
                    <label htmlFor="description">Description</label>
                    <input type='text' onChange={handleChange} name='description' placeholder="eg: Learn 'npx create-react-app' " value={addCard.description} ></input>
                </div>

                <div className="submit-btn">
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </div>
    )

}

export default CreateTask;