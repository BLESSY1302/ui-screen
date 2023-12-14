import React, { Component} from "react";
import { Card, Button, Form, Input } from "antd";
import { Flex } from "antd";
import ACMSDataService from "../services/acms.service";


class EditConfig extends Component {
     emptyItem = {
        id: '',
        configName: '',
        displayName: '',
        configDescription: '',
        dataType: '',
        category: '',
        updatedBy: ''
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
        item.updatedBy = 'admin';

        await ACMSDataService.editConfig(item)
            .then(response => {
                { window.location.assign('configurations') }
            })
            .catch(e => {
                console.log(e);
            });
     }

    navigateToConfigListPage() {
        { window.location.assign('configurations') }
    }

    render() {
        const { item } = this.state;
        return (
            <Flex justify="center">
                <Card
                    title="Edit Configuration"
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
 
                        {<Form.Item label="Datatype">
                            <select value={item.dataType} name="dataType" onChange={this.handleChange}>
                                <option value="Numeric">Numeric</option>
                                <option value="String">String</option>
                                <option value="Date">Date</option>
                            </select>
                        </Form.Item>}

                        <Form.Item label="Category">
                            <select value={item.category} name="category" onChange={this.handleChange}>
                                <option value="Project Config">Project Config</option>
                                <option value="Application Config">Application Config</option>
                            </select>                            
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                            <Flex>
                                <Button type="primary" onClick={this.handleSubmit} style={{ backgroundColor: "#00008B", marginRight: 10 }}>
                                    Update
                </Button>
                                <Button type="primary" onClick={this.navigateToConfigListPage} style={{ backgroundColor: "#00008B", marginRight: 10 }}>
                                    Cancel
                </Button>
                            </Flex>

                        </Form.Item>
                    </Form>
                </Card>
            </Flex>
        );

    };

}

export default EditConfig;
