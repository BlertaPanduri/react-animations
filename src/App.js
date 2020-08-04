import React, { Component } from 'react';
import './App.css';
import List from "./components/List/List.js";
import Modal from "./components/Modal/Modal.js";
import Backdrop from "./components/Backdrop/Backdrop.js";


class App extends Component {
  state={
    modalIsOpen:false
  }
  showModal = () => {
    this.setState({modalIsOpen:true})
  }
  closeModal = () => {
    this.setState({modalIsOpen:false})
  }
  render(){

  return (
    <div className="App">
      <h1>React Animation</h1>
      <Modal show = {this.state.modalIsOpen} closed ={this.closeModal}/>
      <Backdrop show = {this.state.modalIsOpen}/>
      <button className="Button" onClick={this.showModal}> Open Modal </button>
        <h3> Animating List</h3>
        <List/>

    </div>
  );
  }

}

export default App;
