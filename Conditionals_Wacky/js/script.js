// Jonathan Beard, Expressions assignment part 3 "Wacky" date completed Thursday, January 23, 2014

//well I must say this one was a bit of a pain in the rear. Established my function here in the javascrpyt everything works.
//I was unable to figure out how to call out the function in the javascrypt itself but did find something that worked in the form
//of a button added into the html file. In short it does the same thing as before however this time it uses a function to determine
//what to put in for each section of the title rather than the user having to input the values themselves.

function myFunction()
{
    var myTitle=new Array("nul","Ranger","Lord", "King", "Knight", "Slave", "Monster", "Forge Master", "Overlord","Emperor", "Sage");
    var ofThe=new Array("nul","Forsaken","Lost", "Beloved","Hated","Darkest","Holy","Monsterous","Deadly","Forgotten","Spastic");
    var myPlace=new Array("nul","Kingdom","Reaches","Empire","Army","Legion","Horde","Fairy Land","State","Hell","Heaven");
    var pName=prompt ("make up a name")
    var myName=prompt("enter your real first name");
    var myLname=prompt ("Enter your real last name");
    var ranNum=prompt("enter a number between 1 and 10");
    var str=myName;
    var stre=myLname;
    var n=str.length;
    var m=stre.length;
    alert("you shall forever be know as "+pName+" "+ myTitle[n] +" of the " + ofThe[m]+" " + myPlace[ranNum]);
    console.log ("Your Fantasy title is... " + pName + " " + myTitle[n] + " of the " + ofThe[m] + " " + myPlace[ranNum]);
}