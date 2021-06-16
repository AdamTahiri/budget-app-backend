const transactions = require("express").Router();
const transactionsArray = require("../models/transaction");


transactions.get("/", (req, res) => {
    res.json(transactionsArray)
});

transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
});

module.exports = transactions;