import React, { useState, useEffect } from 'react'
import Nav from "./Nav";
import Footer from "./Footer";
import { Row, Col, Container } from 'react-bootstrap';
// import Card from './Card';
import { loadList } from "./helper/WishlistHelper";
// import {WishlistCard} from './WishlistCard'
import Card from './Card';
import WishlistCard from './WishlistCard'









function Wishlist() {

    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        setProducts(loadList());
    }, [reload]);

    

    const loadAllProducts = () => {
        return (
            <div>
                <h2>This section is to load products</h2>
                <div className="col-12 col-md-4 d-flex justify-content-between ">
                {products.map((product, index) => (
                    <div>
                    <Card
                        key={index}
                        product={product}
                        removeFromList={true}
                        addtoCart={true}
                        setReload={setReload}
                        reload={reload}
                    />
                    </div>
                ))}
                </div>
                {/* <WishlistCard /> */}
            </div>
        );
    };
    // const loadCheckout = () => {
    //     return (
    //         <div>
    //             <h2>This section for checkout</h2>
    //         </div>
    //     );
    // };



    return (
        <div>
            <Nav />
            <Container>
                <Row >
                    <div className="row text-center">
                    <h2>This section is to load products</h2>
                        <div className="col-12">{loadAllProducts()}</div>
                        {/* <div className="col-6">{loadCheckout()}</div> */}
                    </div>
                    {/* <WishlistCard />
                    <WishlistCard />
                    <WishlistCard />
                    <WishlistCard /> */}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Wishlist;