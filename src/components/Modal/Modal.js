import React from 'react';
import  './Modal.module.css';


const Modal = props =>{
    const cssClasses =["Modal",props.show ? "ModalOpen":"ModalClosed"]
    return(
    <div className={cssClasses.join(" ")}>
        <h1> Modal </h1>
        <button onClick={props.closed}>
            Cancel
        </button>
    </div>
    )
}
export default Modal;
