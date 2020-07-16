
console.log("Starting From Here \n");
/*Problem Number 1 Start Here
Converting Feet To Mile */
console.log("Problem Number 1=>");
function feetToMile(feet){

    // 1 mile = 5280 feet
    const mile = 5280;

    if(feet > 0) //Checking 1st Condition That is feet is gater than 0 if true it will go inside other wise next step
    {
        let Convert = feet/mile;
        console.log(feet,"Feet =",Convert,"Mile");
    }
    else if(feet == 0) //using else if condition that if feet is exactly equal to 0 than it will go inside otherwise next step
    {
        console.log(`Hey Buddy You Use 0 or -0 Who Don't Care About Positive Or Negative Because He is Neutral Number :(`);

    }
    else
    {
        console.log("You Use",feet,"Which Is Negative Number");//If Input Is Negative
    }
}
//Calling Feet To Mile Converting Function
    feetToMile(450000);
    feetToMile(-0);
    feetToMile(-450000);
    console.log("\n\n");
/* Problem Number 1 End Here */ 

/* Problem Number 2 Start Here
How Many Wood Need To Make Chair,Table & Bed */

console.log("Problem Number 2=>")
function woodCalculator(numberOfChair,numberOfTable,numberOfBed){

    /* 
    1 chair = 1 CFT
    1 Table = 3 CFT
    1 Bed = 5 CFT
    */

    const chair = 1;
    const table = 3;
    const bed = 5;
    
    /* Need To Check Three Conditions That They Are Gater Than Or Equals 
    to Zero That's Why We Use Double Emparsand Which Means Must Fullfill This 
    Conditions */
    if(numberOfChair >= 0 && numberOfTable >= 0 && numberOfBed >= 0)
    {
        let totalAmountOfWood = (chair * numberOfChair) + (table * numberOfTable) + (bed * numberOfBed);//calculating total amount of wood by adding all elements
        console.log("You Need Total ",totalAmountOfWood,"CFT Wood To Make All Chair,Table & Bed");//Showing The Result
    }
    else{
        //If You Enter Wrong Input Like Negative Number
        console.log("You Enter Negative Number");
        /* Show The Amount Of Chair,Table And Bed*/
        console.log("You Want",numberOfChair,"Chair");
        console.log("You Want",numberOfTable,"Table");
        console.log("You Want",numberOfBed,"Bed");
    }


}
/* Function calling from here */
    woodCalculator(4,5,6);
    console.log("\n");
/* Problem Number 2 End Here */

/* Problem Number 3 Start Here 
   Calculate Total Bricks In A Building    
*/

console.log("Problem Number 3=>")
function brickCalculator(numberOfFloor)
{
    if(numberOfFloor>=1)
    {
    /* 1 feet = 1000 Brick */
    const feet = 1000;
    var i,
    totalBricks = 0;//Taking This 2 Variable One For Loop And One For Calculate Total Bricks
        for(i=1;i<=numberOfFloor;i++)//Loop Start From 1 Because Floor Start From 1
            {
                if(i<=10)//It will continue until i=10 when i will 11 it will go to else statement
                {
                    totalBricks = (15*feet) + totalBricks;//For First 1-10 Floor Height Is 15
                }
                else if(i<=20)
                {
                    totalBricks = (12*feet) + totalBricks;//For Second 11-20 Floor Height Is 12
                }
                else
                {
                    totalBricks = (10*feet) + totalBricks;//More Than 20 Floor Height Is 10
                }
            }
        console.log("You Need Total ",totalBricks," For Your Building");//Showing Total Bricks For That Building
    }
    else{
        console.log("Enter Valid Floor Which More Than 0");//If False Or The Input Is Negative It Will Show 
    }
    
}
/* Function Calling */
brickCalculator(0);
console.log("\n");
/* Problem Number 3 End Here */


/* 
    Problem Number 4 Start Here
    Finding Shortest Name From A Array Or String
*/

console.log("Problem Number 4=>")
function tinyFriend(NameOfFriends)//if we don't give anything else without array or String it will return undefined
{
    if(NameOfFriends != null)//Checking That The Array Is Empty Or Not
    {
        var ShortestName= NameOfFriends[0];//Assume That Shortest Name Is The 1st Element Of That Array
        for(var i = 0;i<NameOfFriends.length;i++)//Array Start From index 0
        {
            var longestName = NameOfFriends[i];//Assume That i=th Element Is Longest Name 
            if(longestName.length<ShortestName.length)//Checking The Length Of That Element or Strings
            {
                ShortestName=longestName;//If True Then Change The Value
            }
        }
        console.log(ShortestName);//Showing The Shortest Name
    }
    else{
        console.log("Empty Array");

    }
}
/* Array Declaring */
var FriendsName = ['111111111','22','333','4444','55555','666666'];
/* Function Calling */
tinyFriend(FriendsName);
/* Problem Number 4 End Here */
console.log("\nEnd Here")
