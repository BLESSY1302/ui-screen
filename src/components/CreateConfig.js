import React, { Component } from "react";
import { Card, Button, Cascader, Form, Input } from "antd";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import ACMSDataService from "../services/acms.service";

class CreateConfig extends Component {
    emptyItem = {
        id: '',
        configName: '',
        displayName: '',
        configDescription: '',
        dataType: '',
        category: ''
    };
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onChangeDataType = this.onChangeDataType.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.createConfig = this.createConfig.bind(this);
        //this.clearConfigFields = this.clearConfigFields.bind(this);

        this.state = {
            item: this.emptyItem
        };
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
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
        const { item } = this.state;
        this.state.item.dataType = this.state.dataType;
        this.state.item.category = this.state.category;
        if (item.dataType == undefined)
            item.dataType = "Numeric";
        if (item.category == undefined)
            item.category = "Project Config";
        ACMSDataService.createConfig(item)
            .then(response => {
                 { window.location.assign('configurations') }                
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

    handleReset = () => {       
        this.setState({
            configName: "",
            displayName: "",
            configDescription: "",
            dataType: "",
            category: ""
        });
    };

    navigateToConfigListPage() {
        { window.location.assign('configurations') }
    }

    render() {
        const { item } = this.state;
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
                            <Form.Item label="Configuration Name">
                                <Input type="text" name="configName" id="configName" value={item.configName || ''}
                                    onChange={this.handleChange} autoComplete="configName" />
                            </Form.Item>
                            <Form.Item label="Display Name">
                                <Input type="text" name="displayName" id="displayName" value={item.displayName || ''}
                                    onChange={this.handleChange} autoComplete="displayName" />
                            </Form.Item>
                            <Form.Item label="Description">
                                <Input type="text" name="configDescription" id="configDescription" value={item.configDescription || ''}
                                    onChange={this.handleChange} autoComplete="configDescription" />
                            </Form.Item>
                           <Form.Item label="Datatype">
                                <select value={this.state.dataType} onChange={this.onChangeDataType}>
                                    <option value="Numeric">Numeric</option>
                                    <option value="String">String</option>
                                    <option value="Date">Date</option>
                                </select>
                            </Form.Item>

                            <Form.Item label="Category">
                                <select value={this.state.category} onChange={this.onChangeCategory}>
                                    <option value="Project Config">Project Config</option>
                                    <option value="Application Config">Application Config</option>
                                </select>
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
                                    onClick={this.handleReset}
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
                        
                    </Card>
                </Flex>
            );

        }
    
}

export default CreateConfig;