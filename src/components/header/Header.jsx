
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import"./header.css"

function OffcanvasExample() {
  return (
    <>
      {[  'md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">SWATI.VERMA</Navbar.Brand>
          
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  SWATI.VERMA
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Me </Nav.Link>
                <Nav.Link href="#Skill">Skills </Nav.Link>
                <Nav.Link href="#portfolio">Project </Nav.Link>
               <Nav.Link href="#link">Contact Me </Nav.Link>
                </Nav>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className='flexSB'>
             
                  <a className='btn btn-primary'> Hire Me! </a>
               </div>
     
 
       <Navbar.Toggle aria-controls="basic-navbar-nav" />

          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;