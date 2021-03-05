const http = require('http');
const fs = require('fs');

fs.readFile('./txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    var dataArr = data.toString('utf8').split('');  
    var i;
    var count = 0;
    var msg;
    for(i = 0; i<dataArr.length; i++){
        switch(dataArr[i]){
            case '(':
                count++;
                break;
            case '[':
                count++;
                break;
            case '{':
                count++;
                break;
            case ')':
                count--;
                break;
            case ']':
                count--;
                break;
            case '}':
                count--;
                break;
        }
    }
    if(count==0){
        msg = "archivo correcto";
    }
    else{
        msg = "archivo incorrecto";
    }
    console.log(msg);
})

http.createServer(function (req, res) {
    res.write('{ "hello":"'+req.url+'"}'); 
    res.end(); 
}).listen(8080);