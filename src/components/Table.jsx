import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const TableCoin = (bodyTable) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {bodyTable.titles &&
              Object.values(bodyTable.titles).map((name, index) => {
                return <th key={index}>{name.name}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {bodyTable.dynamic
            ? Object.values(bodyTable.bodyTable).map((field, index) => {
                return (
                  <tr key={index} onClick={(e) => bodyTable.click(field, e)}>
                    <td>{field.name}</td>
                    <td>{field.price_usd}</td>
                    <td>{field.percent_change_1h}</td>
                    <td>{field.percent_change_24h}</td>
                    <td>{field.percent_change_7d}</td>
                    <td>{field.market_cap_usd}</td>
                    <td>{field.volume24}</td>
                  </tr>
                );
              })
            : Object.values(bodyTable.bodyTable).map((field, index) => {
                return (
                  <tr key={index} onClick={(e) => bodyTable.click(field, e)}>
                    <td>{field.name}</td>
                    <td>{field.base}/{field.quote}</td>
                    <td>{field.volume}</td>
                    <td>{field.price_usd}</td>
                    <td>{field.volume_usd}</td>
                    <td>{field.time}</td>
                  </tr>
                );
              })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableCoin;
