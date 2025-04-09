const express = require('express');
const router = express.Router();

const MenuItem = require('../models/MenuItem');

//post route to add a menuitems
router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newMenuItem = new MenuItem(data);

        const response = await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })

    }

});

//get method to get the menuitems data
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })
    }
})

//parameterized api calls
router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;//extract the work ty[e from the url parameter
        if (tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour') {
            const response = await Person.find({ taste: tasteType });
            console.log('response fetched');
            res.status(200).json(response);
        }
        else {
            res.status(404).json({ error: 'invalid work type' })

        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })
    }
})

//put=update
router.put('/:id', async (req, res)=>{
    try{
      const menuId =req.params.id;//extract the id from the url parameter
      const updateMenuData =req.body;//updated data for the menu
      const response =await MenuItem.findByIdAndUpdate(menuId,updateMenuData,{
        new:true,//return the updated document
        runValidators:true,//run the mongoose validation
      })
      if(!response){
        return res.status(404).json({error:'menu not found'});
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
      const menuId =req.params.id;//extract the id from the url parameter
      
      const response =await MenuItem.findByIdAndDelete(menuId);
       
      if(!response){
        return res.status(404).json({error:'menu not found'});
      }
      console.log('data delete');
      res.status(200).json({message: 'menu deleted successfully'});
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'internal server error' });
    }
  })


module.exports = router;