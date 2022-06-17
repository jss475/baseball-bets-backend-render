import { useReducer } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'

const reducer = (user, action) => {
  switch(action.type) {
    case 'login/signup':
      return action.payload.user
    case 'logout':
      return {}
    default:
      return user
  }
}

function App() {
  const [user, dispatch] = useReducer(reducer, {})

  return (
    <div className="App">
      <Header hasUser={ Object.keys(user).length !== 0 }/>
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
          <Signup />
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
