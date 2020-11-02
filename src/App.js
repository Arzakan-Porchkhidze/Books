import './App.css'
import { Provider } from 'react-redux'
import Home from './components/home/home'
import Favorites from './components/favorites/favorites'
import store from './redux/store'
import Navbar from './components/navbar'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Home />
        <Favorites />
      </div>
    </Provider>
  );
};

export default App;
