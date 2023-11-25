import React, { Component }  from "react";
import { Card, Button, Form, Input } from "antd";
import ACMSDataService from "../services/acms.service";

class Login extends Component {

    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.validateLogin = this.validateLogin.bind(this);        

        this.state = {
            userName: "",
            password: "",
            isValid: true
        };          
 
    }

    onChangeUserName(e) {
        this.setState({
            userName: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    validateLogin() {
        var data = {
            userName: this.state.userName,
            password: this.state.password
        };

        ACMSDataService.login(data)
            .then(response => {
                if (response.data) {
                    this.setState({ isValid: true });
                    if (data.userName == "admin") {
                        { window.location.assign('configlist') }
                    } else {
                        { window.location.assign('configvallist') }
                    }
                    
                } else {
                    this.setState({ isValid: false });
                }
            })
            .catch(e => {
                this.setState({ isValid: false });
                console.log(e);
            });
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
                    title="LOGIN"
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
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8
                        }}
                        wrapperCol={{
                            span: 16
                        }}
                        style={{
                            maxWidth: 600
                        }}
                        initialValues={{
                            remember: true
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        {!this.state.isValid && < span style={{ color: 'red' }}>Incorrect username or password!</span>}
                        <Form.Item
                            label="Username"
                            name="userName"
                            id="userName"
                            value={this.state.userName}
                            onChange={this.onChangeUserName}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!"
                                }
                            ]}
                        >
                            <Input style={{ borderColor: "#00008B", borderRadius: "2px" }} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!"
                                }
                            ]}
                        >
                            <Input.Password
                                style={{ borderColor: "#00008B", borderRadius: "2px" }}
                            />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16
                            }}
                            style={{
                                marginTop: "10px"
                            }}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                onClick={this.validateLogin}
                                style={{ backgroundColor: "#00008B" }}
                            >
                                Login
          </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

const onFinish = (values) => {
  console.log("Success:");
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default Login;
