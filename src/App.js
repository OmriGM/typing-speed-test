import React from 'react';
import logo from './logo.svg';
import Word from './Components/Word/Word'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Word text={ 'hello' }/>
        <Word text={ 'hello' }/>
        <Word text={ 'hello' }/>
        <Word text={ 'hello' }/>
        <Word text={ 'hello' }/>
      </header>
    </div>
  );
}

export default App;
