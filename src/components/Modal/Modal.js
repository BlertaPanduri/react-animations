import React from 'react';
import classes from './Modal.module.css';


const Modal = props =>{
   // const cssClasses =["Modal",props.show ? "ModalOpen":"ModalClosed"]
    return(

    <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>

        <h1> Modal </h1>
        <button onClick={props.closed}>
            Cancel
        </button>
    </div>
    )
}
export default Modal;
