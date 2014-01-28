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
function myAlignment()
{
    //this alert will give instructions on how to compleate the task.
    alert("Hello and thank you for choosing option 3. To determine your alignment you will be given a series of situations.\nYou are to answer each with either 1,2,or 3. your answer will be stored as a variable. the variables wil all\nthen be added together in an expression. The total score put out by the expression will then be used to determin\nyour allignment. Please click ok or press enter to continue...");
    // the following 10 variables are prompts that ask a question. the answer to that question will then go into a variable expression to calculate weather you are good evil or neutral.
    var q1=prompt  ("You over hear one of your friends talking about you. What they are saying is not good at all. \nPlease choose from the following options and place the number for your choice in the box provided \n1. /) Confront your friend and demand they apologize for saying it. \n2./) Forget it. what others think of you doesn't matter anyway.   \n 3. /) Accept the criticism and try to change your ways. ");
    var q2=prompt  ("You happen across a man stealing corn from your family's farm. \nWhen you question the man he begs you to let him go saying he only took the corn to feed his family and that you have more than enough to share.\nPlease choose from the following options and place the number for your choice in the box provided\n Do you...\n 1. /) Kill the man on the spot. he is a thief and diserves nothing less than death. \n2. /) take the corn back and tell him never to return. \n3. /) Give the man some corn and tell him to come ask next time.");
    var q3=prompt  ("You catch a small child trying to pick your pocket in the market.\nPlease choose from the following options and place the number for your choice in the box provided\n1. /) Beat the child within an inch of its life. Little brat should not have tried stealing from you.  \n2. /)Turn the child into the authorities. Perhaps a few nights locked up or a lopped off hand will teach the child a lesson.  \n3. /) Take the child under your wing and teach it a better way.");
    var q4=prompt  ("There is a vampire on the loose terrorizing a small village.\n1. /) Attempt to make friends with the beast after a vampire can be a very powerful ally.  \n2. /) Let it go that's why we have heroes and guards.  \n3. /) Confront the beast and destroy it.");
    var q5=prompt  ("You have just killed a vampire that you thought was terrorizing a small village only to find out that the vampire was just a homeless man being used as a distraction so that the real killer can escape.\n1. /) Oh well... we all die anyway.  \n2. /)oops...  \n3. /) Apologize and attempt to make things right by finding and slaying the true villan.");
    var q6=prompt  ("You happen upon a blind beggar in the city. He has a few coins in his cup but not near enough to even pay for a single meal.\n1. /) Take his coins. Not like he can see who did it. Its the perfect crime really. \n2. /) Ignore the beggar. Whatever problems he has its not your business.  \n3. /) Help the man to a local mission where he will find the help he needs.");
    var q7=prompt  ("A young man is running from an angry mob. You do not know why he is running but you have a chance to end the chase before someone gets hurt.\n1. /) Trip the idiot and watch the show. A good lynching might be entertaining.  \n2. /) Step to the side. whatever he did its not your problem.  \n3. /) Pull the man to the side and give him a chance to explain whats going on. If he is innocent maybe you can help him escape. If not you can turn him over to the nearest guard.");
    var q8=prompt  ("A dog has been struck by a moving vehicle outside of town. There is no one near by to help the animal and it is clear it is suffering and may die soon.\n1. /) Stupid beast shouldn't have been in the way. Stop and look for a moment watch it suffer before walking away.  \n2. /) Keep going. there is nothing you can do to help it now.  \n3. /) Draw your weapon and aim for the head. Their may be no hope of its survival but at least you can end it's suffering.");
    var q9=prompt  ("You are a soldier in the military. Your squad has been sent out to deal with some rebels. \nUpon arrival at the rebel camp you find it is not populated by the traitorous men you were told but by simple families.\n1. /) I was sent to kill. Now lets have some fun. \n2. /) I take no pleasure in this but an order is an order. \n3. /) Lieing is bad but these people are not. Convince the people to leave their homes and report the village was destroyed. Better they be homeless and alive than dead.");
    var q10=prompt ("Sitting before you are three boxes. In one you will find a reaper's scythe and black cloak.\nIn the second box is a sword and sheild. \nIn the third box is an inkwell pen and several scrolls.\n you must choose one of the boxes to carry with you on your journy.\n1. /) A scythe... the weapon of the reaper of souls. This looks fun.  \n2. /) A wise man once said \"the pen is mightier than the sword\" besides I don't intend to be fighting.   \n3. /)");
    // this variable prompts the user to pick a number between 1 and ten
    var totalScore=(q1+q2+q3+q4+q5+q6+q7+q8+q9+q10);
    // this variable sets str to equal the variable myName
    if (totalScore>29){
        alert("Your are so Good that you may be eligible to be named as a saint. \nYou are a genuinely good person a true hero. You like to help people when they are in need.")
    }else if(totalScore>20){
        alert("Your alignment is Good! \nYou are a kind hearted person who likes to help. \nIf someone is in need they can be rest assured that you will be their to aid them.")
        console.log("Your alignment is Good! \nYou are a kind hearted person who likes to help. \nIf someone is in need they can be rest assured that you will be their to aid them.")
    }else if(totalScore>15){
        alert("Your alignment is neutral. What ever happens as long as it doesn't affect you then it doesn't matter.")
        console.log("Your alignment is neutral. What ever happens as long as it doesn't affect you then it doesn't matter.")
    }else{
        alert("Dude... you are evil. You do not care about anyone or anything. If anyone gets in your way what happens to them is their own fault.")
       console.log("Dude... you are evil. You do not care about anyone or anything. If anyone gets in your way what happens to them is their own fault.")
   }
}