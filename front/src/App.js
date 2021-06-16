import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {FormGroup,Label,Input} from "reactstrap";
import {Redirect} from 'react-router-dom';
import save from './components/save.js;'




class App extends Component {
  state={
    redirect:false
  }

  setRedirect=()=>{
    this.setState({
      redirect:true
    })
  }
  renderRedirect=()=>{
    if (this.state.redirect){
      return <Redirect to='/save' />
    } 
  }
  render(){
    return (
    <div className="App">
      <FormGroup>
                  <Label for="title">name</Label>
                  <Input
                    type="text"
                    name="title"
                    
                    placeholder="Enter Todo Title"
                  />
                </FormGroup>
      address<input type="text"></input><br></br>
      phoneno<input type="number"></input><br></br>
      {this.renderRedirect}
      <button onClick={this.setRedirect}>save</button>

    </div>
  );
}
}

export default App;
