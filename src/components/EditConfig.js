import React, { Component } from "react";
import { Card, Button, Cascader, Form, Input } from "antd";
import { Flex } from "antd";
import ACMSDataService from "../services/acms.service";
import { useLocation } from 'react-router-dom';

class EditConfig extends Component {
    /*const App = () => {
      const [componentSize, setComponentSize] = React.useState("default");
      const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
      };*/
    constructor(props) {
        super(props);
        this.onChangeConfigName = this.onChangeConfigName.bind(this);
        this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
        this.onChangeConfigDescription = this.onChangeConfigDescription.bind(this);
        this.onChangeDataType = this.onChangeDataType.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.editConfig = this.editConfig.bind(this);


        this.state = {
            id:1,
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

    editConfig() {
        var data = {
            id: this.state.id,
            configName: this.state.configName,
            displayName: this.state.displayName,
            configDescription: this.state.configDescription,
            dataType: this.state.dataType,
            category: this.state.category
        };

        ACMSDataService.editConfig(data)
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

    render() {
       
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
                      /*  initialValues={{
                            size: componentSize
                        }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}*/
                    >
                        <Form.Item label="Id"
                            //hidden
                            id="id"
                        //value={this.props.location.state}
                        >
                            <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} />
                        </Form.Item>
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
                            <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} />
                        </Form.Item>

                        <Form.Item label="Category"
                            id="category"
                            value={this.state.category}
                            onChange={this.onChangeCategory}>
                            <Cascader
                                options={[
                                    {
                                        value: "zhejiang",
                                        label: "Project Configuration"
                                    }
                                ]}
                                style={{ borderColor: "#00008B" }}
                            />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                            <Flex>
                                <Button type="primary" style={{ backgroundColor: "#00008B", marginRight: 10 }}>
                                    Update
                </Button>
                                <Button type="primary" style={{ backgroundColor: "#00008B", marginRight: 10 }}>
                                    Cancel
                </Button>
                            </Flex>

                            <Button
                                type="primary"
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

    };

}

export default EditConfig;
