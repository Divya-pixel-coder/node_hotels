const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
//define the person schema
const personSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    work:{
        type: String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    address:{
        type: String,
        required:true
    },
    salary:{
        type: Number,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
})

personSchema.pre('save',async function (next) {
    const person=this;

    //hash the password only if it has been modified (or is new)
    if(!person.isModified('password'))return next();
    try{ 
         //hash the password generation
         const salt= await bcrypt.genSalt(10);//10 is the ideal number it will give complex hash password, 20=take more time
         

         //hash password
         const hashedPassword=await bcrypt.hash(person.password,salt)
         
         //override the plain password with the hased one
         person.password=hashedPassword;
         next();
    }catch(err){
        return next(err)

    }
})

personSchema.methods.comparePasssword=async function (candidatePassword) {
    
try{
    //use bcrypt to compare the provided password with the hashed password
    const isMatch=await bcrypt.compare(candidatePassword,this.password);
    return isMatch;
}catch(err){
    throw err;
}

}
//prince--->bsjdhsjefhdjkmfjsldfslfjs
//login--->agrawal

//bsjdhsjefhdjkmfjsldfslfjs--->extract salt
//salt+agrawal-->hash-->jdhusjdhskdhesjdhusjdhskd


//create person model
const Person=mongoose.model('Person',personSchema);
module.exports=Person;