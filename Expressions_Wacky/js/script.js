// Jonathan Beard, Expressions assignment part 3 "Wacky" date completed Thursday, January 16, 2014



// This section lets pops up an allert to let you know what is going on in this portion of the assignment //
alert ("In this portion of the assignment we are to use javascrypt to create \nsomething wacky or off the wall. Therefor I decided to create \na short program to give you a fantasy title based on user input! \nPlease press enter or click the ok button to continue.");


// the three arrays here contain the various words that will be associated with the title you will be given when its all over
var myTitle=new Array("nul","Ranger","Lord", "King", "Knight", "Slave", "Monster", "Forge Master", "Overlord","Emperor", "Sage");
var ofThe=new Array("nul","Forsaken","Lost", "Beloved","Hated","Darkest","Holy","Monsterous","Deadly","Forgotten","Spastic");
var myPlace=new Array("nul","Kingdom","Reaches","Empire","Army","Legion","Horde","Fairy Land","State","Hell","Heaven");

// var fName is a variable for the made up name you will give to associated with your fantasy title
var fName = prompt("Make up a name");

// var realName prompts you to put in the number of leters in your real first name in order to figure out what part of the myTitle array will be used.
var realName = prompt("How many letters are in your first name.");

// var lastName prompts you to put in the number of leters in your real last or sur name in order to figure out what part of the ofThe array will be used.
var lastName = prompt("How many letters are in your last name.");

// var pNum prompts you to pick a number between 1 and 10 in order to figure out what part of the myPlace array will be used.
var pNum = prompt ("pick a number between 1 and 10");

// this alert is being used to notify the user of what their fantasy title will be.
alert ("Your Fantasy title is... " + fName + " " + myTitle[realName] + " of the " + ofThe[lastName] + " " + myPlace[pNum]);

// this console.log is being used to print the same information as the alert above to the console.
console.log ("Your Fantasy title is... " + fName + " " + myTitle[realName] + " of the " + ofThe[lastName] + " " + myPlace[pNum]);