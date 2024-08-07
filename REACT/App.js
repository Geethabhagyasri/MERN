/*import logo from './skillsimg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
/*
import React,{component}from 'react';
class App extends React.Component{
  render(){
    return(
      <div>
      <First/>
      <Second/>
      </div>
      );
  }
}

class First extends React.Component{
  render(){
    return(
    <div>
    <h1>HELLOO</h1>
    </div>
    );
  }
}
class Second  extends React.Component{
  render(){
    return(
    <div>
    <h2>A demo for REACT</h2>
    <p>learns INHERITANCE</p>
    </div>
    );
  }
}
export default App;
*/
/*
import image from './skillsimg.png';
import vid from'./vid.mp4';
import aud from './audio.mp3';
import React,{component}from 'react';
class Fruits extends React.Component{
  render(){
    return(
<div className='geetha'>
  <Apple/>
  <Banana/>
  <Pine/>
  <Grapes/>
</div>
      );
  }
}
class Apple extends React.Component{
  render(){
    return(
    <div>
    <img src={image} className="App-image"width="300" height="300"/>
    </div>
    );
  }
}

class Banana extends React.Component{
  render(){
    return(
    <div>
    <video src={vid} controls className="App-video"width="300" height="300"/>
    </div>
    );
  }
}

class Pine extends React.Component{
  render(){
    return(
    <div>
    <audio src={aud} controls className="App-audio" width="300" height="300"/>
    </div>
    );
  }
}

class Grapes extends React.Component{
  render(){
    return(
    <div>
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
      <button>Submit</button>
    </form>
    </div>
    );
  }
}

export default Fruits;
*/

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

//used to contain data or information about the component. The state in a component can change over time. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It can be set by using the setState() method and calling setState() method triggers UI updates. To set an initial state before any interaction occurs, we need to use the getInitialState() method.To define a state, you have to first declare a default set of values for defining the component's initial state. To do this, add a class constructor which assigns an initial state using this.state. The 'this.state' property can be rendered inside render() method.
/*
import React from 'react';  
class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: true };  
      }  
      render() {  
          const mango = this.state.myinfo ? (  
              <div>  
                  <p><h3>used to contain data or information about the component. The state in a component can change over time. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It can be set by using the setState() method and calling setState() method triggers UI updates. To set an initial state before any interaction occurs, we need to use the getInitialState() method.To define a state, you have to first declare a default set of values for defining the component's initial state. To do this, add a class constructor which assigns an initial state using this.state. The 'this.state' property can be rendered inside render() method.</h3></p>   
            </div>  
              ) : null;  
              return (  
                  <div>  
                      <h1> Welcome to Mango city </h1>  
                      { mango }   
                  </div>  
              );  
     }  
}  
export default App; 
*/

/*
import Meenakshi from 'react';  
class App extends Meenakshi.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: false };  
      //console.log('Component this', this);  
      this.togglemyBio = this.togglemyBio.bind(this);  
      }  
      togglemyBio(){  
          this.setState({myinfo: !this.state.myinfo});  
          }  
      render() {  
          return (  
              <div>  
                  <form>
                  <h2>login</h2>
      <label>Enter your name:
        <input type="text" />
      </label>
      <button>LOGIN</button>
    </form>
                  {  
                      this.state.myinfo ? (   
                          <div>  
                             
<form>
<h2>Register form</h2>
      <label>Enter your name:
        <input type="text" />
      </label>
      <button>REGISTER</button>
    </form>

                              <button onClick={this.togglemyBio}> Show Less </button>  
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.togglemyBio}> Read More </button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default App;   
*/

/*
import React from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
            <h1> Mangos are imported from { this.props.name } </h1>    
            <p> <h4> Welcome to Mango city </h4> </p>          
          </div>  
      );  
   }  
}  
export default App;  
*/

/*
import React from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
              <h1>Thats the property </h1>  
            <h3>Welcome to {this.props.name}</h3>   
            <p>Mango city are guntur or salem?</p>          
          </div>  
        );  
    }  
}  
App.defaultProps = {  
   name: "Salem"  
}  
export default App;
*/

/*
import React from 'react';  
class App extends React.Component {  
  constructor() {  
      super();  
      this.state = {age:''};  //''for representing empty field
       this.Change12 = this.handleChange.bind(this);  
    this.Submit12 = this.handleSubmit.bind(this);  
  }  
  handleChange(event) {  
      this.setState({age: event.target.value});  
  }  
  handleSubmit(event) {  
      alert('You have submitted the input successfullys: ' + this.state.age);  
      //event.preventDefault();  
  }  
  render() {  
      return (  
          <form onSubmit={this.Submit12}>  
            <h1>Chalapathi staff control forms</h1>  
            <label>  
                Name:  
                <input type="number" value={this.state.age} onChange={this.Change12} />  
            </label>  
            <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}  
export default App;
*/

const fruitList = ['Apple', 'Bananas', 'Grapes', 'Pineapple'];   
const listItems = fruitList.map((myList)=>{   
    return <li>{myList}</li>;   
});   
   
const root = Balaji.createRoot(document.getElementById('root'));
root.render(<ol type="I"> {listItems} </ol>);