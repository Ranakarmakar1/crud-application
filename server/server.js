let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
const enquiryRouter = require('./App/routes/web/enquiryRoutes');
require('dotenv').config();

const app= express();
app.use(cors());


app.use(express.json());


//Route
app.use('/api/website/enquiry',enquiryRouter);


//connect to mongoDB
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to mongoDB');

    app.listen(process.env.PORT||3000,()=>{
        console.log('server is running ');
    })
}).catch((err)=>{
    console.log(err);
});