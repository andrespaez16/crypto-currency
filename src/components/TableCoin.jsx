import React from "react";
import { Table } from "react-bootstrap";
import currency from 'currency.js';

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
                    <td>{currency(field.price_usd).format()}</td>
                    <td>{field.percent_change_1h}</td>
                    <td>{field.percent_change_24h}</td>
                    <td>{field.percent_change_7d}</td>
                    <td>{currency(field.market_cap_usd).format()}</td>
                    <td>{currency(field.volume24).format()}</td>
                  </tr>
                );
              })
            : Object.values(bodyTable.bodyTable).map((field, index) => {
                return (
                  <tr key={index}>
                    <td>{field.name}</td>
                    <td>{field.base}/{field.quote}</td>
                    <td>{currency(field.volume).format()}</td>
                    <td>{currency(field.price_usd).format()}</td>
                    <td>{currency(field.volume_usd).format()}</td>
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
