var prompt=require('prompt-sync')();
const age=prompt("please enter your age:");
if(age<18){
    console.log("you get a 20% discount");
}
else
{
    console.log("you get a 30% senior discount");
}
