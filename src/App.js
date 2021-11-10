import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from './Rating'

function App() {
  return (
    <div className="App">
     
      <h1>Rating</h1>
      
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>
  );
}

export default App;
