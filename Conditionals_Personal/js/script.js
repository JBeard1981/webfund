// Jonathan Beard, Expressions assignment part 1 "Personal" date completed Thursday, January 16, 2014

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
            // alert here is being used to display that the user age is less than mine and by how much
            alert("You are a bit too young for me try again in a few years.");
        }



    // console.log is printing the same information as the above alert to the console
    console.log("You are younger than me by " + diff + " years.");
	}
else if (userAge>myAge)
	{
    // var diff is being used to calculate the difference in my age and the user's age.
    // In this instance since my age is less than the user age it is subtracting the user age from mine
	var diff = userAge - myAge

    // alert here is being used to display that the user age is less than mine and by how much
	alert("You are older than me by " + diff + " years.");

    // console.log is printing the same information as the above alert to the console
    console.log("You are older than me by " + diff + " years.");

    }
	else
	{
    //  alert here is being used to display that both I and the user are the same age
	alert("We are the same age.")

    // console.log is printing the same information as the above alert to the console
    console.log("We are the same age.")
	}