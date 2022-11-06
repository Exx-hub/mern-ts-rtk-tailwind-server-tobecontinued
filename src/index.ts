import mongoose from "mongoose";
import { app } from "./app";

const port: string | undefined = process.env.PORT;

const uri = process.env.MONGOURI;

// const options: mongoose.ConnectOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }

const startServer = async () => {
  try {
    await mongoose.connect(uri!); // refer to below
    console.log("Connected to DB");
    app.listen(port, () => console.log(`Server running on port:${port}`));
  } catch (error) {
    console.log("Failed to connect.");
    console.error(error);
  }
};

startServer();

// process.env variable is string or undefined
// mongoose connect does not accept this, but only accepts string
// so you add a postfix ! , tells TS that you know for sure this is not undefined.
// postfix or exclamation point after
// In TypeScript, a postfix ! removes null and undefined from the type of an expression.
// This is useful when you know, for reasons outside TypeScript's inference ability, that a variable that "could" be null or undefined actually isn't.
