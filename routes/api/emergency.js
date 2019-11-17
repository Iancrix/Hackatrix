const express = require('express');
const router = express.Router();

const Emergency = require('../../models/Emergency');

// @route   GET api/emergency
// @desc    Get All Emergencies
// @access  Public
router.get('/', (req, res) => {
    Emergency.find()
      .sort({ date: -1 })
      .then(items => res.json(items));
  });

// @route   POST api/emergency
// @desc    Create An Emergency
// @access  Private
router.post('/', (req, res) => {
    const newItem = new Emergency({
      type: req.body.type,
      name: req.body.name
    });
  
    newItem.save().then(item => res.json(item));
  });

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', (req, res) => {
    Emergency.findById(req.params.id)
      .then(item => item.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

module.exports = router;