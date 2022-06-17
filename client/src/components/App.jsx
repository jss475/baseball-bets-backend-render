import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          Welcome to Baseball Bets
        </Route>
        <Route exact path='/about'>
          about
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          signup
        </Route>
        <Route exact path='/user'>
          welcome user
        </Route>
        <Route exact path='/players'>
          wow, such players 
        </Route>
        <Route exact path='/players/:id'>
          hey here's a player sick
        </Route>
        <Route exact path='/bets'>
          oh so many bets
        </Route>
      </Switch>
    </div>
  );
}

export default App;
