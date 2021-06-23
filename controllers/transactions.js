const transactions = require("express").Router();
const transactionsArray = require("../models/transaction");


transactions.get("/", (req, res) => {
    res.json(transactionsArray)
});

transactions.get("/:arrayIndex", (req, res) => {
    const transaction = transactionsArray[req.params.arrayIndex]
    if(transaction) {
        res.json(transaction);
    } else {
        res.redirect("/404");
    }
});

transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
});

transactions.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    const { body } = req;
    transactionsArray[arrayIndex] = body;
    res.json(transactionsArray[arrayIndex]);
})

transactions.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    const deletedTransaction = transactionsArray.splice(arrayIndex, 1);
    res.json(deletedTransaction);
});

module.exports = transactions;