const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

 app.get('/', (req, res) => {
 	res.sendFile(__dirname + '/index.html');
 });


app.post('/api/login', (req, res) => {

	var body = ''
	req.on('data', function(data) {
		body += data
	})

    req.on('end', function() {
		console.log(body)
		jsonData=JSON.parse(body)
		
		username=jsonData.username
		password=jsonData.password
		console.log('Body: ' + username+" "+password)

		userData=''
		if(username=='sampu' && password=='12345'){
			userData="Welcome: Anupam Roy"
		}else{
			userData='Error! wrong credentials or user doesn\'t exist.'
		}
	  	res.send("server >>> "+userData);
	})

});

app.get('/getData', (req, res) => {
 	res.sendFile(__dirname + '/package-lock.json');
 });


const port = 8085;

const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});