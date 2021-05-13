const express = require("express");
const router = express.Router();
const {
  addExpense,
  editExpense,
  deleteExpense,
  getOneExpense,
  getAllExpense,
} = require("../controllers/expense");
const { requireSignin } = require("../controllers/auth");

router.post('/addexpense' ,requireSignin, addExpense)
router.put('/editexpense/:id' ,requireSignin, editExpense)
router.delete('/deleteexpense/:id' ,requireSignin, deleteExpense)
router.get('/getoneexpense/:id' ,requireSignin, getOneExpense)
router.get('/getallexpense' ,requireSignin, getAllExpense)

module.exports = router
