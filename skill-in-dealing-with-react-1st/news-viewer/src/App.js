// import { useState, useCallback } from "react";
import { Route } from 'react-router-dom'
// import Categories from './components/Categories'
// import NewsList from './components/NewsList'
import NewsPage from './pages/NewsPage'


const App = () => {
  // const [category, setCategory] = useState('all');

  // const onSelect = useCallback(category => {
  //   setCategory(category)
  //   console.log(category)
  // }, []);

  return (
    <div className="App">
      <Route path="/:category?" component={NewsPage} />
      {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} /> */}
    </div>
  );
}

export default App;
