const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
  
// Configuration
const PORT = 8080;
const HOST = "localhost";
const { API_WEATHER_BASE_URL } = process.env;
const { API_WEATHER_KEY_VALUE } = process.env;
const { API_EX_BASE_URL } = process.env;
const { API_EX_KEY_VALUE } = process.env
const API_WEATHER_SERVICE_URL = `${API_WEATHER_BASE_URL}?q=London&appid=${API_WEATHER_KEY_VALUE}`;

const db = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'sql_web_test'
});

  
const getLiveCoin = async() => {
    let x;
    await fetch(new Request(API_EX_BASE_URL), {
    method: "POST",
    headers: new Headers({
        "content-type": "application/json",
        "x-api-key": API_EX_KEY_VALUE,
    }),
    body: JSON.stringify({
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 10,
        meta: false,
    })
    
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        x = data;
        console.log(data);
        return data;
    })
    return x;
}
  
// Proxy Logic :  Proxy endpoints
app.use(
    "/weather",
    createProxyMiddleware({
        target: API_WEATHER_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
            "^/weather": "",
        },
    })
);

app.get("/live", async(req, res) => {
    res.send(await getLiveCoin());
});

app.post('/addUser', (req, res) => {
    const name = req.body.name;
    const auth_id = req.body.authID;
    db.query("SELECT * FROM users WHERE auth_id = ?", [auth_id], (err, result) => {
        if(err) throw err;
        else {
            console.log(result);
            if(!(result === [])) {
                db.query("INSERT INTO users (name, auth_id) VALUES (?, ?)", [name, auth_id], (err, result) => {
                    if(err) throw err;
                    else {
                        res.send("Addition Success");
                    }
                })
            }
            else {
                res.send("ERR 11111010 01111010 01010101");
            }
        }
    })
})

  
// Starting our Proxy server
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
