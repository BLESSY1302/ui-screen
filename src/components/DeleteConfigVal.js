import React, { Component } from "react";
import { Card, Button } from "antd";
import ACMSDataService from "../services/acms.service";

class DeleteConfig extends Component {
    emptyItem = {
        id: '',
        configValue: '',
        updatedBy: ''
    };
    constructor(props) {
        super(props);
        this.navigateToConfigValListPage = this.navigateToConfigValListPage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            item: this.emptyItem
        };
    }

    async handleDelete(event) {
        event.preventDefault();
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
        const { item } = this.state;
        item['id'] = id;
        item['configValue'] = '';
        item['updatedBy'] = 'user';

        ACMSDataService.editConfig(item)
            .then(response => {
                { window.location.assign('configvalues') }
            })
            .catch(e => {                
                console.log(e);
            });
    }

    navigateToConfigValListPage() {
        { window.location.assign('configvalues') }
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
                    title="DELETE CONFIGURATION VALUE"
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
                    <p>Are you sure you want to delete this configuration value?</p>
                    <Button
                        type="primary" onClick={this.handleDelete}
                        style={{ marginRight: "90px", backgroundColor: "#00008B" }}
                    >
                        Yes
      </Button>
                    <Button type="primary" onClick={this.navigateToConfigValListPage} style={{ backgroundColor: "#00008B" }}>
                        No
      </Button>
                </Card>
            </div>
        );
    }
}
export default DeleteConfig;
