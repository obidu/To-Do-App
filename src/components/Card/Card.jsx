import React from "react";
import './Card.css'
import { useState } from 'react';
import Modal from "../Modal/Modal";
import Backdrop from "../Backdrop/Backdrop";
import { Context } from "../../context/context";


const Card = ({ title, description, sterge }) => {

    const { cards, setCards } = Context()

    const [deleteBtn, setDeleteBtn] = useState(false);

    const deleteHandler = () => {
        setDeleteBtn(true);
    }

    const deleteCard = (title) => {
        setCards(cards.filter((obj) => obj.title !== title))
    }

    const closeModalHandler = () => {
        setDeleteBtn(false);
    }

    return (
        <div className="tasksCard">
            <div className="titleAndBtn">
                <p className="card-title">{title}</p>
                <button className="closeBtn" onClick={deleteHandler}>X</button>
            </div>
            <div className="card-description">{`-${description}`}</div>
            {deleteBtn && <Backdrop onClick={closeModalHandler} />}
            {deleteBtn && <Modal onClick={closeModalHandler} onDelete={() => deleteCard(title) } />}
        </div>

    )
};

export default Card;