import mongoose from "mongoose";

let nowTime = new Date().getTime() + (3600000*9);

const MyLogSchema = new mongoose.Schema({
    userId : {type: String, required: true},
    contents : [{
        createdAt : {type : Date, required: true, default: new Date(nowTime)},
        logText : String, 
        logId : Number
    }],
});

const MyLog = mongoose.model("MyLog", MyLogSchema);

export default MyLog;