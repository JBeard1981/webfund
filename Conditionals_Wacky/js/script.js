// Jonathan Beard, Expressions assignment part 3 "Wacky" date completed Thursday, January 23, 2014

//well I must say this one was a bit of a pain in the rear. Established my function here in the javascrpyt everything works.
//I was unable to figure out how to call out the function in the javascrypt itself but did find something that worked in the form
//of a button added into the html file. In short it does the same thing as before however this time it uses a function to determine
//what to put in for each section of the title rather than the user having to input the values themselves.

function myFunction()
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

    //this allerts the user via alert and posts to the console via console.log of the results of the function.
    alert("you shall forever be know as "+pName+" "+ myTitle[n] +" of the " + ofThe[m]+" " + myPlace[ranNum]);
    console.log ("Your Fantasy title is... " + pName + " " + myTitle[n] + " of the " + ofThe[m] + " " + myPlace[ranNum]);
}