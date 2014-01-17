// Jonathan Beard, Expressions assignment part 2 "Industry-Specific" date completed Thursday, January 16, 2014


// the userName variable is used to identify the user for the following alert.
var userName = prompt ("Please enter your name and click the ok button to continue.")

// This section lets pops up an alert to let you know what is going on in this portion of the assignment. I decided to make it a little more personal with the use of the user name variable.
alert ("Hello " + userName + "\nIn this portion of the assignment we are to \ncreate a javascrypt program that relates directly \nto our industry. I decided to make this relate \nto how long it takes me to code a specific number \nof pages. This is a hypothetical and is not at all \nan accurate description of how long it will take to \ncreate a page from scratch.")

// this prompt identifies the variable pageNumber. The pageNumber variable shows how many pages i would be codeing.
var pageNumber = prompt("How many pages of content will be in the website?");

// the variable mySpeed is a constant that shows how fast i can code a simple page with some css style being 1 page in 2 hours.
var mySpeed = 2;

// the variable timeNeeded is used to calculate how long it takes me to code the number of pages asked for.
var timeNeeded = mySpeed * pageNumber;

// this if else statement is used to choose between two statements depending on the result of the timeNeeded calculation.
if (timeNeeded == 0)
{
    // if the time needed is 0 then 0 was put into the pageNumber prompt. Since the page number is 0 then i can not code what the user does not wish to exist. I used alert to print out to the user and console.log to print to the console.
    alert ("I can not create a website with 0 pages");
    console.log ("I can not create a website with 0 pages");
}
 else
{
    // if the time needed is more than 0 then this will prompt a message to be posted both to the user via alert and the console via console.log displaying the proper message
    alert("it will take me aproximately " + timeNeeded + " hours to complete your website." );
    console.log("it will take me aproximately " + timeNeeded + " hours to complete a website." );
}

// this console.log is set to display a summary of all the information provided by the user into the console
console.log( "User Name: " + userName + "\nNumber of pages: " + pageNumber + "\nTime Needed to complete: " + timeNeeded);
