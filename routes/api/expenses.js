const express = require('express');
const router = express.Router();
const expenseCtrl = require('../../controllers/expenses');

router.get('/', expenseCtrl.expenseItems);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, expenseCtrl.createExpense);


module.exports = router;
