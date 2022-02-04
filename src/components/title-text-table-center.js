import React,{Component} from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";

class TitleTextTableCenter extends Component{
    render(){
        return(        
            <Container fluid className={"contact-data align-items-center py-5 d-flex minh-100vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5">
                    <Col xs={12} md={7} className="mx-auto minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center">
                            <h2 className="dispaly-6 fw-bold text-dark-yellow">
                                Services and pricing
                            </h2>
                            <p className="text-dark">
                                For dog owners, a comfy, orthopaedic dog bed, a sturdy collar and lead and 
                                a practical dog bowl are essential. Keep your dog active and engaged with 
                                our assortment of dog toys and training accessories, and check out our wide 
                                range of dog kennels and travel crates and cages for when your dog is outside 
                                or on the move.
                            </p>
                            <p className="text-dark">
                                For cat lovers, the right cat litter and litter tray will keep things clean, 
                                while a suitable scratching tree or post will keep your cat active and happy 
                                for hours. Ensure your cat is comfortable and relaxed with a comfy cat bed and, 
                                if required, a calming treatment such as Feliway. For outdoor cats, a microchip 
                                cat flap will provide the freedom to come and go as they please.
                            </p>
                            <Table hover striped className="text-start">
                                <thead>
                                    <tr className="text-dark-yellow">
                                        <th className="w-25">Service</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default TitleTextTableCenter;