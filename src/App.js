import React, {useEffect} from "react"
import './App.css'
import {
  Route,
  Switch,
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from './redux/index'
import Home from './components/home/Home'
import Favorites from './components/favorites/Favorites'
import Details  from './components/details/Details'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const bookData = useSelector(state => state);
  const dispatch = useDispatch();
  const url = 'https://www.googleapis.com/books/v1/volumes?q=subject:Detective&key=AIzaSyDuIPd1eaJXwmOZXm_UDsz4GL6S88VdBYk';

  useEffect(() => {
      dispatch(fetchBooks(url));
  }, [dispatch]);

  return (
        <div className="App">
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route path='/'
             exact render={(props) => <Home {...props} bookData={bookData}/>}
            />
            <Route path='/favorites' exact component = {Favorites} />
            <Route path='/details/:id' exact component = {Details}/>
          </Switch>
          <footer>
            <Footer />
          </footer>
        </div>
  );
};

export default App;
