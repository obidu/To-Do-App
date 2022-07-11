import React from "react";
import './Modal.css';
import { useState } from "react";


const Modal = (props) => {

    return (
        <div className="modal-container">
            <p>Are you sure you want to delete this task?</p>
            <div className="modal-buttons">
                <button onClick={props.onClick}>Cancel</button>
                <button onClick={props.onDelete}>Delete</button>
            </div>
        </div>



    )
}

export default Modal;