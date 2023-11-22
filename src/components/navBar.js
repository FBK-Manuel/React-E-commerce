import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const cartCount = useSelector(state => state.cart);
    return (
        //cart for the webpage
        <div>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">My-Store</Navbar.Brand>
                    <Nav>
                        <Nav.Link to="/" as={Link} >Product</Nav.Link>
                        <Nav.Link to="/contact" as={Link} >Contact</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Nav>
                            <Nav.Link to="/logOut" as={Link} >LogOut</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            <Nav.Link to="/cart" as={Link} >Cart {cartCount.length}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;