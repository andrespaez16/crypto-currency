import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Masters } from "../services/domains/master";
import { useNavigate } from "react-router-dom";
import currency from 'currency.js';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    InputGroup,
    FormControl,
    Table,
  } from "react-bootstrap";
  import TableCoin from "../components/Table";
  import { Spinner } from "react-bootstrap";
  

export const Exchange = () => {
    const params = useParams();
    const [infoCoin, setInfoCoin] = useState({});
    const [coinValue, setCoinValue] = useState(0);
    const [coinPrice, setCoinPrice] = useState(0);
    const [coinStats, setCoinStats] = useState("");
    const [markets, setMarktest] = useState({});
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    const headerTable = [
        { name: "name" },
        { name: "Pair" },
        { name: "24h Volume" },
        { name: "Price" },
        { name: "Volume" },
        { name: "Time" },
      ];

      useEffect(() => {
        getInfoExchange();
      }, []);


      const getInfoExchange = async () => {
        // const master = new Masters();
        // const response = await master.getExchange(params.exchangeId);
        fetch('https://api.coinlore.net/api/exchange/?id=5').then(resp=>{
            return resp.json()
        }).then(response=>{
            console.log(response,'estoy dentro la vuelta')
        })
        // if (response && response.data[0]) {
        //   await setInfoCoin(response.data[0]);
        // } else {
        //   setInfoCoin({});
        // }
      };

    return (
        <div>
            <h1>hola </h1>
        </div>
    )
}
export default Exchange;