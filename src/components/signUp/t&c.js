import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";




const TAndC = () => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate("/login");
    }

    return (
        <div className="w3-container">
            <div className="w3-container w3-panel w3-blue">
                <h2 className="w3-center">Terms and Conditions</h2>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolore facilis, accusamus vel nam odio asperiores minima
                ad consectetur quas, unde dicta amet, qui quaerat aut
                ex alias neque. Facilis, iste?
            </p>
            <div className="w3-container w3-center ">
                <Button to="/register" as={Link} className="w3-padding w3-margin w3-button w3-green w3-round-xlarge">I Agree</Button>
                <Button onClick={redirect} className="w3-padding w3-margin w3-button w3-red w3-round-xlarge">I Disagree</Button>
            </div>
        </div>
    );
}

export default TAndC;