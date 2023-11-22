import React, { Component } from "react";
import { Card, Button, Form, Input, DatePicker } from "antd";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import ACMSDataService from "../services/acms.service";

class CreateConfigVal extends Component {
    constructor(props) {
        super(props);
        this.onChangeConfigValue = this.onChangeConfigValue.bind(this);
        this.createConfigVal = this.createConfigVal.bind(this);
        this.clearConfigValFields = this.clearConfigValFields.bind(this);

        this.state = {
            configValue: "",
        };
    }
    onChangeConfigValue(e) {
        this.setState({
            configValue: e.target.value
        });
    }

    createConfigVal() {
        var data = {
            id: 3,
            configValue: "Test1111"
        };

        ACMSDataService.editConfig(data)
            .then(response => {
                { window.location.assign('configvallist') }
            })
            .catch(e => {
                console.log(e);
            });
    }

    clearConfigValFields() {
        this.setState({
            configValue: ""
        });
    }

    render() {
        return (
            <Flex justify="center">
                <Card
                    title="Create Configuration Value"
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

                        <Form.Item label="Configuration Name" name="configName">
                            <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} readOnly="readOnly" />
                        </Form.Item>

                        {/*        <Form.Item label="Value 1" name="value1"
            rules={[
              { type: 'number', message: 'Please enter a valid number' },
              { required: true, message: 'Please enter a number' },
            ]}
         >
           <Input style={customInputStyle} type="number" />
         </Form.Item>*/}

                        <Form.Item label="Value" id="configValue" value={this.state.configValue} name="configValue"
                            rules={[
                                { required: true, message: 'Please enter a value' }
                            ]}
                        >
                            <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} />
                        </Form.Item>

                        {/*         <Form.Item label="Value 3" name="value3"
            rules={[
              { type:'object', required:true, message:'Please select a date' }
            ]}
         >
           <DatePicker style={customInputStyle} />
         </Form.Item>*/}

                        <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                            <Flex>
                                <Button type="primary" onClick={this.createConfigVal} style={{ backgroundColor: "#00008B", marginRight: 10 }}>
                                    Add
                </Button>
                                <Button type="primary" style={{ backgroundColor: "#00008B", marginRight: 10 }}>
                                    Cancel
                </Button>
                            </Flex>

                            <Button
                                type="primary"
                                onClick={this.clearConfigValFields}
                                style={{
                                    backgroundColor: "#00008B",

                                    marginRight: 10,
                                    marginLeft: 35,
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

export default CreateConfigVal;