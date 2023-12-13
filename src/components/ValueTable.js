import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const ValueTable = (props) => {
  const { data } = props;
    const shouldRenderContent = true;
  return (
    <table>
      <thead>
        <tr>
           <th>CONFIG NAME</th>
                  <th>CONFIG VALUE</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
                
            <td class="b">{item.configName}</td>
                <td class="f">{item.configValue}</td>
                <td class="g">
                     { item.configValue ? (
                        <Link id={`editConfigVal_${item.id}`} to={`/editconfigval?id=${item.id}`} style={{
                            position: "static"
                        }}>EDIT</Link>
                    ) : (
                            <Link id={`addConfigVal_${item.id}`} to={`/createconfigval?id=${item.id}`} style={{
                                position: "static"
                            }}>ADD</Link>
                    )}
                    <Link id={`deleteConfigVal_${item.id}`} to={`/deleteconfigval?id=${item.id}`} style={{
                        marginLeft: 50,
                        position: "static"
                    }}>DELETE</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ValueTable;