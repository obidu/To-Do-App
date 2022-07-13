import React from "react";
import './Modal.css';
import { useState } from "react";
import { Context } from "../../context/context";


const Modal = (props) => {

    const { cards, setCards } = Context()

    const deleteCard = (title) => {
        setCards(cards.filter((obj) => obj.title !== title))
    }

    return (
        <div className="modal-main">
        <div className="modal-container">
            <p>Are you sure you want to delete this task?</p>
            <div className="modal-buttons">
                <button onClick={props.onClick}>Cancel</button>
                <button onClick={props.onDelete}>Delete</button>
            </div>
        </div>
        </div>



    )
}

export default Modal;