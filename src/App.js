import React, { Component } from 'react';
import './App.css';
import Valid from './Valid/Valid';
import Charstyle from './Charstyle/Charstyle';

class App extends Component {
  state={
    username : 'ShikhaOjha'
  }

  deletionHandler = (index) => {
     const text=this.state.username.split('');
     text.splice(index,1);
     const newusername=text.join('');
     this.setState  ({username:newusername});
  }

  inputChangedHandler = (event) => {
     this.setState({username:event.target.value});
  }
  render() {
    const Characterlist= this.state.username.split('').map((ch, index)  => {
      return <Charstyle 
      character = {ch} 
      key={index}
      click ={()=>this.deletionHandler(index)}/>;
});
//Since array of strings are not considered as arrays in jsx so split() is
//used to convert it into a array of characters
//also key is very important with help of that only if we want to do
//anything with a particular list element we can do that easily say we want
// to delete a particular of it

    return (
      <div className="App">
        /*<ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (= ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=CharComponent) and style it as an inline box (= display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>*/
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr/>
        <hr/>
        <input type="text" 
        onChange={this.inputChangedHandler} 
        value={this.state.username}/>
        <p>{this.state.username}</p>
        <Valid inputlen = {this.state.username.length}/>
        {Characterlist}
      </div>
    );
  }
}

export default App;
