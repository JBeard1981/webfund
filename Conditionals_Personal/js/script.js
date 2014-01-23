// Jonathan Beard, Expressions assignment part 1 "Personal" date completed Thursday, January 23, 2014

// I realize that this is very close to what I did for last week's assignment however, I think that the added changes make it infinately more entertaining and displays what we learned this week.


// This section lets pops up an allert to let you know what is going on in this portion of the assignment //
alert ("In this portion of the assignment we are to use javascrypt to create \nsomething that relates specifically to us. Therefor I decided to create \na short program to see how your age relates to my own. I realize that I did \nsomething very similar to this last week. However, \nI have added in a new twist... \nPlease press enter or click the ok button to continue.")

// the variable userAge is a prompt to get your age in order to determine weather or not you are older than me.
var userAge = prompt("Lets see if your age places you in my \"Datable\" range. \nPlease input your age.");

// the variable myAge is a constant that shows how old I am in order to determine weather you are older than me or not.
var myAge = 32;


// if else statement is being used to calculate then display the proper message depending on weather you are older than me younger than me or the same age.
if (userAge<myAge)
	{

    // var diff is being used to calculate the difference in my age and the user's age.
    // In this instance since my age is greater than the user age it is subtracting myAge from the user age
	var diff = myAge - userAge;

        if( diff>=18 ){
            // alert and console.log here are being used to display that the user age is so much less than mine that i would not consider dateing them.
            alert("You are a bit too young for me try again in a few years.");
            console.log("You are a bit too young for me try again in a few years.");
        } else {
            // alert and console.log here are being used to display that the user age is so younger than me but not too young to consider dateing them.
            alert("You are a bit younger than me but lets see where this goes.");
            console.log("You are a bit younger than me but lets see where this goes.");
        }
	}
else if (userAge>myAge)
	{
    // var diff is being used to calculate the difference in my age and the user's age.
    // In this instance since my age is less than the user age it is subtracting the user age from mine
	var diff = userAge - myAge
        if(diff>=18){
            // alert and console.log here are being used to display that the user is so much older than me that there is no way I can date them.
            alert("Wow... ummm... I hate to break it to you but.... I dont date people older than my parents. Sorry");
            console.log("Wow... ummm... I hate to break it to you but.... I dont date people older than my parents. Sorry");

        } else {
            // alert and console.log here are being used to show that the user is within the acceptable range for me to date.
            alert("You are a bit older than me but like Ronnie Mcdowell said in that classic country song... \"Older women make beautiful lovers\" wait... you are a woman right?");
            console.log("Older but not too old... I hope its a woman this time...");
        }
    }
	else
	{
    //  alert and console.log here are being used to display that both I and the user are the same age and we should give things a try.
	alert("We are the same age. Lets do this!")
    console.log("We are the same age. Ok now I REALLY hope its a woman.")
	}