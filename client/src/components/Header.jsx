import { Nav, Navbar, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Header ({ isLoggedin, handleLogin }) {

  let history = useHistory()

  const handleClick = async () => {
    await fetch('/logout', {
      method: 'DELETE'
    })

    handleLogin(false)
    history.push('/home')
  }

  return (
    <>
      <Navbar bg="primary" variant="dark">
        {/*<Container>*/}
          <Navbar.Brand href="/about">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Baseball Bets 
          </Navbar.Brand>
          <Nav className='me-auto'>

            <LinkContainer to='/bets' exact>
              <Nav.Link href='#action1'>bets</Nav.Link>
            </LinkContainer>

            {!isLoggedin ? 
              <>
                <LinkContainer to='/login' exact>
                  <Nav.Link href='#action2'>login</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/signup' exact>
                  <Nav.Link href='#action3'>signup</Nav.Link>
                </LinkContainer> 
              </>
              : <Button onClick={handleClick}>logout</Button>}
          </Nav>

        {/*</Container>*/}
      </Navbar> 
    </>
  )
}
