import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class Comingsoon extends Component{
    render(){
        return(        
            <Container fluid className="comingsoon-s1 d-flex align-items-center p-header">
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={10} sm={8} md={6} lg={5} xl={4} className="mx-auto text-white">
                        <div className="card bg-secondary opacity-8 text-shadow border border-light">
                            <h1 className="display-4 font-weight-bold font-logo opacity-8 text-warning">
                                Starting soon
                            </h1>
                            <p className="lead text-white">
                                Hi, we are not ready yet, however we are starting soon<br/>  
                                Please visit us again in a while.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default Comingsoon;