import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function NavBarCrolls() {

    const cartCount = useSelector(state => state.carts)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">My Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link to="/" as={Link} active><i className='fa fa-home'></i> Home</Nav.Link>
                        <Nav.Link to=""><i className='fa fa-product-hunt'></i> Wish List</Nav.Link>
                        <NavDropdown title="Contact Us" id="navbarScrollingDropdown">
                            <NavDropdown.Item to=""><i className='fa fa-user-circle-o'></i> Customer Care</NavDropdown.Item>
                            <NavDropdown.Item to="">
                                <i className='fa fa-times-circle'></i> Cancel Order
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item to="">
                                <i className='fa fa-money'></i> Payment Options
                            </NavDropdown.Item>
                            <NavDropdown.Item to="">
                                <i className='fa fa-retweet'></i> Return & Refunds
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item to="">
                                <Button variant="warning" size="lg">
                                    <h4><i className='fa fa-comments'></i> Live chat with us</h4>
                                </Button>{' '}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link to="/mainPageCart" as={Link}>
                            <i className='fa fa-shopping-cart'></i> Cart <Badge bg="dark">{cartCount.length}</Badge>
                        </Nav.Link>
                    </Nav>
                    <NavDropdown title="Account" id="navbarScrollingDropdown" style={{ padding: "15px" }}>
                        <NavDropdown.Item to=""><i className='fa fa-user'></i> My Account</NavDropdown.Item>
                        <NavDropdown.Item to="">
                            <i className='fa fa-cart-plus'></i> Orders
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item to="">
                            <i className='fa fa-bookmark'></i> Saved Items
                        </NavDropdown.Item>
                        <NavDropdown.Item to="">
                            <i className='fa fa-envelope-open'></i> About
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item to="">
                            <Button variant="warning" size="lg">
                                <Link className='w3-text-none' to="/register"> <i className='fa fa-sign-in'></i> SIGN UP</Link>
                            </Button>{' '}
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarCrolls;