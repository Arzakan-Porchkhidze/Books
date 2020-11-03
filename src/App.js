import React, {useEffect} from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from './redux/index'
import Home from './components/home/home'
import Favorites from './components/favorites/favorites'
import Navbar from './components/navbar'

function App() {
  const bookData = useSelector(state => state);
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

  return (
    <Router>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route path='/'
             exact render={(props) => <Home {...props} bookData={bookData}/>}
            />
            <Route path='/favorites' exact component = {Favorites} />
          </Switch>
        </div>
    </Router>
  );
};

export default App;
