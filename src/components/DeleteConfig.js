import React, { Component } from "react";
import { Card, Button } from "antd";
import ACMSDataService from "../services/acms.service";

class DeleteConfig extends Component {
    constructor(props) {
        super(props);
        this.navigateToConfigListPage = this.navigateToConfigListPage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            isDeleted: false
        };
     }

    async handleDelete(event) {
        event.preventDefault();
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
        ACMSDataService.deleteConfig(id)
            .then(response => {
                if (response.data) {
                    this.setState({ isDeleted: true });
                    { window.location.assign('configurations') }                  
                } else {
                    this.setState({ isDeleted: false });
                }
            })
            .catch(e => {
                this.setState({ isDeleted: false });
                console.log(e);
            });
    }

    navigateToConfigListPage() {
        { window.location.assign('configurations') }
    }

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >                
               
                <Card
                    title="DELETE CONFIGURATION"
                    bordered={false}
                    headStyle={{
                        backgroundColor: "#00008B",
                        color: "#fff"
                    }}
                    style={{
                        width: 300,
                        border: "2px solid #00008B",
                        borderRadius: "10px",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    <p>Are you sure you want to delete this configuration?</p>
                    <Button
                        type="primary" onClick={this.handleDelete}
                        style={{ marginRight: "90px", backgroundColor: "#00008B" }}
                    >
                        Yes
      </Button>
                    <Button type="primary" onClick={this.navigateToConfigListPage} style={{ backgroundColor: "#00008B" }}>
                        No
      </Button>
                 </Card>
            </div>
        );
    }
}
export default DeleteConfig;
