import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import logo from '../BaseballBetsLogo2.png'

// const IMAGE_URL =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbLwrIgZHu-XANoCFGEVWS0I5Bp9fYbGDEb4QAsLdW_Rlpto98lb0YAEiHx7P7IivKy4&usqp=CAU";

export default function Header({ isLoggedin, handleLogin }) {
  let history = useHistory();

  const handleClick = async () => {
    await fetch("/logout", {
      method: "DELETE",
    });

    handleLogin(false);
    history.push("/");
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Baseball Bets
          </Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/about" exact>
              <Nav.Link href="#action1">about</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/bets" exact>
              <Nav.Link href="#action2">bets</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/players" exact>
              <Nav.Link href="#action3">players</Nav.Link>
            </LinkContainer>
            {!isLoggedin ? (
              <>
                <LinkContainer to="/login" exact>
                  <Nav.Link href="#action4">login</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/signup" exact>
                  <Nav.Link href="#action5">signup</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <Button onClick={handleClick}>logout</Button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
