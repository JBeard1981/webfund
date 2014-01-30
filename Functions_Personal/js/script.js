// Jonathan Beard, Expressions assignment part 1 "Personal" date completed Thursday, January 30, 2014

// I realize that this is very close to what I did for last week's assignment however, I think that the added changes make it infinately more entertaining and displays what we learned this week.


// This section lets pops up an allert to let you know what is going on in this portion of the assignment //
    function myFunction(){
        var temp=parseInt(prompt ("Please enter the temperature in fahrenheit."));
        if (!isNaN(temp)){
             if (temp>=80){
                alert("Time to turn on the AC.")
                console.log("So that's why i am sweating...")
             }else if (temp>65){
                alert("Its a nice day I think i am going to have a glass of tea.")
                console.log("Its a nice day I think i am going to have a glass of tea.")
             }else if (temp>=55){
                alert("Its a little cold... better grab some hot coco.")
                console.log("It's a little chilly out better grab some hot coco.")
             }else if (temp>=45){
                alert("Wow.. its really cold got to have a BIG cup of coffee.")
                console.log("Wow.. its really cold got to have a BIG cup of coffee.")
             }else{
                alert("Seriously its "+temp+" degrees outside! I am just going to stay in my nice warm bed till it warms up.")
                console.log("Not gonna happen... "+temp+" is too cold for me to get out of bed.... we will try again later after it warms up.")
             }


        }else{
       var temp=parseInt(prompt("Please enter a NUMBER that represents the temprature."));
}
    }
//alert("Now that we know how cold it is hit the button and find what I am going to do?")