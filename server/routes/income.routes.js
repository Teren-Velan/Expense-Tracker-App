const express = require('express')
const router = express.Router()
const { addIncome, editIncome , deleteIncome , getOneIncome , getAllIncome} = require("../controllers/income");
const {requireSignin} = require("../controllers/auth");


router.post('/addincome' ,requireSignin, addIncome)
router.put('/editincome/:id' ,requireSignin, editIncome)
router.delete('/deleteincome/:id' ,requireSignin, deleteIncome)
router.get('/getoneincome/:id' ,requireSignin, getOneIncome)
router.get('/getallincome' ,requireSignin, getAllIncome)





module.exports = router