import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Signup({ handleLogin }) {
  const [errors, setErrors] = useState([]);

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = new FormData(document.querySelector("#signup-form"));

    let req = await fetch("/signup", {
      method: "POST",
      body: form,
    });

    if (req.ok) {
      handleLogin(true);
      history.push("/user");
    } else {
      let res = await req.json();
      let tempArr = [];

      for (let i in res.errors) {
        let message = `${i}: ${res.errors[i]}`;
        tempArr.push(message);
      }

      setErrors(tempArr);
    }
  };

  return (
    <>
      <div className="mt-2">
        {errors.map((err, i) => (
          <p key={i}>{err}</p>
        ))}
      </div>
      <Form id="signup-form" onSubmit={handleSubmit}>
        <Form.Group className="my-3">
          <Form.Label>name:</Form.Label>
          <Form.Control name="name" type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>username:</Form.Label>
          <Form.Control name="username" type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>password:</Form.Label>
          <Form.Control name="password" type="text" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
