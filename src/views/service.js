import React,{Component} from "react";
import ServicesContent from "../components/services_content";
import TitleTextTableCenter from "../components/title-text-table-center"

class Service extends Component{
    render(){
        return(          
            <main className="minh-footer-adj d-flex align-items-center bg-service">     
                <TitleTextTableCenter/>
            </main>
        );
    }
}

export default Service;