import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

const Delete = () => (
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
        type="primary"
        style={{ marginRight: "90px", backgroundColor: "#00008B" }}
      >
        Yes
      </Button>
      <Button type="primary" style={{ backgroundColor: "#00008B" }}>
        No
      </Button>
      <Link to="/create"></Link> {/* Link to the Create page */}
    </Card>
  </div>
);

export default Delete;
