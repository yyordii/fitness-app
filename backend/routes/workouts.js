const express = require('express');
const router = express.Router();
const Workouts = require('../models/Workout');

// Create a new workout
router.post('/', async (req, res) => {
    try {
        const workout = new Workouts(req.body);
        await workout.save();
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all workouts
router.get('/', async (req, res) => {
    try {
        const workouts = await Workouts.find();
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.get('/:userId', async (req, res) => {
    try {
        const workouts = await Workouts.find({ user: req.params.userId });
        if (!workouts) {
            return res.status(404).json({ error: 'No workouts found for this user' });
        }
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get a workout by ID
router.get('/:id', async (req, res) => {
    try {
        const workout = await Workouts.findById(req.params.id);
        if (!workout) {
            return res.status(404).json({ error: 'Workouts not found' });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a workout
router.put('/:id', async (req, res) => {
    try {
        const workout = await Workouts.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workout) {
            return res.status(404).json({ error: 'Workouts not found' });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a workout
router.delete('/:id', async (req, res) => {
    try {
        const workout = await Workouts.findByIdAndDelete(req.params.id);
        if (!workout) {
            return res.status(404).json({ error: 'Workouts not found' });
        }
        res.status(200).json({ message: 'Workouts deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;