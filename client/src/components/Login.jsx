import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Login ({ handleLogin }) {

  const [error, setError] = useState('')

  let history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    let form = new FormData(document.querySelector('#login-form')) 

    let req = await fetch('/login', {
      method: 'POST',
      body: form
    })

    if (req.ok) {
      handleLogin(true)
      setError('')
      history.push('/user')

    } else {
      let err = await req.json()
      setError(err.error)
    }
  }

  return (
    <>
    {error.length > 0 ? <p>{error}</p> : null}
      <Form 
        id='login-form' 
        onSubmit={handleSubmit}
      >

        <Form.Group className='my-3'>
          <Form.Label>username:</Form.Label>
          <Form.Control 
            name='username'  
            type='text'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>password:</Form.Label>
          <Form.Control 
            name='password'
            type='text'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>

      </Form>
    </>
  )  
}

