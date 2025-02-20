const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    videoUrl: { type: String },
    imageUrl: { type: String },
    isPrivate: { type: Boolean, default: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Workout', WorkoutSchema);