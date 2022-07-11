import React from "react";
import './Card.css'
import { useState } from 'react';
import Modal from "../Modal/Modal";
import Backdrop from "../Backdrop/Backdrop";

const Card = ({ title, description }) => {

    const [deleteBtn, setDeleteBtn] = useState(false);

    const deleteHandler = () => {
        setDeleteBtn(true);
    }

    const closeModalHandler = () => {
        setDeleteBtn(false);
    }

    const deleteCard = () => {
        alert('Delete Clicked!')
    }

    return (
        <div className="tasksCard">
            <div className="titleAndBtn">
                <p className="card-title">{title}</p>
                <button className="closeBtn" onClick={deleteHandler}>X</button>
            </div>
            <li className="card-description">{description}</li>
            {deleteBtn && <Backdrop onClick={closeModalHandler} />}
            {deleteBtn && <Modal onClick={closeModalHandler} onDelete={deleteCard} />}
        </div>

    )
};

export default Card;