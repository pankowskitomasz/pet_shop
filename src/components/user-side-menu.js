import React,{Component} from "react";
import Card from "../../node_modules/react-bootstrap/Card";
import ListGroup from "../../node_modules/react-bootstrap/ListGroup";

class UserSideMenu extends Component{
    render(){
        return(        
            <Card className="w-100 bg-dark-yellow">
                <ListGroup className="bg-form">
                    <ListGroup.Item action 
                        data-val="dashboard"
                        className="border-dark-yellow bg-transparent text-dark-yellow"
                        onClick={this.props.navigate.bind(this)}>
                        Dashboard
                    </ListGroup.Item>
                    <ListGroup.Item action
                        data-val="messages"
                        className="border-dark-yellow bg-transparent text-dark-yellow"
                        onClick={this.props.navigate.bind(this)}>
                        Messages
                    </ListGroup.Item>
                    <ListGroup.Item action
                        data-val="logout"
                        className="border-dark-yellow bg-transparent text-dark-yellow"
                        onClick={this.props.navigate.bind(this)}>
                        Logout
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}

export default UserSideMenu;