 // event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//instead of using this function bellow i did some changes in the html code to the button
//var button = document.getElementById('loadQuote');
//button.addEventListener("click", printQuote, false);

//this calls the printQuote method every 5 seconds
var hello =  setInterval(printQuote, 5000);



//First i make the varible random have a random number between 0 - qoutes.length wich should //be 4
function getRandomQuote(quotes) {
    var random = Math.floor((Math.random() * quotes.length) );
    return quotes[random];
}

function printQuote() {
	//then i call the function and store the random qoute in the varible randomQuote
    var randomQuote = getRandomQuote(quotes);
	//then I make the string of the varible html look like a paragraph tag
    var html = '<p class ="quote">' + randomQuote.quote + "</p>" + '<p class = "source">' + randomQuote.source + "</p>";
	//then i look for the id "quote-box with the function getElementById and replace the code with the new html varible
    document.getElementById('quote-box').innerHTML = html;
	ChangeColor();
	

}
//instead of writing this code twice i put it as a function and call it instead
function ChangeColor(){
	//picks 3 random numbers from 0 - 256 wich together make the color
	var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    //Makes the varible ranrgb look like rgb(numberred, numbergreen, numberbkue) to prevent using rgb(red, green, blue) twice and instead write ranrgb
    var ranrgb= "rgb("+ red + "," + green + "," + blue + ")";
	//then changes the websites backroundColor and the buttons backroundColor
	document.body.style.backgroundColor =ranrgb;
	document.getElementById("loadQuote").style.backgroundColor = ranrgb;
}


//Here is a array of objects that stores qoutes and the source or writer of the quote
var quotes = [
    {
        quote: "But man is not made for defeat. A man can be destroyed but not defeated",
        source: "Ernest Hemingway"
    },
    {
        quote: "All that we see or seem is but a dream within a dream",
        source: "Edgar Allan Poe"
    },
    {
        quote: "There is no charm equal to tenderness of heart",
        source: "Jane Austen"
    },
    {
        quote: "Learning never exhausts the mind",
        source: "Leonardo da Vinci"
    },
    {
        quote: "If you cannot do great things, do small things in a great way",
        source: "Napoleon Hill"
    }
];
