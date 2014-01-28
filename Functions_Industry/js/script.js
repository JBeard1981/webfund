// Jonathan Beard, Functions assignment part 2 "Industry-Specific" date completed Tuesday, January 28, 2014 3:02pm


// the userName variable is used to identify the user for the following alert.
var userName = prompt ("Please enter your name and click the ok button to continue.")

// This section lets pops up an alert to let you know what is going on in this portion of the assignment. I decided to make it a little more personal with the use of the user name variable.
alert ("Hello " + userName + "\nIn this portion of the assignment we are to create a javascrypt program that relates directly to our industry. I decided to make this relate to the pricing of items that I make for use with IMVU software. The user will be prompted to input various values to determine how much their order will cost, and how long it will take to produce. \nPlease click ok to continue.")

// this prompt identifies the variable pNumber. The pNumber variable shows how many pictures the user is having me to create.
function profilePictures(){

var pNumber = prompt("How many pictures do you want me to make?");

// This variable calculates how long it will take me to do your pictures.
var time = pNumber * 20

// the variable mySpeed is a constant that shows how fast i can code a simple page with some css style being 1 page in 2 hours.
var price = 600;

// the variable timeNeeded is used to calculate how long it takes me to code the number of pages asked for.
var totalCost = price * pNumber;

// this if else else if statement is used to choose between various possible resuts depending upon how many images i am to create for the user.
if (pNumber == 0) //if 0 images are to be created this is exicuted
{
    // if the pictures request is 0 then the following will be printed to the console via console.log and to the user via alert.
    alert ("Ok I guess you don't want any work done then. Thank you for visiting.");
    console.log ("Guess they didn't want anything after all.");
}
 else if (pNumber==1)// this code will be exictued if only one picture is to be created.
{
    // if only one image is to be created then the following will be printed to the console via console.log and to the user via alert.
    alert("This isn't going to take long. Your cost will be " + totalCost + "cr." );
    console.log("This isn't going to take long. Your cost will be " + totalCost + "cr." );
}else if(pNumber >= 10){//this code is only to be implimented if ten or more images are requested
    // if ten or more images are to be created then the following will be printed to the console via console.log and to the user via alert.
    alert("This is a big order. Your cost will be " + totalCost + "cr. It is going to take me a while to do this many pictures." );
    console.log("This is a big order. Your cost will be " + totalCost + "cr. It is going to take me a while to do this many pictures." );
}else {//if anything less than ten images or more than 1 image is requested then the following code will print out the cost and time required for the images to the user via alert and the console with console.log
    alert("Your total cost will be " + totalCost + "cr. It should take me about " + time + "minutes to complete your order. Provided that I do not run into any big issues." );
    console.log("Your total cost will be " + totalCost + "cr. It should take me about " + time + "minutes to complete your order. Provided that I do not run into any big issues." );
}

// this if else console.log is set to display a summary of all the information provided by the user into the console the message varies depending on how long it wil take me to complete the task given.
if (time>80){
console.log( "User Name: " + userName + "\nNumber of pictures: " + pNumber + "\nTime Needed to complete: " + time +"\nChance I will get distracted and delivery delayed: High");
}else if (time>50)
{
    console.log( "User Name: " + userName + "\nNumber of pictures: " + pNumber + "\nTime Needed to complete: " + time +"\nChance I will get distracted and delivery delayed: Medium");
}else{
    console.log( "User Name: " + userName + "\nNumber of pictures: " + pNumber + "\nTime Needed to complete: " + time +"\nChance I will get distracted and delivery delayed: Low");
}

}
function wallItem(){

    var pNumber = prompt("How many 3D wall hangings do you want me to make for your virtual room?");

// This variable calculates how long it will take me to do your pictures.
    var time = pNumber * 25

// the variable mySpeed is a constant that shows how fast i can code a simple page with some css style being 1 page in 2 hours.
    var price = 600;

// the variable timeNeeded is used to calculate how long it takes me to code the number of pages asked for.
    var totalCost = price * pNumber;

// this if else else if statement is used to choose between various possible resuts depending upon how many images i am to create for the user.
    if (pNumber == 0) //if 0 images are to be created this is exicuted
    {
        // if the pictures request is 0 then the following will be printed to the console via console.log and to the user via alert.
        alert ("Ok I guess you don't want any work done then. Thank you for visiting.");
        console.log ("Guess they didn't want anything after all.");
    }
    else if (pNumber==1)// this code will be exictued if only one picture is to be created.
    {
        // if only one image is to be created then the following will be printed to the console via console.log and to the user via alert.
        alert("This isn't going to take long. Your cost will be " + totalCost + "cr." );
        console.log("This isn't going to take long. Your cost will be " + totalCost + "cr." );
    }else if(pNumber >= 10){//this code is only to be implimented if ten or more images are requested
        // if ten or more images are to be created then the following will be printed to the console via console.log and to the user via alert.
        alert("This is a big order. Your cost will be " + totalCost + "cr. It is going to take me a while to do this many pictures." );
        console.log("This is a big order. Your cost will be " + totalCost + "cr. It is going to take me a while to do this many pictures." );
    }else {//if anything less than ten images or more than 1 image is requested then the following code will print out the cost and time required for the images to the user via alert and the console with console.log
        alert("Your total cost will be " + totalCost + "cr. It should take me about " + time + "minutes to complete your order. Provided that I do not run into any big issues." );
        console.log("Your total cost will be " + totalCost + "cr. It should take me about " + time + "minutes to complete your order. Provided that I do not run into any big issues." );
    }

// this console.log is set to display a summary of all the information provided by the user into the console the message varries depending on how long it wil take me to complete the task given.
    if (time>80){
        console.log( "User Name: " + userName + "\nNumber of pictures: " + pNumber + "\nTime Needed to complete: " + time +"\nChance I will get distracted and delivery delayed: High");
    }else if (time>50)
    {
        console.log( "User Name: " + userName + "\nNumber of pictures: " + pNumber + "\nTime Needed to complete: " + time +"\nChance I will get distracted and delivery delayed: Medium");
    }else{
        console.log( "User Name: " + userName + "\nNumber of pictures: " + pNumber + "\nTime Needed to complete: " + time +"\nChance I will get distracted and delivery delayed: Low");
    }



}

function bothItems(){

    var pNumber = parseInt(prompt("How many pictures do you want me to make?"));
    var iNumber = parseInt(prompt("How many of those pictures do you want me to make into 3D wall hangings for your virtual room?"));
    var totalNumber= pNumber+iNumber

// This variable calculates how long it will take me to do your pictures.
    var time = totalNumber * 30

// the variables iPrice and pPrice are constants that show how much i will charge for your items.
    var pPrice=600;
    var iPrice=1500;

// the variable timeNeeded is used to calculate how long it takes me to code the number of pages asked for.
    var pCost = pPrice * pNumber;
    var iCost = iPrice * iNumber;

// since the price of a profile picture includes
    if(pNumber>iNumber){
        var dif=pNumber-iNumber
        var difprice= dif * 600;
        var totalCost = iCost + difprice;
    }else {
        var totalCost = iCost;
    }
// this if else else if statement is used to choose between various possible results depending upon how many images i am to create for the user.
    if (totalCost == 0) //if 0 images are to be created this is executed
    {
        // if the pictures request is 0 then the following will be printed to the console via console.log and to the user via alert.
        alert ("Ok I guess you don't want any work done then. Thank you for visiting.");
        console.log ("Guess they didn't want anything after all.");
    }
    else if (totalCost==1500)// this code will be executed if only one picture is to be created.
    {
        // if only one image is to be created then the following will be printed to the console via console.log and to the user via alert.
        alert("This isn't going to take long. Your cost will be " + totalCost + "cr." );
        console.log("This isn't going to take long. Your cost will be " + totalCost + "cr." );
    }else if(totalCost >= 15000){//this code is only to be implemented if ten or more images are requested
        // if ten or more images are to be created then the following will be printed to the console via console.log and to the user via alert.
        alert("This is a big order. Your cost will be " + totalCost + "cr. It is going to take me a while to do this many pictures." );
        console.log("This is a big order. Your cost will be " + totalCost + "cr. It is going to take me a while to do this many pictures." );
    }else {//if anything less than ten images or more than 1 image is requested then the following code will print out the cost and time required for the images to the user via alert and the console with console.log
        alert("Your total cost will be " + totalCost + "cr. It should take me about " + time + "minutes to complete your order. Provided that I do not run into any big issues." );
        console.log("Your total cost will be " + totalCost + "cr. It should take me about " + time + "minutes to complete your order. Provided that I do not run into any big issues." );
    }
    if (time>80){
        console.log( "User Name: " + userName + "\nNumber of pictures: " + totalNumber + "\nTime Needed to complete: " + time +"\nChance I will get distracted and delivery delayed: High");
    }else if (time>50)
    {
        console.log( "User Name: " + userName + "\nNumber of pictures: " + totalNumber + "\nTime Needed to complete: " + time +"\nChance I will get distracted and delivery delayed: Medium");
    }else{
        console.log( "User Name: " + userName + "\nNumber of items: " + totalNumber + "\nTime Needed to complete: " + time +"\nChance I will get distracted and delivery delayed: Low");

    }
}

