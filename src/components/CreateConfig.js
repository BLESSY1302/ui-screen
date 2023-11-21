import React, { Component } from "react";
import { Card, Button, Cascader, Form, Input } from "antd";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import ACMSDataService from "../services/acms.service";

class CreateConfig extends Component {
    constructor(props) {
        super(props);
        this.onChangeConfigName = this.onChangeConfigName.bind(this);
        this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
        this.onChangeConfigDescription = this.onChangeConfigDescription.bind(this);
        this.onChangeDataType = this.onChangeDataType.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.clearConfigFields = this.clearConfigFields.bind(this);

        this.state = {
            configName: "",
            displayName: "",
            configDescription: "",
            dataType: "",
            category: ""
         };
    }

    onChangeConfigName(e) {
        this.setState({
            configName: e.target.value
        });
    }

    onChangeDisplayName(e) {
        this.setState({
            displayName: e.target.value
        });
    }

    onChangeConfigDescription(e) {
        this.setState({
            configDescription: e.target.value
        });
    }

    onChangeDataType(e) {
        this.setState({
            dataType: e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }

    createConfig() {
        var data = {
            configName: this.state.configName,
            displayName: this.state.displayName,
            configDescription: this.state.configDescription,
            dataType: this.state.dataType,
            category: this.state.category
        };

        ACMSDataService.createConfig(data)
            .then(response => {
                this.setState({
                    valid: response.data,
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    clearConfigFields() {
        this.setState({
            configName: "",
            displayName: "",
            configDescription: "",
            dataType: "",
            category: ""
        });
    }

    navigateToConfigListPage() {
        { window.location.assign('configlist') }
    }

    render() {
        
            return (
                <Flex justify="center">
                    <Card
                        title="Create Configuration"
                        bordered={false}
                        headStyle={{
                            backgroundColor: "#00008B",
                            color: "#fff"
                        }}
                        style={{
                            width: 300,
                            border: "2px solid #00008B",
                            borderRadius: "10px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                            justifyContent: "center",
                            alignItems: "center",

                            marginTop: "70px"
                        }}
                    >
                        <Form
                            labelCol={{
                                span: 13
                            }}
                            wrapperCol={{
                                span: 14
                            }}
                            layout="horizontal"
                         >
                            <Form.Item label="Configuration Name"
                                id="configName"
                                value={this.state.configName}
                                onChange={this.onChangeConfigName}>
                                <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} />
                            </Form.Item>
                            <Form.Item label="Display Name"
                                id="displayName"
                                value={this.state.displayName}
                                onChange={this.onChangeDisplayName}>
                                <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} />
                            </Form.Item>
                            <Form.Item label="Description"
                                id="configDescription"
                                value={this.state.configDescription}
                                onChange={this.onChangeConfigDescription}>
                                <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} />
                            </Form.Item>
                            <Form.Item label="Datatype"
                                id="dataType"
                                value={this.state.dataType}
                                onChange={this.onChangeDataType}>
                                <Cascader
                                    options={[
                                        {
                                            value: "numeric",
                                            label: "Numeric"
                                        },
                                        {
                                            value: "string",
                                            label: "String"
                                        },
                                        {
                                            value: "date",
                                            label: "Date"
                                        }
                                    ]}
                                    style={{ borderColor: "#00008B" }}
                                />
                            </Form.Item>

                            <Form.Item label="Category"
                                id="category"
                                value={this.state.category}
                                onChange={this.onChangeCategory}>
                                <Cascader
                                    options={[
                                        {
                                            value: "projectconfiguration",
                                            label: "Project Configuration"
                                        },
                                        {
                                            value: "appconfiguration",
                                            label: "Application Configuration"
                                        }
                                    ]}
                                    style={{ borderColor: "#00008B" }}
                                />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                                <Button type="primary"
                                    onClick={this.createConfig}
                                    style={{ backgroundColor: "#00008B" }}>
                                    Save
            </Button>
                                <Button
                                    type="primary"
                                    onClick={this.navigateToConfigListPage}
                                    style={{ backgroundColor: "#00008B", marginLeft: 10 }}
                                >
                                    Cancel
            </Button>
                                <Button
                                    type="primary"
                                    onClick={this.clearConfigFields}
                                    style={{
                                        backgroundColor: "#00008B",
                                        marginRight: 10,
                                        marginLeft: 25,
                                        marginTop: 10
                                    }}
                                >
                                    Reset
            </Button>
                            </Form.Item>
                        </Form>
                        <Link to="/delete"></Link> {/* Link to the Delete page */}
                    </Card>
                </Flex>
            );

        }
    
}

export default CreateConfig;