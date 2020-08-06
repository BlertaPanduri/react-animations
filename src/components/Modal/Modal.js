import React from 'react';
import classes from './Modal.module.css';



const Modal = props =>{
    const cssClasses =[
        classes.Modal,
        props.show === "entering" ? classes.ModalIsOpen : props.show === "exiting" ? classes.ModalClosed : null
    ]
        
    return(

    <div className={cssClasses.join(" ")}>   

        <h1> Modal </h1>
        <button className="Button" onClick={props.closed}>
            Cancel
        </button>
    </div>
    )
}
export default Modal;
