import './App.css';

// components
import Counter from './components/Counter'
import Sample from './components/Sample'
import SampleSaga from './components/SampleSaga'

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      {/* <Sample></Sample> */}
      <SampleSaga></SampleSaga>
    </div>
  );
}

export default App;
