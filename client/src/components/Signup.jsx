import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'

const EMPTY_OBJ = {
  name: '',
  username: '',
  password: '' 
}

export default function Signup () {
  const [form, setForm] = useState({ ...EMPTY_OBJ })
  
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  {/*useEffect(() => {*/}
    {/*console.log(form) */}
  {/*}, [form])*/}

  const handleSubmit = (e) => e.preventDefault()
       
  return (
      <Form onSubmit={handleSubmit}>

        <Form.Group className='my-3'>
          <Form.Label>name:</Form.Label>
          <Form.Control 
            name='name'
            value={form.name}
            type='text'
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>username:</Form.Label>
          <Form.Control 
            name='username'
            value={form.username}
            type='text'
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>password:</Form.Label>
          <Form.Control 
            name='password'
            value={form.password}
            type='text'
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>

      </Form>
  )
}
