// import React, { useContext, useEffect, useRef, useState, memo } from "react";
// import { Row, Col } from "antd";
// import { apiCallback } from "../services/http.js";


// const style = { background: "#0092ff", padding: "8px 0" };

// function CryptoDetails() {
//   const [infoCrypto, setInfoCrypto] = useState({});

//   useEffect(() => {
//     apiCallback("global/")
//       .then((res) => {
//         console.log(res.data[0]);
//         setInfoCrypto(res.data[0]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);



//   return (
//     <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//       <Col className="gutter-row" span={4}>
//         <div style={style}>Cryptocurrencies: {infoCrypto.coins_count}</div>
//       </Col>
//       <Col className="gutter-row" span={4}>
//         <div style={style}>Markets:{infoCrypto.active_markets}</div>
//       </Col>
//       <Col className="gutter-row" span={4}>
//         <div style={style}>Market Cap:{infoCrypto.mcap_ath}</div>
//       </Col>
      
//       <Col className="gutter-row" span={4}>
//         <div style={style}>24h Vol:{infoCrypto.total_volume}</div>
//       </Col>
//       <Col className="gutter-row" span={4}>
//         <div style={style}>BTC Dominance:{infoCrypto.btc_d}</div>
//       </Col>
//       <Col className="gutter-row" span={4}>
//         <div style={style}>ETH Dominance{infoCrypto.btc_d}</div>
//       </Col>
//     </Row>
//   );
// }

// export default CryptoDetails;
