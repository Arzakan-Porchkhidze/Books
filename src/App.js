import './App.css'
import Home from './components/home/home'
import { Provider } from 'react-redux'
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
      </div>
    </Provider>
  );
};

export default App;
