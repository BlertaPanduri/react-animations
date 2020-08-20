import React from 'react';
import Transition from 'react-transition-group/Transition';
import classes from './Modal.module.css';



const Modal = props =>(
    

<Transition in={props.show}  timeout={400} mountOnEnter unmountOnExit>
    {state => {
const cssClasses =[
        classes.Modal,
        state === "entering" ? classes.ModalIsOpen : state === "exiting" ? classes.ModalClosed : null
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
}
    </Transition> 
    
    
     
)
export default Modal;
