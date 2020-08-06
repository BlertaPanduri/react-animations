import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition'

import './App.css';
import List from "./components/List/List.js";
import Modal from "./components/Modal/Modal.js";
import Backdrop from "./components/Backdrop/Backdrop.js";


class App extends Component {
  state={
    modalIsOpen:false,
    showBlock: false
  }
  showModal = () => {
    this.setState({modalIsOpen:true})
  }
  closeModal = () => {
    this.setState({modalIsOpen:false})
  }
  render(){
   const animationTiming = {
     enter: 400,
     exit: 4000
   }
  return (
    <div className="App">
      <h1>React Animation</h1>
      <button  className = "Button" onClick = { () => 
                this.setState(prevState => ({showBlock : !prevState.showBlock}))
      }> Toggle
       </button>
       <br/>
      <Transition
       in={this.state.showBlock}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit> 
           {state => (
         <div 
           style={{
               backgroundColor: 'red',
               width: 100,
               height: 100,
               margin: 'auto',
               transition: 'opacity 1s ease-out',
               opacity: state === "exiting" ? 0 : 1
           }}
           />
           )}
        </Transition>



        <Transition
        in={this.state.modalIsOpen} 
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit>
          {state => (
            <Modal show={state} closed ={this.closeModal}/>
          )}

        </Transition>

    
        {this.state.modalIsOpen ? <Backdrop show = {this.state.modalIsOpen}  /> : null }
      <button className="Button" onClick={this.showModal}> Open Modal </button>
        <h3> Animating List</h3>
        <List/>

    </div>
  );
  }

}

export default App;
