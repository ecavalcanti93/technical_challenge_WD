import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css"

function MyNavbar ({phones}) {
    return(
        <Navbar  bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
          <Nav className="me-auto">
          <Link href="/">Home</Link>
            {phones.map(eachPhone => {
                    return <Link className="nav-link" to={`/phones/${eachPhone.id}`} key={eachPhone.id}>
                    {eachPhone.name}
                    </Link>
            })}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default MyNavbar;