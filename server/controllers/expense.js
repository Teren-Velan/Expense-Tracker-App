const Expense = require("../models/Expense.model");
const User = require("../models/User.model");

// @desc    Add transaction
// @route   POST /api/v1/expense/addexpense
let addExpense = async (req, res) => {
  // console.log("req.body", req.body)
  // console.log("req.user" , req.user)
  try {
    let newExpense = new Expense(req.body);
    let user = await User.findById(req.user._id);
    //  console.log("user" , user)
    newExpense.user = user;
    //   console.log("newExpense" , newExpense)
    let category = user.expense_categories.find(
      (category) => category.name === req.body.category.name.trim()
    );
    if (!category) {
      user.expense_categories.push(req.body.category);
      await user.save();
      category = user.expense_categories.find(
        (category) => category.name === req.body.category.name.trim()
      );
    }
    newExpense.category = category;
    await newExpense.save();
    return res.json(newExpense);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
};

// @desc edit transaction
// @route PUT /api/v1/expense/editexpense:id
let editExpense = async (req, res) => {
  const { amount, description, category } = req.body;
  //   console.log(req.params.id);
  try {
    let expense = await Expense.findById(req.params.id).populate("user", "id");
    console.log("expense", expense);
    if (!expense) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    let hasAuthorization = expense.user.id == req.user._id;
    if (!hasAuthorization) {
      return res.status(401).json({ error: "You don't have permission" });
    }
    expense = await Expense.findByIdAndUpdate(
      req.params.id,
      {
        amount,
        description,
        category,
      },
      { new: true }
    );
    return res.json(expense);
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
  }
};

// @desc delete transaction
// @route delete /api/v1/expense/deleteexpense:id

let deleteExpense = async (req, res) => {
  try {
    let expense = await Expense.findById(req.params.id).populate("user", "id");

    if (!expense) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    let hasAuthorization = expense.user.id == req.user._id;
    if (!hasAuthorization) {
      return res.status(401).json({ error: "You don't have permission" });
    }

    await expense.remove(req.params.id);

    return res.json({ success: true });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

// @desc get one transaction
// @route get /api/v1/expense/getoneexpense/:id
let getOneExpense = async (req, res) => {
  try {
    if (req.params.id) {
      let expense = await Expense.findById(req.params.id).populate("user", "id");
      let hasAuthorization = expense && expense.user.id == req.user._id;
      if (!hasAuthorization) {
        return res.status(401).json({
          error:
            "Permission Denied",
        });
      } else {
        return res.json(expense);
      }
    }
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

// @desc get one transaction
// @route get /api/v1/expense/getallexpense/
let getAllExpense = async(req,res) => {
  console.log(req)
    try{
        let expense = await Expense.find({
            user: await User.findById(req.user._id)
        });
        return res.json(expense);
      
    }catch(e){
        console.log(e)
        return res.status(400).json({ error: e })
    }
};


module.exports = {
  addExpense,
  editExpense,
  deleteExpense,
  getOneExpense,
  getAllExpense
};


