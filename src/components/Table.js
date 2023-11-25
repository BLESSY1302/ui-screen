import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Table = (props) => {
    const { data } = props;

    function editConfig(id) {
        window.location.href = `/editconfig/?id=${id}`
    }

  return (
    <table>
      <thead>
        <tr>
          <th>CATEGORY</th>
          <th>CONFIGURATION NAME</th>
          <th>DISPLAY NAME</th>
          <th>DATATYPE</th>
          <th>DESCRIPTION</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
                <td class="a">{item.category}</td>
            <td class="b">{item.configName}</td>
                <td class="c">{item.displayName}</td>
                <td class="d">{item.dataType}</td>
                <td class="e">{item.configDescription}</td>
                <td class="f">
                    <Button type="button" id="editConfigButton" onClick={()=>editConfig(item.id)}>
                        EDIT
                    </Button>                       
                    <Button type="button" id="deleteConfigButton" value={item.id}>
                         DELETE
                    </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;