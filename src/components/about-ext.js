import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-ext p-0 minh-50vh d-flex align-items-center py-3 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={6} className="text-center mx-auto order-2 order-md-1 d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/about/about_ext_img.png"/>
                    </Col>
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center order-1 order-md-2">
                        <div>
                            <h2 className="mb-3 mt-5 text-dark-yellow">
                                Why to choose us?
                            </h2>
                            <p className="lead text-dark-yellow">
                                We offer a huge selection of services and products from top quality brands, 
                                all in one convenient place. We are passionate about our goal of bringing 
                                our fans across the globe access to their favorite team's gear. We pride 
                                ourselves on not only carrying a large selection of officially licensed products 
                                from the top brands, but also industry leading customer service.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>      
        );
    }
}

export default AboutExt;