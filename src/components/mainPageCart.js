import { Alert, Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removed } from "./Redux/mainPageCartSlice";
import Footer from "./footer";
// import { useState } from "react";
// import Pagination from 'react-bootstrap/Pagination';



const Carts = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.carts);

    const removeFromCart = (id) => {
        // dispatch a remove action
        dispatch(removed(id));
    };

    // const [count, setCount] = useState(1);

    // const increment = () => {
    //     setCount(count + 1);
    // }
    // const decrement = () => {
    //     setCount(count - 1);
    // }

    const cardItem = products.length ? (
        products.map(product => (


            <Card className="mb-4">
                <Row key={product.id}>
                    <Col sm={4}>
                        <img src={product.image} alt={product.title} className="img-fluid" height="400px" width="400px" style={{ padding: "50px" }} />
                    </Col>
                    <Col sm={8}>
                        <Card.Body>
                            <Card.Title className="display-5 " style={{ padding: "50px" }}>{product.title}</Card.Title>
                            <Card.Text className="lead fw-bolder">Ratings: {product.rating && product.rating.rate} <i className="fa fa-star"></i></Card.Text>
                            <Card.Text className="display-6 fw-bolder my-4">Price: ${product.price}</Card.Text>
                            <Card.Text clasName="lead">{product.description}</Card.Text>

                            <Button variant="danger" onClick={() => removeFromCart(product.id)} style={{ margin: '10px' }} >Remove</Button>
                            <Button variant="success">Continue</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>



            // <div className="col-md-12" style={{ marginBottom: '10px' }}>
            //     <Card key={product.id} className="h-100">
            //         <div className="text-center">
            //             <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
            //         </div>
            //         <Card.Body>
            //             <Card.Title>{product.title}</Card.Title>
            //             <Card.Text>{count} items(added) $ {product.price}</Card.Text>
            //             <div className=" d-flex justify-content-center align-items-center">
            //                 <Pagination>
            //                     <Pagination.Item onClick={decrement} style={{ margin: "5px" }}><b>-</b></Pagination.Item>
            //                     <Pagination.Item onClick={increment} style={{ margin: "5px" }}><b>+</b></Pagination.Item>
            //                 </Pagination>
            //             </div>
            //             <Card.Text>{product.category}</Card.Text>
            //             <Card.Text>{product.slug}</Card.Text>
            //             <Card.Text>{product.description}</Card.Text>

            //         </Card.Body>
            //         <Card.Footer style={{ background: 'white' }}>
            //             <Button variant="danger" onClick={() => removeFromCart(product.id)} style={{ margin: '10px' }} >Remove</Button>
            //             <Button variant="success">Continue</Button>
            //         </Card.Footer>
            //     </Card>
            // </div>
        ))
    ) : (
        <Alert key="danger" variant="danger"><h4>The cart is currently empty...!</h4></Alert>

    );


    return (
        <div className="row">{cardItem}
            <Footer />
        </div>
    );
}

export default Carts;



