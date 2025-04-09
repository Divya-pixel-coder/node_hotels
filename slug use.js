const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('welcome to my hotel... how i can help u')
})

app.get('/paratha',(req,res) => {
    res.send('sure sir, i would like to serve paratha')
})
app.get('/menu/:slug',(req,res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`yeah ${req.params.slug} is available`)
})
app.listen(3000,() => {
 
    console.log("listening on port 3000");
})