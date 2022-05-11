import { Route } from 'react-router-dom'
import CounterContainer from './containers/CounterContainer'
import PostsContainer from './containers/PostListContainer'

import PostListPage from './pages/PostListPage'
import PostPage from './pages/PostPage'

const App = () => {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <PostsContainer />
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </div>
  );
}

export default App;