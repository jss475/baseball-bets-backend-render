import { Nav, Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header ({ hasUser }) {
  //console.log(hasUser)
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

            {!hasUser ? 
              <>
                <LinkContainer to='/login' exact>
                  <Nav.Link href='#action2'>login</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/signup' exact>
                  <Nav.Link href='#action3'>signup</Nav.Link>
                </LinkContainer> 
              </>
            : null}
          </Nav>

        {/*</Container>*/}
      </Navbar> 
    </>
  )
}
