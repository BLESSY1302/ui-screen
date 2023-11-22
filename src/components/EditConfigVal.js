import React from "react";
import { Card, Button, Form, Input, DatePicker } from "antd";
import { Flex } from "antd";

const EditConfigVal = () => {
  const [componentSize, setComponentSize] = React.useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  // Define a custom style object for inputs
  const customInputStyle = { borderColor: "#00008B", borderRadius: "2px" };

  return (
    <Flex justify="center">
      <Card
        title="Edit Configuration Value"
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
          initialValues={{
            size: componentSize
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          
         <Form.Item label="Configuration Name" name="configName">
                      <Input style={customInputStyle} readOnly="readOnly"/>
         </Form.Item>

{/*         <Form.Item label="Value 1" name="value1"
            rules={[
              { type: 'number', message: 'Please enter a valid number' },
              { required: true, message: 'Please enter a number' },
            ]}
         >
           <Input style={customInputStyle} type="number" />
         </Form.Item>*/}

                  <Form.Item label="Value" name="value"
                      rules={[
                          { required: true, message: 'Please enter a value' }
                      ]}
                  >
                      <Input style={customInputStyle} />
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

export default EditConfigVal;
