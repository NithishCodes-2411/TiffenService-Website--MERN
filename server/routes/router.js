const express = require("express");
const {verifyUser , userRegisteration}  = require ("../controllers/CreateUser-controller");
const router = express.router();


router.post("/verifyUser" ,  verifyUser);
router.post("/userRegisteration" , userRegisteration);




 
