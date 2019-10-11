var Expense = require('../models/expense');

module.exports = {
    createExpense,
    delete: deleteOne,
    update,
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


async function deleteOne(req, res) {
    const deletedExpense = await Expense.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedExpense);
  }
  
  async function update(req, res) {
    const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedExpense);
  }