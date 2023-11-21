import React, { Component } from "react";
import Table from "./Table";
import { Button } from "antd";
import "./Table.css"; // Assuming you've organized your components in separate files // {item.ACTIONS}
import ACMSDataService from "../services/acms.service";

class ConfigList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            configurations: []
        }
    }

    componentDidMount() {
  
        ACMSDataService.listConfig()
            .then(res => res.data)
            .then(
                (configurations) => {
                    this.setState({ configurations: configurations });
                },
                (error) => {
                    alert(error);
                }
            )
            .catch(e => {
                console.log(e);
            });
    }
 
    render() {

       const configurations = [];

        return (
            <div>
                <div class="text">
                    <h1>APPLICATION CONFIGURATION MANAGEMENT SYSTEM</h1>
                    <h2>Welcome,Admin! your gateway to control and manage begins here.</h2>
                </div>
                {/* <a href="">CREATE NEW</a> */}
                {/* <Button id="logout" type="primary" style={{ backgroundColor: "#00008B" }}>
        LOGOUT >
      </Button> */}
                <a href="/createconfig">CREATE NEW</a>
                <Button id="logout" type="primary" href="/" style={{ backgroundColor: "#00008B" }}>
                    LOGOUT <span>&gt;</span>
                </Button>






                <div class="right_point"></div>
                <div class="tit"> CONFIGURATION </div>
                <div class="le"> MANAGEMENT </div>

                {<Table data={this.state.configurations} />}
            </div>
        );
    }
}
export default ConfigList;
