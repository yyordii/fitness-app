const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Name of the workout
    muscleGroup: { type: String, required: true }, // Muscle group
    sets: { type: Number, required: true }, // Number of sets
    reps: { type: Number, required: true }, // Number of reps
    weight: { type: Number, required: true }, // Weight used
    unit: { type: String, required: true }, // Unit of weight (kg/lbs)
    date: { type: Date, default: Date.now }, // Date of the workout
    notes: { type: String }, // Notes for the workout
    isPrivate: { type: Boolean, default: true }, // Privacy setting
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // User ID
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

module.exports = mongoose.model("Workout", WorkoutSchema);
