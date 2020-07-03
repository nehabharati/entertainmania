import React from 'react'
import Home from './components/Home'
import Movies from './components/Movies'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movies' exact component={Movies} />
          <Route path='/movieDetails' exact component={MovieDetails} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
