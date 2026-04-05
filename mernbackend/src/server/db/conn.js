const mongoose = require("mongoose");
mongoose.set('strictQuery',false);

 const connectDB = mongoose.connect("mongodb+srv://MeetZadafiya:Meet_1234@carrentalservice.jymbl.mongodb.net/?retryWrites=true&w=majority&appName=CarRentalService",{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
})
module.exports = connectDB