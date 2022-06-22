import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function User ({ handleLogin }) {
  const [user, setUser] = useState({})
  const history = useHistory()

  console.log(user)

  useEffect(() => {

    //console.log("it's happening")

    const validateUser = async () => {

      let req = await fetch('/validate_user') 

      if (req.ok) {

        setUser(await req.json())

      } else {

        handleLogin(false)
        history.push('/login')

      }
    }

    validateUser() 
    
  }, [handleLogin, history])
  
  
  const{ name, money, winnings } = user 

  return (
    <div>
      
      <h3>Hello {name}</h3>
      <p>{`You have: ${money} dollars`}</p> 
      <p>{`You've won: ${winnings} dollars`}</p>
    </div>
  )
}
