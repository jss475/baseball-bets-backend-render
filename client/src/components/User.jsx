import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export default function User () {
  const [user, setUser] = useState({})
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {

    const getUser = async () => {
      let req = await fetch(`/users/${id}`) 

      console.log(req.ok)

      if (req.ok) {
        let res = await req.json() 
        setUser(res)
      }
      
      else {
        history.push('/home')
      }
    }

    getUser() 
    
  }, [history, id])
  
  

  return (
    <div>
      <p>Hello {user.name}</p>
      <p>{id}</p>
    </div>
  )
}
