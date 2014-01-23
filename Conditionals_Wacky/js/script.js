// Jonathan Beard, Expressions assignment part 3 "Wacky" date completed Thursday, January 16, 2014



// This section lets pops up an allert to let you know what is going on in this portion of the assignment. This is essentially what I did last time. However I am going to change the code to get a completely different outcome in a different way. //
alert ("In this portion of the assignment we are to use javascrypt to create \nsomething wacky or off the wall. Therefor I decided to create \na short program to give you a fantasy title based on user input! \nPlease press enter or click the ok button to continue.");

// This variable is to set the gender of the user to either male or female.
var gender=new Array("Male","Female")
var myTitleMale=new Array("nul","Ranger","Lord", "King", "Knight", "Slave", "Monster", "Forge Master", "Overlord","Emperor", "Sage");
var myTitleFemale=new Array("nul","Lady","Queen","High Queen","Mysterious","Mistress", "Princess", "Maiden","Ranger","Slave", "Knight")
var ofThe=new Array("nul","Forsaken","Lost", "Beloved","Hated","Darkest","Holy","Monsterous","Deadly","Forgotten","Spastic");
var myPlace=new Array("nul","Kingdom","Reaches","Empire","Army","Legion","Horde","Fairy Land","State","Hell","Heaven");
var userName=prompt("Please input a name and hit enter.")

var userGender=prompt("are you male or female.\nPlease enter either M or F")
if(userGender=="M","m"){
    var r=confirm("Are you sure?");
    if (r==true)
    {
        x="Processing for male titles";
    }
    else
    {
        x="Please refresh page and try again.";
    }
}
