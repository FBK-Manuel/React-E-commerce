import { Alert, Button, Card } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./Redux/cartSlice";
import { getProducts } from "./Redux/productSlice";
import StatusCode from "./utils/statusCode";


const Product = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.product);


    useEffect(() => {
        //api
        dispatch(getProducts());
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(results => setProduct(results))
    }, [dispatch]);

    if (status === StatusCode.LOADING) {
        return <p>Loading Product...</p>
    }

    if (status === StatusCode.ERROR) {
        return <Alert key="danger" variant="danger">Could Not Fetch Data Try Again Later....</Alert>
    }

    const addToCart = (product) => {
        // dispatch action here
        dispatch(add(product))
    }

    const cards = products.map(product => (
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card key={product.id} className="h-100">
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        $ {product.price}
                    </Card.Text>

                </Card.Body>
                <Card.Footer style={{ background: 'white' }}>
                    <Button variant="primary" onClick={() => addToCart(product)} >Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    return (
        <div className="row">
            <h1>Product Dashboard</h1>
            {/* {JSON.stringify(products)};  */}
            <div className="row">
                {cards}
            </div>

        </div>
    );
}

export default Product;