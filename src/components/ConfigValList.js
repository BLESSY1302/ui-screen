import React, { Component } from "react";
import ValueTable from "./ValueTable";
import { Button } from "antd";
import "./Table.css"; // Assuming you've organized your components in separate files // {item.ACTIONS}
import ACMSDataService from "../services/acms.service";

class ConfigValList extends Component {

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

      return (
            <div>
                <div class="text">
                    <h1>APPLICATION CONFIGURATION MANAGEMENT SYSTEM</h1>
                    <h2>Welcome,User! your gateway to control and manage begins here.</h2>
                </div>
                               
                <Button id="logout" type="primary" href="/" style={{ backgroundColor: "#00008B" }}>
                    LOGOUT <span>&gt;</span>
                </Button>

                <div class="right_point"></div>
                <div class="tit">CONFIG VALUE</div>
                <div class="le">MANAGEMENT </div>

                {<ValueTable data={this.state.configurations} />}
            </div>
        );
    }
}
export default ConfigValList;
