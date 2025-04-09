const express = require('express')
const app = express();
const db =require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());//stores in req.body




app.get('/', function (req, res) {
  res.send('welcome to my hotel... how i can help u')
})
//post route to add a person
// app.post('/person',(req,res)=>{
  // const data=req.body//assuming the request body contains the person data    

//   //create a new person document  using the mongoose model
//   // const newPerson=new person();
//   //this is very complex for large data like 50 fields
//   // newPerson.name=data.name;
//   // newPerson.age=data.age;
//   // newPerson.mobile=data.mobile;
//   // newPerson.address=data.address;
//   // newPerson.email=data.email;

//   // so we write it like this
//   const newPerson=new Person(data);


//   //save the new person to the database
//   newPerson.save((error,savedPerson)=>{
//     if(error){
//       console.log('error saving person: ',error);
//       res.status(500).json({error:'internal server error'});
//     }
//     else{
//       console.log('data saved successfully');
//       res.status(200).json(savedPerson);
//   }
//   })
// })
// });

//in upper one callback is used







app.get('/paratha',(req,res) => {
    res.send('sure sir, i would like to serve paratha')
})




app.get('/idli',(req,res) => {
    var customized_idli={
        name:'rava idli',
        size:'10cm diameter',
        is_sambhar:true,
        is_chutney:false
    }
    res.send(customized_idli)
    res.send('welcome to south india and would love to would you  more')
})
app.post('/items',(req,res) => {
  // console.log('data is saved');
  res.send('data is saved');
}
)




 


//import the router files
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');

//use the routers
app.use('/person',personRoutes);
app.use('/menuitems',menuItemRoutes);

app.listen(3000,() => {
  console.log("listening on port 3000");
  
}
)






var slugify = require('slugify')

let a=slugify('some string') // some-string
console.log(a);

// if you prefer something other than '-' as separator
let b=slugify('some string', '_')  // some_string
console.log(b);
