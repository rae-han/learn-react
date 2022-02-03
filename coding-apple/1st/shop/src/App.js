import './App.css';

import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import List from './layouts/List'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Jumbotron></Jumbotron>
      <List></List>
    </div>
  );
}

export default App;
