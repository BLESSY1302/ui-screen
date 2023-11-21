import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Table = (props) => {
  const { data } = props;

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
                    <Link
                        to={'/editConfig'}
                        state="{id:1}">Learn More</Link> 
                       
                    <Button type="button" id="deleteConfigButton" value="{item.id}">
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