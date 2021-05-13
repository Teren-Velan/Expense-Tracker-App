const Income = require("../models/Income.model");
const User = require("../models/User.model");

// @desc    Add transaction
// @route   POST /api/v1/income/addincome
let addIncome = async (req, res) => {
  // console.log("req.body", req.body)
  // console.log("req.user" , req.user)
  try {
    let newIncome = new Income(req.body);
    let user = await User.findById(req.user._id);
    //  console.log("user" , user)
    newIncome.user = user;
    //   console.log("newIncome" , newIncome)
    let category = user.income_categories.find(
      (category) => category.name === req.body.category.name.trim()
    );
    if (!category) {
      user.income_categories.push(req.body.category);
      await user.save();
      category = user.income_categories.find(
        (category) => category.name === req.body.category.name.trim()
      );
    }
    newIncome.category = category;
    await newIncome.save();
    return res.json(newIncome);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
};

// @desc edit transaction
// @route PUT /api/v1/income/editincome:id
let editIncome = async (req, res) => {
  const { amount, description, category } = req.body;
  //   console.log(req.params.id);
  try {
    let income = await Income.findById(req.params.id).populate("user", "id");
    console.log("income", income);
    if (!income) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    let hasAuthorization = income.user.id == req.user._id;
    if (!hasAuthorization) {
      return res.status(401).json({ error: "You don't have permission" });
    }
    income = await Income.findByIdAndUpdate(
      req.params.id,
      {
        amount,
        description,
        category,
      },
      { new: true }
    );
    return res.json(income);
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
  }
};

// @desc delete transaction
// @route delete /api/v1/income/deleteincome:id

let deleteIncome = async (req, res) => {
  try {
    let income = await Income.findById(req.params.id).populate("user", "id");

    if (!income) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    let hasAuthorization = income.user.id == req.user._id;
    if (!hasAuthorization) {
      return res.status(401).json({ error: "You don't have permission" });
    }

    await income.remove(req.params.id);

    return res.json({ success: true });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

// @desc get one transaction
// @route get /api/v1/income/getoneincome/:id
let getOneIncome = async (req, res) => {
  try {
    if (req.params.id) {
      let income = await Income.findById(req.params.id).populate("user", "id");
      let hasAuthorization = income && income.user.id == req.user._id;
      if (!hasAuthorization) {
        return res.status(401).json({
          error:
            "Permission Denied",
        });
      } else {
        return res.json(income);
      }
    }
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

// @desc get one transaction
// @route get /api/v1/income/getallincome/
let getAllIncome = async(req,res) => {
    try{
        let income = await Income.find({
            user: await User.findById(req.user._id)
        });
        return res.json(income);
      
    }catch(e){
        console.log(e)
        return res.status(400).json({ error: e })
    }
};


module.exports = {
  addIncome,
  editIncome,
  deleteIncome,
  getOneIncome,
  getAllIncome
};


