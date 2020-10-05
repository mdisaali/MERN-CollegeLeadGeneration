import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Product = (props) =>{
    const localUrl = 'http://localhost:1337'
    const imgUrl = localUrl + props.imgUrl;
    return(
        <Container>
            <Row className="mb-5">
                <Col sm="3">
                    <img className="img-fluid" src = {imgUrl} alt="new" />
                </Col>
                <Col>
                    <h2>
                        {props.name}
                    </h2>
                    <p>
                        {props.description}
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Product;