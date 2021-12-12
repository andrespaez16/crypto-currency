import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Table = (titles,bodyTable) => {
  return (
    <div>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
        {bodyTable &&
            Object.values(bodyTable).map((field, index) => {
              return (
                <tr key={index} onClick={(e) => redirectToCoin(coin, e)}>
                  <td>{field.name}</td>
                  <td>{field.price_usd}</td>
                  <td>{field.percent_change_1h}</td>
                  <td>{field.percent_change_24h}</td>
                  <td>{field.percent_change_7d}</td>
                  <td>{field.market_cap_usd}</td>
                  <td>{field.volume24}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Table;
