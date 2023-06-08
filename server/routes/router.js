/*const express = require("express");
const {verifyUser , userRegisteration}  = require ("../controllers/CreateUser-controller");
const router = express.Router();
router.post("/verifyUser" ,  verifyUser);
router.post("/userRegisteration" , userRegisteration);
const  https = require('https')
const http = require('http')
const app = express()
http.createServer(app).listen(80);*/

const express = require("express")

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const {verifyUser , userRegisteration}  = require ("../controllers/CreateUser-controller");
const {userLogin} = require("../controllers/Login- controllers");
const router = express.Router();


router.post("/verifyUser" ,  verifyUser);
router.post("/userRegisteration" , userRegisteration);
router.post("/login" , userLogin);

app.listen(8000, () => {
    console.log("port connected");
})
