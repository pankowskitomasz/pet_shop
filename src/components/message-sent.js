import React, { Component } from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";
import Card from "../../node_modules/react-bootstrap/Card";

class MessageSent extends Component {
    hndBack(){
        this.props.backNav("form");
    }
    render() {
        return (
            <Container fluid className={"login-form align-items-center p-0 py-5 bg-white d-flex minh-footer-adj " + this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={10} md={6} className="mx-auto p-0 d-flex align-items-center">
                        <Card className="mx-auto bg-form border-dark-yellow shadow opacity-9">
                            <Card.Header className="text-dark-yellow text-start border-dark-yellow">
                                Message sent!
                            </Card.Header>
                            <Card.Body className="text-center text-dark-yellow bg-form p-5">
                                <p className="lead">Message was sent!</p>
                                <Button variant={"outline-light border-dark-yellow text-dark-yellow rounded-pill"} onClick={this.hndBack.bind(this)}>
                                    back to Form
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MessageSent;