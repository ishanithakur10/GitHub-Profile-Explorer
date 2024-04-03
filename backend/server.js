import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session  from "express-session";
import path from"path";

import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import connectMongoDB from "./db/connectMongoDB.js";
import authRoutes from "./routes/auth.route.js";


import "./passsport/github.auth.js"

const app = express();
const PORT=process.env.PORT ||5000;
const __dirname=path.resolve();

dotenv.config();

app.use(session({secret:'keyboard cat',resave:false,saveUninitialized:false}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

// app.get("/",(req,res)=>{
//   res.send("server is ready");
// })

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")));

//wildcard
app.get("*",(req,res)=>{
res.send(path.join(__dirname,"frontend","dist","index.html"));
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
