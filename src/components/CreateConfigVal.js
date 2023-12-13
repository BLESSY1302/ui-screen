import React, { Component } from "react";
import { Card, Button, Form, Input} from "antd";
import { Flex } from "antd";
import ACMSDataService from "../services/acms.service";

class CreateConfigVal extends Component {
    emptyItem = {
        id: '',
        configName: '',
        configValue: '',
    };
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            item: this.emptyItem
        };
    }

    async componentDidMount() {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
         ACMSDataService.getConfig(id)
            .then(res => {
                this.setState({ item: res.data });
            })
            .catch(e => {
                console.log(e);
            });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await ACMSDataService.editConfig(item)
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
        const { item } = this.state;
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

                        <Form.Item label="Id" hidden>
                            <Input type="text" name="id" id="id" value={item.id || ''}
                                onChange={this.handleChange} autoComplete="id" />
                        </Form.Item>
                        <Form.Item label="Configuration Name">
                            <Input type="text" name="configName" id="configName" value={item.configName || ''}
                                onChange={this.handleChange} autoComplete="configName" readOnly />
                        </Form.Item>

                        <Form.Item label="Value"name="configValue"
                            rules={[
                                { required: true, message: 'Please enter a value' }
                            ]}
                        >
                            <Input type="text" name="configValue" id="configValue" value={item.configValue || ''}
                                onChange={this.handleChange} autoComplete="configValue" />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                            <Flex>
                                <Button type="primary" onClick={this.handleSubmit} style={{ backgroundColor: "#00008B", marginRight: 10 }}>
                                    Add
                </Button>
                                <Button type="primary" onClick={this.navigateToConfigValListPage}  style={{ backgroundColor: "#00008B", marginRight: 10 }}>
                                    Cancel
                </Button>
                            </Flex>

                        </Form.Item>
                    </Form>
                </Card>
            </Flex>
        );
    }
}

export default CreateConfigVal;