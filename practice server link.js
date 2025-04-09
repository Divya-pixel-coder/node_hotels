const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3001;

app.get('/', function (req, res) {
  res.send('welcome to my hotel... how i can help u')
})

app.get('/paratha',(req,res) => {
    res.send('sure sir, i would like to serve paratha')
})

app.get('/idli',(req,res) => {
    var customized_idli={
        name:'rava idli',
        size:'10cm diameter',
        is_sambhar:true,
        is_chuutney:false
    }
    res.send(customized_idli)
    res.send('welcome to south india and would love to would you  more')
})

app.listen(3000,() => {
  console.log("listening on port 3000");
  
}
)
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });