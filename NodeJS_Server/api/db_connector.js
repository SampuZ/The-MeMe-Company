const { logd } = require('./logger');

//ConnectDB
const mongoose = require('mongoose');
const uri = "mongodb+srv://Sampu:<password>@cluster1.pp19ud4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
const QuestionSetModel = mongoose.model('AnyNameNoMatter', mongoose.Schema({},{strict: false}), "QuestionSet")//Collection

var isDBConnected=false

function ConnectDB(callback) {
    logd("connecting to mongdodb")
    mongoose.connect(uri, {dbName: "ExamDB"});
    
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        logd("we're connected!")
        isDBConnected=true
        QuestionSetModel.find(filter).lean().exec().then(result => {
            logd("filter="+JSON.stringify(filter))
            callback(result);
        })
    });
}

var filter=null

function getQuestion(query, callback) {
    logd(query.category+" & "+query.noqs+" & "+query.subcategory)
    if(query.category=='CS'){
        query.category="CS&IT"  //Exception for CS Subjects only
    }
    if(query.subcategory===undefined){
        filter={
            "category":query.category
        }
    } else {
        filter={
            "category":query.category,
            "subcategory":query.subcategory
        }
    }
    if(isDBConnected){
        QuestionSetModel.find(filter).lean().exec().then(result => {
            logd("filter="+JSON.stringify(filter))
            callback(result);
        })
    }else{
        ConnectDB(callback)
    }
}

module.exports={getQuestion}