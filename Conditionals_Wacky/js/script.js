// Jonathan Beard, Expressions assignment part 3 "Wacky" date completed Thursday, January 16, 2014



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