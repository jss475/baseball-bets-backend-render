import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function User () {
  const [user, setUser] = useState({})
  const history = useHistory()

  useEffect(() => {

    const validateUser = async () => {

      let req = await fetch('/validate_user') 
      req.ok ? setUser(await req.json()) : history.push('/')

    }

    validateUser() 
    
  }, [history])
  
  
  const{ name, money, winnings } = user 

  return (
    <div>
      <h3>Hello {name}</h3>
      <p>{`You have: ${money} dollars`}</p> 
      <p>{`You've won: ${winnings} dollars`}</p>
    </div>
  )
}
