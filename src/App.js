import './App.css'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/home/home'
import Favorites from './components/favorites/favorites'
import store from './redux/store'
import Navbar from './components/navbar'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route path='/' exact component = {Home} />
            <Route path='/favorites' exact component = {Favorites} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
