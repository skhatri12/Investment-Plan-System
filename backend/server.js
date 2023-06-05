import express from 'express';
import cors from 'cors';
import connectDB from './db/connectDB.js';
import userRegistrationModel from './models/userModel.js';
// import userSigninModel from './models/userSignin.js';
import router from './routes/Authroute.js';
const port = 5000;
const app = express();

const DATABASE_URL = "mongodb://localhost:27017";

//connection databsse
connectDB(DATABASE_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
userRegistrationModel();

app.use("/auth", router);

app.listen(port, () => {
  console.log(`Server runs at http://localhost:${port}`);
});