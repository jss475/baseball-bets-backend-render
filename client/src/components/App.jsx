import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import User from './User'

function App() {
  const [isLoggedin, setLoggedin] = useState(false)

  useEffect(() => { 
    
    const checkLogin = async () => {
      let req = await fetch('/loggedin')
      setLoggedin(req.ok)
    }
     
    checkLogin()

  }, [])

  const handleLogin = (val) => setLoggedin(val)

  return (
    <div className="App">
      <Header isLoggedin={isLoggedin} handleLogin={handleLogin}/>
      <Switch>
        <Route exact path='/'>
          Welcome to Baseball Bets
        </Route>
        <Route exact path='/about'>
          about
        </Route>
        <Route exact path='/login'>
          <Login handleLogin={handleLogin}/>
        </Route>
        <Route exact path='/signup'>
          <Signup handleLogin={handleLogin}/>
        </Route>
        <Route exact path='/user/:id'>
          <User />
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
