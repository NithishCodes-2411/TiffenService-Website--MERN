const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://nituu2411:UoM96J6wpblKMhiZ@cluster0.tqmdo7f.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })
