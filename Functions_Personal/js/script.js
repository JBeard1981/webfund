// Jonathan Beard, Expressions assignment part 1 "Personal" date completed Thursday, January 30, 2014

// I realize that this is very close to what I did for last week's assignment however, I think that the added changes make it infinately more entertaining and displays what we learned this week.


// This section lets pops up an allert to let you know what is going on in this portion of the assignment //
alert ("In this portion of the assignment we are to use javascrypt to create \nsomething that relates specifically to us. Therefor I decided to create \na short program to tell you what I will do in the morning depending on the temprature. \nPlease press enter or click the ok button to continue.")
myFunction ()

function myFunction(){

    var temp=parseInt(prompt ("Please enter the temperature in fahrenheit"));
    var value=temp
    do{
    var temp=parseInt(prompt("Must be a whole number."))
    }
    while ((parseFloat(value) == parseInt(value)) && !isNaN(value)){
    }

    if (temp>65){
        alert("Its a nice day I think i am going to have a glass of tea.")
    }else if (temp>=55){
        alert("its a little cold... better grab some coffee")
    }else if (temp>=45){
        alert("Wow.. its really cold got to have a BIG cup of coffee.")
    }else{
        alert("Seriously its "+temp+" degrees outside! I am just going to stay in my nice warm bed till it warms up.")
    }
}


