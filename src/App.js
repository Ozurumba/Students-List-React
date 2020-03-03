import React from 'react';
import './App.css';
import Obinna from './obinna'

const arr = [
  {name: 'Opeyemi', address: 'interswitch'},
  {name: 'Oluwaseyi', address: 'ibadan'},
  {name: 'Damilola', address: 'lagos'},
  {name: 'Ibrahim', address: 'abuja'},
  {name: 'Tobi', address: 'benin'},
  {name: 'Bethel', address: 'ondo'},
  {name: 'Gwachukwu', address: 'imo'},
  {name: 'Henry', address: 'delta'},
  {name: 'Kolade', address: 'osun'},
  {name: 'Osaze', address: 'rivers'},
  {name: 'Jelili', address: 'kogi'},
  {name: 'Simon', address: 'cross-river'},
  {name: 'Jason', address: 'calabar'},
  {name: 'Ayo', address: 'oyo'},
  {name: 'Damola', address: 'surulere'},
  {name: 'Firstus', address: 'portharcourt'},
  {name: 'Tolani', address: 'lekki'},
  {name: 'Tosin', address: 'badgri'},
  {name: 'Chinwe', address: 'oshodi'},
  {name: 'Olumide', address: 'maitama'},
  {name: 'Temitope', address: 'ajao'},
  {name: 'Jeremiah', address: 'radisson'},
  {name: 'Joseph', address: 'vi'},
  {name: 'Pureheart', address: 'ojuelebga'},
  {name: 'Tochukwu', address: 'gbagada'},
  {name: 'Nnamdi', address: 'ikoyi'}
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Obinna is a great man
        </h1>
        {
          arr.map(_arr=>{
            return(
            <Obinna name={_arr.name} address={_arr.address} />
          )})
        }
        
      </header>
    </div>
  );
}

export default App;
