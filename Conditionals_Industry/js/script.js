// Jonathan Beard, Expressions assignment part 2 "Industry-Specific" date completed Thursday, January 23, 2014


// the userName variable is used to identify the user for the following alert.
var userName = prompt ("Please enter your name and click the ok button to continue.")

// This section lets pops up an alert to let you know what is going on in this portion of the assignment. I decided to make it a little more personal with the use of the user name variable.
alert ("Hello " + userName + "\nIn this portion of the assignment we are to \ncreate a javascrypt program that relates directly \nto our industry. I decided to make this relate \nto the pricing of pictures that I make for people on IMVU. \nthe user will be prompted to answer various yes or no questions. \nto determine how much their order will cost. \nPlease click ok to continue.")

// this prompt identifies the variable pNumber. The pNumber variable shows how many pictures the user is having me to create.
var pNumber = prompt("How many pictures do you want me to make?");

// This variable calculates how long it will take me to do your pictures.
var time = pNumber * 20

// the variable mySpeed is a constant that shows how fast i can code a simple page with some css style being 1 page in 2 hours.
var price = 600;

// the variable timeNeeded is used to calculate how long it takes me to code the number of pages asked for.
var totalCost = price * pNumber;

// this if else statement is used to choose between two statements depending on the result of the timeNeeded calculation.
if (pNumber == 0)
{
    // if the time needed is 0 then 0 was put into the pageNumber prompt. Since the page number is 0 then i can not code what the user does not wish to exist. I used alert to print out to the user and console.log to print to the console.
    alert ("Ok I guess you don't want any work done then. Thank you for visiting.");
    console.log ("Guess they didn't want anything after all.");
}
 else if (pNumber==1)
{
    // if the time needed is more than 0 then this will prompt a message to be posted both to the user via alert and the console via console.log displaying the proper message
    alert("This isn't going to take long. Your cost will be " + totalCost + "cr." );
    console.log("This isn't going to take long. Your cost will be " + totalCost + "cr." );
}else if(pNumber >= 10){
    alert("This is a big order. Your cost will be " + totalCost + "cr. It is going to take me a while to do this many pictures." );
    console.log("This is a big order. Your cost will be " + totalCost + "cr. It is going to take me a while to do this many pictures." );
}else {
    alert("Your total cost will be " + totalCost + "cr. It should take me about " + time + "minutes to complete your order. Provided that I do not run into any big issues." );
    console.log("Your total cost will be " + totalCost + "cr. It should take me about " + time + "minutes to complete your order. Provided that I do not run into any big issues." );
}

// this console.log is set to display a summary of all the information provided by the user into the console
if (time<80){
console.log( "User Name: " + userName + "\nNumber of pictures: " + pNumber + "\nTime Needed to complete: " + time +"\nChance I will get distracted and delivery delayed: High");
}else if (time<50)
{
    console.log( "User Name: " + userName + "\nNumber of pictures: " + pNumber + "\nTime Needed to complete: " + time +"\nChance I will get distracted and delivery delayed: Medium");
}else{
    console.log( "User Name: " + userName + "\nNumber of pictures: " + pNumber + "\nTime Needed to complete: " + time +"\nChance I will get distracted and delivery delayed: Low");
}