const fs = require('fs');
const dbhelper=require('./db_helper');
const { logd } = require('./logger');

let rawdata = fs.readFileSync('data.json');
let jsonData = JSON.parse(rawdata);
logd("question holder")
logd("--------------")
// logd(jsonData);


function sendQuestion(req,res){
    logd(req.query.category)
    logd(req.query.subcategory)
    logd(req.query.noqs)
    if(req.query.category!==undefined){
        let qset=dbhelper.getQuestion(req.query,(result)=>{
            logd("result came")
            //logd(result)
            res.send(JSON.stringify(result))
        })
        //res.send(JSON.stringify(qset))
    }else{
        logd("sending default data")
        logd(jsonData)
        res.send(JSON.stringify(jsonData))
    }
    
}

module.exports={sendQuestion}