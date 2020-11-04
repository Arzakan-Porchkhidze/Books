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
import Details  from './components/details/details'
import Navbar from './components/navbar'

function App() {
  const bookData = useSelector(state => state);
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

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
            <Route path='/details/:id' exact render={(props) => <Details {...props} />}/>
          </Switch>
        </div>
    </Router>
  );
};

export default App;
