var Expense = require('../models/expense');

module.exports = {
    createExpense,
    expenseItems,
}

async function createExpense(req, res) {
    try {
        await Expense.createExpense(req.body);
        expenseItems(req, res);
    } catch(err) {
        res.json({err});
    }
}

// no idea what i'm doing - trying to save expense items in container
async function expenseItems(req, res) {
    const expenses = await Expense.find({});
    res.json(expenses);
}