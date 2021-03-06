import React, { useState, useEffect } from 'react'
import Nav from "./Nav";
import Footer from "./Footer";
import { Row, Col, Container } from 'react-bootstrap';
import Card from './Card';
import { loadCart } from "./helper/CartHelper";




function Cart() {

    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        setProducts(loadCart());
    }, [reload]);

    const loadAllProducts = () => {
        return (
            <div>
                <h2>This section is to load products</h2>
                {products.map((product, index) => (
                    <Card
                    key={index}
                    product={product}
                    removeFromCart={true}
                    addtoCart={false}
                    setReload={setReload}
                    reload={reload}
                    />
                ))}
            </div>
        );
    };
    const loadCheckout = () => {
        return (
            <div>
                <h2>This section for checkout</h2>
            </div>
        );
    };



    return (
        <div>
            <Nav />
            <Container>
                <Row >
                    <div className="row text-center">
                        <div className="col-12 col-md-6">{loadAllProducts()}</div>
                        <div className="col-12 col-md-6">{loadCheckout()}</div>
                    </div>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Cart;