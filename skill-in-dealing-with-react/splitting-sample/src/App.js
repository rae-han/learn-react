import React, { Component, useState, Suspense } from 'react'
import logo from './logo.svg';
import './App.css'
// import notify from './notify';
import loadable from '@loadable/component'

// const SplitMe = React.lazy(() => import('./components/SplitMe'));
const SplitMe = loadable(() => import('./components/SplitMe'), {
  fallback: <div>Loading... Loading... Loading... Loading... Loading... Loading... Loading... Loading...</div>
})

function App() {
  const [visible, setvisible] = useState(false);

  // const onClick = () => {
  //   // notify();
  //   import('./notify').then(result => {
  //     console.log(result);
  //     result.default();
  //   })
  // }

  const onClick = () => {
    setvisible(!visible)
  }

  const onMouseOver = () => {
    SplitMe.preload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!!!!</p>
        {/* <Suspense fallback={<div>Loading... Loading... Loading... Loading... Loading... Loading... Loading... Loading...</div>}> 
          { visible && <SplitMe/> }
        </Suspense> */}
        { visible && <SplitMe/> }
      </header>
    </div>
  );
}

// class App extends Component {
//   state = {
//     SplitMe: null
//   };

//   handleClick = async () => {
//     const loadedModule = await import('./components/SplitMe');
//     this.setState({
//       SplitMe: loadedModule.default
//     });
//   };

//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}>Hello React!</p>
//           { SplitMe && <SplitMe /> }
//         </header>
//       </div>
//     )
//   }
// }

export default App;
