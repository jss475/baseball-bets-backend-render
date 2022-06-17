import { Form, Button } from 'react-bootstrap'

export default function Login () {

  const handleSubmit = (e) => e.preventDefault()

  return (
      <Form onSubmit={handleSubmit}>

        <Form.Group className='my-3'>
          <Form.Label>username:</Form.Label>
          <Form.Control type='text'/>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>password:</Form.Label>
          <Form.Control type='text'/>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>

      </Form>
  )
}
