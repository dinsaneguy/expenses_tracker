const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense")

// Add an expense
router.post("/", async (req, res) => {
    // console.log(req.body);
    try {
        const newexpense = await Expense(req.body); //request.body
        const expense = newexpense.save();
        res.status(201).json(expense)
    } catch (error) {
        res.status(500).json(error);
    }
})

// get all expenses

router.get("/", async (req, res) => {
    try {
        const expenses =await Expense.find().sort({ createdAt: 1 });

        res.status(200).json( expenses )


    } catch (error) {
        res.status(500).json(error)
    }
})

// update an expense
router.put("/:id", async (req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }
        );

        if(!expense){
            return res.status(404).json({message: "Expense not found"});
        }
        res.status(201).json(expense)
    } catch (error) {
        // res.status(500).json(error);
        console.error(error); // Log the error for better debugging
        res.status(500).json({ message: "Error updating expense", error: error.message });
    
    }
})
// Delete an expense
router.delete("/:id",async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.status(201).json("Deleted Successfully");
    } catch (error) {
        res.status(500).json(error);
        
    }
});

module.exports = router;