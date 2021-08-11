import React,{Component} from "react";
import ServicesContent from "../components/services_content";

class Service extends Component{
    render(){
        return(          
            <main className="minh-footer-adj d-flex align-items-center bg-service">     
                <ServicesContent/>
            </main>
        );
    }
}

export default Service;