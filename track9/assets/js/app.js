$(document).ready(function(){
  var quoteSource=[
  {
    quote: "Did you hear about the man who lost his whole left side?",
    name:"He's all-right now."
    },
  {
    quote: "Which country's capital has the fastest growing population?",
    name:"Ireland. Everyday it's Dublin."
    },
  {
    quote: "What sound does a sleeping T-Rex make?",
    name:"A dino-snore."
    },
  {
    quote: "Why are teddy bears never hungry?",
    name:"Because they're all stuffed."
    },
  {
    quote: "What did one toilet say to the other toilet?",
    name:"You look flushed."
    },
  {
    quote: "What's the best time to go to the dentist?",
    name:"Tooth hurty."
    },
  {
    quote: "Where do Volkswagens go to when they get old?",
    name:"The old Volks home."
    },
  {
    quote: "Why can't your nose be ten inches long?",
    name:"Because then it'd be a foot."
    },

];
  

  $('#quoteButton').click(function(evt){
    //define the containers of the info we target
    var quote = $('#quoteContainer p').text();
    var quoteGenius = $('#quoteGenius').text();
    //prevent browser's default action
    evt.preventDefault();
    //getting a new random number to attach to a quote and setting a limit
    var sourceLength = quoteSource.length;
    var randomNumber= Math.floor(Math.random()*sourceLength);
    //set a new quote
    for(i=0;i<=sourceLength;i+=1){
    var newQuoteText = quoteSource[randomNumber].quote;
    var newQuoteGenius = quoteSource[randomNumber].name;
    //console.log(newQuoteText,newQuoteGenius);
    var timeAnimation = 500;
    var quoteContainer = $('#quoteContainer');
    //fade out animation with callback
    quoteContainer.fadeOut(timeAnimation, function(){
      quoteContainer.html('');
      quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
      
      //fadein animation.
      quoteContainer.fadeIn(timeAnimation);
    });  
    
    break;
  };//end for loop

});//end quoteButton function
  
  
});//end document ready

