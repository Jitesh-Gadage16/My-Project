import React from 'react';
import { Row, Col,Container } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';


const Ourproducts = () => {
    return <div>




        <div className="our-prod-parent">
            <div className="Primary-heading d-flex justify-content-center align-items-center">
                <h2 className="prdo-title">Our Products</h2>
            </div>
            <div className="produt-div d-flex justify-content-between align-items-center">
            <Container> 
                <Row >
                    <Col xs={12} md={4} >
                    <Link to="/Products" >
                        <div className="products text-center p-3">
                            <img className="prodcuts-img" src='https://images.bewakoof.com/uploads/grid/app/pop-culture-m-tshirt-campaign-1643277000.gif' />
                        </div>
                        </Link>
                    </Col>
                    <Col xs={12} md={4}>
                    <Link to="/Products" >
                        <div className="products text-center p-3">
                            <img className="prodcuts-img" src='https://images.bewakoof.com/uploads/grid/app/pop-culture-w-tshirt-campaign-1643277000.gif' />
                        </div>
                        </Link>
                    </Col>
                    <Col xs={12} md={4}>
                    <Link to="/Products" >
                        <div className="products text-center p-3">
                            <img className="prodcuts-img" src='https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Zig-Zag-Sliders-1643270403.gif' />
                        </div>
                        </Link>
                    </Col>
                </Row>
                </Container>
            </div>






        </div>
    </div>;
}

export default Ourproducts;
