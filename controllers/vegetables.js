const express = require('express');
const router = express.Router();
const Vegetable = require('../models/vegetables.js');

//Model goes here

// Index
router.get('/', (req,res)=>{
    // res.render('vegetables/Index');
    Vegetable.find({}, (error, allVegetables)=>{
        res.render('vegetables/Index', {
            vegetables: allVegetables,
        });
    });
});

// New
// GET /vegetables/new
router.get('/new', (req,res) => {
    res.render('vegetables/New')
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Vegetable.findByIdAndRemove(req.params.id, (err, vegetable) => {
        res.redirect('/vegetables');
    });
});


// Update
router.put('/:id', (req, res) => {
    req.body.isGreen = req.body.isGreen === 'on' ? true : false;
    Vegetable.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel)=>{
        res.redirect('/vegetables');
    });
});

// Create
// POST /vegetables
router.post('/', (req, res)=>{
    if (req.body.isGreen === "on"){
        req.body.isGreen = true;
    } else {
        req.body.isGreen = false;
    }
    // Use MOdel to create Vegetable Documnet
    Vegetable.create(req.body, (error, createdVegetable) => {
        // once created - respond to client
        res.redirect('/vegetables');
    })
});

// Edit
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        // render the edit view and pass it the foundVegetable
        res.render('vegetables/Edit', {
            vegetable: foundVegetable
        })
    });
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Vegetable.findById(req.params.id, (error, foundVegetable) => {
        // render the Show route and pass it the foundVegetable
        res.render('vegetables/Show', {
            vegetable: foundVegetable
        });
    });
});


module.exports = router;//  node js is letting us do the exports