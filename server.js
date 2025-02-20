const express = require('express');
const app = express();
const usersRouter = require("./app/routers/userRouter");
const dotenv = require("dotenv");
app.use(express.json());


// Routes
app.use("/api", usersRouter);

//port config
const PORT = process.env.PORT || 3380;
     app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
})