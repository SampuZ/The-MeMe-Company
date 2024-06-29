import logo from './logo.svg';
import './App.css';
import ReactBootstrap, { Jumbotron, Sonnet, Button, Col, Grid, Panel, FormGroup, Navbar, Nav, NavDropdown, Form, FormControl, Container, Badge } from 'react-bootstrap'
import About from './About'
import alert from './alert'
import badge from './Badgeset'
import Badgeset from './Badgeset';
import img from "./images/imagess.jpeg";




function App() {
  return (
    <>








      <Container>
        
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand bg="light" href="#home" ><h1>HAPPY TO HELP YOU</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" varient="dark">mygame</NavDropdown.Item><br></br>
                <NavDropdown.Item href="#action/3.2" varient="dark">ourgame</NavDropdown.Item><br></br>
                <NavDropdown.Item href="#action/3.3" varient="dark">win!!!</NavDropdown.Item><br></br>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            


            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>


        <Badgeset />

      </Container>
      <img src="/image/istockphoto-954951782-640x640.jpg" class="img-fluid" alt="..."></img>
      


      <div>

        <About />
        
        



      </div>

    </>
  );
}

export default App;
