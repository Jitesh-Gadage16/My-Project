import React, { useState, useEffect } from 'react'
import Nav from "./Nav";
import Footer from "./Footer";
import { Row, Col, Container } from 'react-bootstrap';
import Card from './Card';
import { getProducts } from "./helper/coreapicalls";




function Products() {


    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProduct = () => {
        getProducts().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProducts(data);
            }
        });
    };


    useEffect(() => {
        loadAllProduct();
    }, []);


    return (
        <div>
            <Nav />
            <Container>
                <Row >
                    <h1 className="text-center">Mens Product</h1>
                    {products.map((product, index) => {
                        return (
                            <div key={index} className="col-6 col-md-3 mb-4">
                                <Card  product={product}/>
                            </div> 
                        );
                    })}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Products