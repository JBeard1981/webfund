// Jonathan Beard, Expressions assignment part 3 "Wacky" date completed Thursday, January 23, 2014

//well I must say this one was a bit of a pain in the rear. Established my function here in the javascrpyt everything works.
//I was unable to figure out how to call out the function in the javascrypt itself but did find something that worked in the form
//of a button added into the html file. In short it does the same thing as before however this time it uses a function to determine
//what to put in for each section of the title rather than the user having to input the values themselves.

function myMale()
{
    //this array is used to store the myTitle variable.
    var myTitle=new Array("nul","Ranger","Lord", "King", "Knight", "Slave", "Monster", "Forge Master", "Overlord","Emperor", "Sage");
    //this array is used to store the ofThe variable.
    var ofThe=new Array("nul","Forsaken","Lost", "Beloved","Hated","Darkest","Holy","Monsterous","Deadly","Forgotten","Spastic");
    //this array is used to store the myPlace variable.
    var myPlace=new Array("nul","Kingdom","Reaches","Empire","Army","Legion","Horde","Fairy Land","State","Hell","Heaven");
    // this variable prompts the user to input a made up name.
    var pName=prompt ("make up a name")
    // this variable prompts the user to input their real first name
    var myName=prompt("enter your real first name");
    // this variable prompts the user to input their real last name
    var myLname=prompt ("Enter your real last name");
    // this variable prompts the user to pick a number between 1 and ten
    var ranNum=prompt("enter a number between 1 and 10");
    // this variable sets str to equal the variable myName
    var str=myName;
    //this variable sets stre to equal the variable myLname
    var stre=myLname;
    //this sets the varaible n to equal the count of caracters in the str variable
    var n=str.length;
    // this sets the variable m to equal the count of the characters in the stre variable
    var m=stre.length;

    //this alerts the user via alert and posts to the console via console.log of the results of the function.
    alert("you shall forever be know as "+pName+" "+ myTitle[n] +" of the " + ofThe[m]+" " + myPlace[ranNum]);
    console.log ("Your Fantasy title is... " + pName + " " + myTitle[n] + " of the " + ofThe[m] + " " + myPlace[ranNum]);
}
function myFemale()
{
    //this array is used to store the myTitle variable.
    var myTitle=new Array("nul","Ranger","Lady", "Queen", "Maiden", "Slave", "Mistress", "Demoness", "Princess","Empress", "Priestess");
    //this array is used to store the ofThe variable.
    var ofThe=new Array("nul","Forsaken","Lost", "Beloved","Hated","Darkest","Holy","Monsterous","Deadly","Forgotten","Beautiful");
    //this array is used to store the myPlace variable.
    var myPlace=new Array("nul","Kingdom","Reaches","Empire","Army","Legion","Horde","Fairy Land","State","Hell","Heaven");
    // this variable prompts the user to input a made up name.
    var pName=prompt ("make up a name")
    // this variable prompts the user to input their real first name
    var myName=prompt("enter your real first name");
    // this variable prompts the user to input their real last name
    var myLname=prompt ("Enter your real last name");
    // this variable prompts the user to pick a number between 1 and ten
    var ranNum=prompt("Enter a number between 1 and 10");
    // this variable sets str to equal the variable myName
    var str=myName;
    //this variable sets stre to equal the variable myLname
    var stre=myLname;
    //this sets the varaible n to equal the count of caracters in the str variable
    var n=str.length;
    // this sets the variable m to equal the count of the characters in the stre variable
    var m=stre.length;

    //this allerts the user via alert and posts to the console via console.log of the results of the function.
    alert ("you shall forever be know as "+pName+" "+ myTitle[n] +" of the " + ofThe[m]+" " + myPlace[ranNum]);
    console.log ("Your Fantasy title is... " + pName + " " + myTitle[n] + " of the " + ofThe[m] + " " + myPlace[ranNum]); //
}
//function myAlignment()
//{
    //this alert will give instructions on how to compleate the task.
//    alert("Hello and thank you for choosing option 3. To determine your alignment you will be given a series of situations.\nYou are to answer each with either 1,2,or 3. your answer will be stored as a variable. the variables wil all\nthen be added together in an expression. The total score put out by the expression will then be used to determin\nyour allignment. Please click ok or press enter to continue...")
    //this is the first question to determine weather you are good or evil.
//    var q1=prompt("You over hear one of your friends talking about you. What they are saying is not good at all. \nPlease choose from the following options and place the number for your choice in the box provided \n1. /) Accept the criticism and try to change your ways. \n2./) Confront your friend and demand they apologize for saying it. \n 3. /) Forget it. what others think of you doesn't matter anyway.  ");
    //this array is used to store the ofThe variable.
//    var q2=new Array("nul","Forsaken","Lost", "Beloved","Hated","Darkest","Holy","Monsterous","Deadly","Forgotten","Spastic");
    //this array is used to store the myPlace variable.
//    var myPlace=new Array("nul","Kingdom","Reaches","Empire","Army","Legion","Horde","Fairy Land","State","Hell","Heaven");
    // this variable prompts the user to input a made up name.
//    var pName=prompt ("make up a name")
    // this variable prompts the user to input their real first name
//    var myName=prompt("enter your real first name");
    // this variable prompts the user to input their real last name
//    var myLname=prompt ("Enter your real last name");
    // this variable prompts the user to pick a number between 1 and ten
//    var totalScore=(q1+q2+q3+q4+q5+q6*q7+q8+q9+q10);
    // this variable sets str to equal the variable myName
//    if (totalScore>29){
//        alert("your alignment is Good! \nYou are a genuinely good person a true hero. You like to help people when they are in need.")
//    }else if(totalScore>20){
//        alert("Your alignment is Good! \nYou are a kind hearted person who likes to help. \nIf someone is in need they can be rest assured that you will be their to aid them.")
//        console.log("Your alignment is Good! \nYou are a kind hearted person who likes to help. \nIf someone is in need they can be rest assured that you will be their to aid them.")
//    }else if(totalScore>15){
//        alert("Your alignment is neutral. What ever happens as long as it doesn't affect you then it doesn't matter.")
//        console.log("Your alignment is neutral. What ever happens as long as it doesn't affect you then it doesn't matter.")
//    }else{
//        alert("Dude... you are evil. You do not care about anyone or anything. If anyone gets in your way what happens to them is their own fault.")
 //       console.log("Dude... you are evil. You do not care about anyone or anything. If anyone gets in your way what happens to them is their own fault.")
 //   }
//}