const webSockServer=require('websocket').server
const http=require('http')

const clients={};
const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let jsonData = JSON.parse(rawdata);
//console.log(jsonData);

const socServer=new webSockServer({
  httpServer: server
})

const generateUID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};

socServer.on('request',function(req){
  let uid=generateUID()
  console.log("Received new connection from "+req.origin)
  const connection=req.accept(null,req.origin)
  connection.close
  clients[uid]=connection

  console.log('connected: ' + uid)

  connection.on('message',function(msg){
    if(msg.type=='utf8'){
      let message=0
      console.log(msg)
      try{
        message=JSON.parse(msg.utf8Data)
      }catch(e){
        console.log("error:-"+e)
        message=msg.utf8Data
      }
      console.log(message)
      if(message=='giveData'){
        connection.sendUTF("takeData")
        connection.send(JSON.stringify(jsonData))
      }
    }
  })
})