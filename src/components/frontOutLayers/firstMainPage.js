import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIndexData } from "../Redux/indexPageSlice";
import StatusPageCode from "../utils/statusPageCode";
import { Alert, Button, Card, } from "react-bootstrap";
import { added } from "../Redux/mainPageCartSlice";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../footer";






const MainPage = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.indexPage);

    // const filterButton = (cat) => {
    //     const updateList = getIndexData.filter((x) => x.category === cat);
    //     getIndexData(updateList);
    // }

    useEffect(() => {
        //api
        dispatch(getIndexData());
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(results => setProduct(results))
    }, [dispatch]);

    if (status === StatusPageCode.LOADING) {
        return (
            <div>
                Loading....
            </div>
        )
    }

    if (status === StatusPageCode.ERROR) {
        return <Alert key="danger" variant="danger">Could Not Fetch Data Try Again Later....</Alert>
    }

    const addToCart = (product) => {
        // dispatch action here
        dispatch(added(product))
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
    ));




    // this what show on the page
    return (
        <div className="row">
            <div className="container">
                <Carousel data-bs-theme="dark" >
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="/images/image1.jpg "
                            alt="First slide"
                            height="550px"
                        />
                        <Carousel.Caption>
                            <h1 className="text-white fw-bolder mb-0">Get every product fresh</h1>
                            <h4 className="text-white"><b>Never limit yourself from the best of our product.</b></h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/image2.jpg"
                            alt="Second slide"
                            height="550px"
                        />

                        <Carousel.Caption>
                            <h1 className="text-white fw-bolder mb-0">If you dream it you can get it</h1>
                            <h4 className="text-white" ><b>You are just one step ahead from our product.</b></h4>
                        </Carousel.Caption>


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/image3.jpg"
                            alt="Third slide"
                            height="550px"
                        />
                        <Carousel.Caption>
                            <h1 className="text-white fw-bolder mb-0">Do not be the third slide but be the first</h1>
                            <h4 className="text-white">
                                <b>You can track any of our goods from around the continent, all you need is your smartphone.</b>
                            </h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <h1>Latest Product</h1>
            <hr style={{ width: '250px', margin: '0 auto', fontWeight: 'bold', color: 'blue', padding: "20px" }} />
            <div className="" style={{ padding: "30px", backgroundColor: "transparent" }} >
                <Button variant="outline-dark" className=" me-2" onClick={() => cards()} >All</Button>
                <Button variant="outline-dark" className="me-2" onClick={() => ("men's clothing")}>Men's Clothing</Button>
                <Button variant="outline-dark" className="me-2" onClick={() => ("women's clothing")}>Women's Clothing</Button>
                <Button variant="outline-dark" className="me-2" onClick={() => ("jowelery")}>Jowelery</Button>
                <Button variant="outline-dark" className="me-2" onClick={() => ("electronic")}>Electronics</Button>
            </div>
            {/* {JSON.stringify(products)};  */}
            <div className="row" style={{ padding: "20px" }}>
                {cards}
            </div>
            <Footer />
        </div>
    );
}

export default MainPage;