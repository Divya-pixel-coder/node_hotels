const express=require('express');
const router=express.Router();
const Person=require('../models/Person');

//************** */ instead of using callback function we will use async and await************
//post route to add a person
router.post('/', async(req,res)=>{
    try{
       const data=req.body//assuming the request body contains the person data 
       //create a new person document  using the mongoose model
        const newPerson=new Person(data);
 
        //save the new person to the database
   const response = await newPerson.save();
   console.log('data saved');
   res.status(200).json(response);
 }
    catch(err){
    console.log(err);
    res.status(500).json({error: 'internal server error' })
    
    }
 
 });

 //get method to get the person data
 router.get('/',async (req,res)=>{
    try{
      const data= await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'internal server error' })
    }
  })
 

  
  //parameterized api calls
  router.get('/:workType',async(req,res)=>{
    try{
      const workType=req.params.workType;//extract the work ty[e from the url parameter
      if(workType=='chef'||workType=='manager'||workType=='waiter'){
        const response=await Person.find({work:workType});
        console.log('response fetched');
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error: 'invalid work type' })
  
      }
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'internal server error' })
    }
    })
//put=update
router.put('/:id', async (req, res)=>{
  try{
    const personId =req.params.id;//extract the id from the url parameter
    const updatePersonData =req.body;//updated data for the person
    const response =await Person.findByIdAndUpdate(personId,updatePersonData,{
      new:true,//return the updated document
      runValidators:true,//run the mongoose validation
    })
    if(!response){
      return res.status(404).json({error:'Person not found'});
    }
    console.log('data saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'internal server error' });
  }
})

router.delete('/:id',async(req,res)=>{
  try{
    const personId =req.params.id;//extract the id from the url parameter
    
    const response =await Person.findByIdAndDelete(personId);
     
    if(!response){
      return res.status(404).json({error:'Person not found'});
    }
    console.log('data delete');
    res.status(200).json({message: 'person deleted successfully'});
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'internal server error' });
  }
})
//comment added for purpose
//comment pull
    module.exports=router;
  
 
