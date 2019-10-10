var Expense = require('../models/expense');

module.exports = {
    createExpense,
    expenseItems,
}

async function createExpense(req, res) {
    console.log('user: ', req.user)
    try {
        await Expense.createExpense(req.body);
        expenseItems(req, res);
    } catch(err) {
        res.json({err});
    }
}

async function expenseItems(req, res) {
    const expenses = await Expense.find({});
    res.json(expenses);
}