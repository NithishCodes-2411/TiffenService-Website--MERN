const mongoose = require("mongoose");
const DataBase_URL = "mongodb+srv://nituu2411:UoM96J6wpblKMhiZ@cluster0.tqmdo7f.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DataBase_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("mongodb connected");
})
.catch(() => {
    console.log('failed');
})