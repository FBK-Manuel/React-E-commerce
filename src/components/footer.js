import { Link } from "react-router-dom";
import "./styles/style.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Footer = () => {

    const footerStyle = {
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        // background: "linear-gradient(90deg, #0062ff, #da61ff)",
        // height: '100%',
        // width: '100%',
    };

    return (
        <div style={footerStyle}>
            <div className="w3-row-padding">
                <div className="w3-col s4">
                    <Form>
                        <Form.Group>
                            <Form.Control className="w3-input w3-border w3-margin" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button className="w3-button w3-block w3-black w3-margin w3-padding" type="submit">Send</Button>
                    </Form>
                    <h2>MY-STORE INTERNATIONAL</h2>
                    <div className="row">
                        <Link to="" className="w3-half w3-text-none">Algeria</Link>
                        <Link to="" className="w3-half w3-text-none">Egypt</Link>
                        <Link to="" className="w3-half w3-text-none ">Ghana</Link>
                        <Link to="" className="w3-half w3-text-none">Ivory Coast</Link>
                        <Link to="" className="w3-half w3-text-none">Kenya</Link>

                        <Link to="" className="w3-half w3-text-none">Morocco</Link>
                        <Link to="" className="w3-half w3-text-none">Tunisia</Link>
                        <Link to="" className="w3-half w3-text-none">Senegal</Link>
                        <Link to="" className="w3-half w3-text-none">Uganda</Link>
                        <Link to="" className="w3-half w3-text-none">Zando</Link>
                    </div>
                </div>
                <div className="w3-col s4">
                    <h2>About</h2>
                    <p><Link to="#" className="w3-text-none">About us</Link></p>
                    <p><Link to="#" className="w3-text-none">We're hiring</Link></p>
                    <p><Link to="#" className="w3-text-none">Support</Link></p>
                    <p><Link to="#" className="w3-text-none">Find store</Link></p>
                    <p><Link to="#" className="w3-text-none">Shipment</Link></p>
                    <p><Link to="#" className="w3-text-none">Payment</Link></p>
                    <p><Link to="#" className="w3-text-none">Gift card</Link></p>
                    <p><Link to="#" className="w3-text-none">Return</Link></p>
                    <p><Link to="#" className="w3-text-none">Help</Link></p>
                </div>

                <div className="w3-col s4 w3-justify">
                    <h2>Store</h2>
                    <p><i className="fa fa-fw fa-map-marker"></i> My-store</p>
                    <p><i className="fa fa-fw fa-phone"></i> +2348144123123</p>
                    <p><i className="fa fa-fw fa-envelope"></i> ex@mail.com</p>
                    <h2>We accept</h2>
                    <p><i className="fa fa-fw fa-paypal"></i> Paypal</p>
                    <p><i className="fa fa-fw fa-cc-visa"></i> Visa</p>
                    <p><i className="fa fa-fw fa-cc-mastercard"></i> Master Card</p>
                    <p><i className="fa fa-fw fa-credit-card"></i> Credit Card</p>

                    <i className="fa fa-facebook-official w3-margin w3-hover-opacity w3-large"></i>
                    <i className="fa fa-instagram w3-hover-opacity w3-margin w3-large"></i>
                    <i className="fa fa-snapchat w3-hover-opacity w3-margin w3-large"></i>
                    <i className="fa fa-pinterest-p w3-hover-opacity w3-margin w3-large"></i>
                    <i className="fa fa-twitter w3-hover-opacity w3-margin w3-large"></i>
                    <i className="fa fa-linkedin w3-hover-opacity w3-margin w3-large"></i>
                </div>

            </div>
            <h4 className="w3-container w3-panel w3-white w3-padding-32"> &copy; 2023 My-Store</h4>

        </div>

    );
}

export default Footer;