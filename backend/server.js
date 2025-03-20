const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/users");
const cookieparser = require("cookie-parser");
require("dotenv").config();

app.use(cors({
    origin: 'http://localhost:3000', // 🔥 Specifieke origin (NIET '*')
    credentials: true // 🔥 Noodzakelijk voor cookies!
}));

app.use(express.json());
app.use (cookieparser());

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.use("/api/workouts", workoutRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
