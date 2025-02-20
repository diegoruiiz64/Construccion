require('dotenv').config(); // Load environment variables

const express = require('express');
const app = express();
const usersRouter = require("./app/routers/userRouter");

const apiKey = process.env.API_KEY; // Acceder a la variable de entorno API_KEY

app.use(express.json()); // Middleware to parse JSON bodies

// Routes
app.use("/api", usersRouter); // Set up routes to use usersRouter

//port config
const PORT = process.env.PORT || 3380;
     app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`); // Log message when server starts
})