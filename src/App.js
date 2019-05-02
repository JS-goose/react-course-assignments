import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation';
import Char from './components/Char';

class App extends Component {
  state = {
    length: null,
    wordContent: [],
  };

  handleInputChange = (event) => {
    const wordLength = event.target.value.length;
    this.setState({
      length: wordLength,
      wordContent: [...event.target.value],
    });
  };

  removeItem = (index) => {
    const text = [...this.state.wordContent];
    text.splice(index, 1);
    const updatedText = [...text];
    this.setState({wordContent: updatedText,});
  }

  render() {
    const chars = (
      <div>
        {this.state.wordContent.map((item,index) => (
          <Char key={index} index={index} wordContent={this.state.wordContent} clicked={()=>this.removeItem(index)}/>
        ))}
      </div>
    );

    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener which outputs the length
            of the entered text below it (e.g. in a paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or "Text long enough"
            depending on the text length (e.g. take 5 as a minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an inline box (=> display:
            inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a different letter of
            the entered text (in the initial input field) as a prop.
          </li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <div>
          <label htmlFor="input">Enter something </label>
          <input onChange={this.handleInputChange} id="input" />
          <p>Word length: {this.state.length}</p>
        </div>

        <Validation length={this.state.length} />
        {chars}
      </div>
    );
  }
}

export default App;
