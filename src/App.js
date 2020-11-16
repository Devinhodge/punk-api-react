
import React, {Component} from 'react';
import './App.css';
import Beerslist from './components/Beerslist'

class App extends Component {
 render () { 
  return (
    <div className="Beers">    
    <Beerslist />
    </div>
  );
}
}

export default App;