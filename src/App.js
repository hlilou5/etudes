import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './comp/contact'

class App extends Component {
  state={
    index:x,
  	contacts:[  	  
  	  {prenom: 'mohamed', nom: 'hlilou', telephone:'94960816', adresse:'megrine' },
  	  {prenom: 'khawla', nom: 'belguith', telephone:'25804224', adresse:'sidi rzigue' },
  	  {prenom: 'ahmed', nom: 'ben nejma', telephone:'99873613', adresse:'rades' }
  	  ]
  }
  add = () =>{
    this.setState({index:1})
  }
  render() {
    return (
      <div className="App">
      <button onClick={this.add}>add</button>
      <div>
      	<Contact prenom={this.state.contacts[{x}].prenom}
                 nom={this.state.contacts[{x}].nom} 
      	 		     telephone={this.state.contacts[{x}].telephone} 
      	 		     adresse={this.state.contacts[{x}].adresse}/>
      </div>
      </div>
    );
  }
}

export default App;