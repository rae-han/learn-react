import ColorBox from './components/ColorBox'
import SelectColor from './components/SelectColors'
import { ColorProvider } from './contexts/color'

function App() {
  return (
    <div className="App">
      <ColorProvider>
        <SelectColor />
        <ColorBox />
      </ColorProvider>
    </div>
  );
}

export default App;
