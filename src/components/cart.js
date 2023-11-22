import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./Redux/cartSlice";




const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);

    const removeFromCart = (id) => {
        // dispatch a remove action
        dispatch(remove(id));
    };




    const cards = products.map(product => (
        <div className="col-md-12" style={{ marginBottom: '10px' }}>
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
                    <Button variant="danger" onClick={() => removeFromCart(product.id)} >Remove</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <div className="row">{cards}</div>
    );
}

export default Cart;