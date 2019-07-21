import React from 'react';
import './App.css';
import Validation from './Validation/ValidationComponent';
import CharComponent from './Helper/CharComponent';
 
class App extends React.Component{
  state = {
     word: '',           
     length: 0         
  }   
  checkLengthHandler = (event)=> {    
    const newWord = event.target.value;
    console.log(newWord.length);
    this.setState({word : newWord});    
    this.setState({length : newWord.length});    
  }

  deleteCharHandler = (index) => {
    console.log("this is the delete handler ", index);
    let wordToChars = this.state.word.split('');
   console.log("first wordToChars", wordToChars);
    wordToChars.splice(index,1);
    const newWord = wordToChars.join('');
    this.setState({word: newWord});
    this.setState({length:  newWord.length})
  
  }
  render () { 
  
    return (
    <div className="App">
        <input type="text" onChange= {(event) => this.checkLengthHandler(event)}  
           value={this.state.word}/>   
        <p>{this.state.length}</p> 
        <Validation 
          length={this.state.length}
         /> 
         {this.state.word.split('').map((l, index) => {
           return <CharComponent 
             key={index} 
             letter={l}
             index = {index}  
             click = {() => this.deleteCharHandler(index)}            
             />
             })}            
     </div>
   );
  }

  }
export default App;
