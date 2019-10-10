var Expense = require('../models/expense');

module.exports = {
    createExpense,
    expenseItems,
}

async function createExpense(req, res) {
    try {
        let newExpense = new Expense(req.body);
        newExpense.user = req.user.id;
        await newExpense.save();
        res.json(newExpense);
    } catch(err) {
        res.status(400).json(err);
    }
}

async function expenseItems(req, res) {
    const expenses = await Expense.find({});
    res.json(expenses);
}