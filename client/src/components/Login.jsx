import { Form, Button } from 'react-bootstrap'

export default function Login () {
  //return <p>loading...</p>
  return (
      <Form>
        <Form.Group>
          <Form.Label>name:</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control type='text'/>
        </Form.Group>

        <Form.Group>
          <Form.Label>password:</Form.Label>
          <Form.Control type='text'/>
        </Form.Group>
      </Form>
  )
}
