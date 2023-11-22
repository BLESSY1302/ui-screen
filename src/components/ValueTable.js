import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const ValueTable = (props) => {
  const { data } = props;

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
{/*                    <Link
                        to={'/addConfigVal'}
                        state="{id:1}">ADD VALUE</Link>
                    <Link
                        to={'/editConfigVal'}
                        state="{id:1}">EDIT</Link> 
                    <Link
                        to={'/deleteConfigVal'}
                        state="{id:1}">DELETE</Link>*/}
                    <Button type="button" id="addConfigValButton" value="addval_{item.id}">
                        ADD
                    </Button>
                    <Button type="button" id="editConfigValButton" value="editval_{item.id}">
                        EDIT
                    </Button>
                    <Button type="button" id="deleteConfigValButton" value="deleteval_{item.id}">
                        DELETE
                    </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ValueTable;