/*const express = require("express");
const {verifyUser , userRegisteration}  = require ("../controllers/CreateUser-controller");
const router = express.Router();
router.post("/verifyUser" ,  verifyUser);
router.post("/userRegisteration" , userRegisteration);
const  https = require('https')
const http = require('http')
const app = express()
http.createServer(app).listen(80);*/
const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://nituu2411:UoM96J6wpblKMhiZ@cluster0.tqmdo7f.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })

const express = require("express")

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const { verifyUser, userRegisteration } = require("../controllers/CreateUser-controller");
const { userLogin } = require("../controllers/Login- controllers");
const { forgotPassword } = require("../controllers/ForgetPassword-controller")



app.post("/verifyUser", verifyUser);
app.post("/userRegisteration", userRegisteration);
app.post("/login", userLogin);
app.post("/forgotPassword" , forgotPassword);

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(8000, () => {
    console.log("port connected");
})
