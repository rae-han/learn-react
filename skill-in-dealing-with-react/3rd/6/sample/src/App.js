import react, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [number, setNumber] = useState([1, 2, 3])

  const addItem = () => setNumber(number.concat(number[number.length-1]+1));
  // const deleteItem = id => setNumber(number.filter(item => item!==id));
  const deleteItem = id => {
    console.log(id)
    setNumber(number.filter(item => item!==id))
  };
  
  const list = number.map(item => <li onClick={() => deleteItem(item)} key={item}>{item}</li>)

  return (
    <div className="App">
      <button onClick={addItem}>+</button>
      <ul>{list}</ul>
    </div>
  );
}

export default App;
