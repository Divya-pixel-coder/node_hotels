// set up password with a local authentication strategy ,using a person model
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;//this is also called user name and password strategy
const Person=require('./models/Person')

passport.use(new LocalStrategy(async  (USERNAME,password,done)=>{

    //authentication logic here
    try{
      // console.log('Received credentials:',USERNAME,password);
      const user= await Person.findOne({username:USERNAME});
      if(!user)
        return done(null,false,{message
          : 'incorrect username.'
        });
      const isPasswordMatch= await user.comparePassword(password);
      if (isPasswordMatch)
        return done(null,user);
    
        else{
          return done(null,false,{message
            : 'incorrect password.'
          })
        }
      }
     catch(err){
        return done(err);
    }
    }))
    module.exports=passport;