$(document).ready(function() {

  console.log("ready!");

// var deck contains the cards in the set

  var deck = [
    {front: "front of 1",
     back: "back of 1",
     correct: null},

    {front: "front of 2",
     back: "back of 2",
     correct: null},

    {front: "front of 3",
     back: "back of 3",
     correct: null},
  ];

// Setting the counter to first index

  var i = 0;

// Rendering the current count of i in the array on page load

$(".flashcards-front-1").html(deck[i].front)
$(".flashcards-back-1").html(deck[i].back)

// Defining the functions to increase/decrease i ; move card right/left

  function moveRight() {
    trueOrFalse();
    if (i >= (deck.length - 1)) {
      i = 0;
    } else {
      i++;
    }
    $(".flashcards-front-1").html(deck[i].front);
    $(".flashcards-back-1").html(deck[i].back);
  }

  function moveLeft() {
    trueOrFalse();
    if (i === 0) {
      i = (deck.length - 1);
    } else {
      i--;
    }
    $(".flashcards-front-1").html(deck[i].front);
    $(".flashcards-back-1").html(deck[i].back);
  }

// Defining the function to handle flipping the card

  function flipCard() {
    $(".flashcards-front-1").toggleClass("flashcard-hidden")
    $(".flashcards-back-1").toggleClass("flashcard-hidden")
  }

// Defining the function to create a new card

  function newCard () {
    newfront = prompt("What do you want the front to say?");
    newback = prompt("What do you want the back to say?");

    deck.push({front: newfront, back: newback, correct: null});
    console.log(deck);
  }

// Defining the function to evaluate .correct settings

  // set the true/false value of .correct

  function setIncorrect () {
    if (deck[i].correct === null) {
      console.log("Clicked incorrect. Status was null. Switching to false")
      deck[i].correct = false;
      } else if (deck[i].correct === false) {
      console.log("Clicked incorrect. Status was false. Switching to null")
      deck[i].correct = null;
      }
      console.log("Status ends at: " + deck[i].correct)
      trueOrFalse();
  }

  function setCorrect () {
    if (deck[i].correct === null) {
      console.log("Clicked correct. Status was null. Switching to true")
      deck[i].correct = true;
      } else if (deck[i].correct === true) {
      console.log("Clicked correct. Status was true. Switching to null")
      deck[i].correct = null;
      }
      console.log("Status ends at: " + deck[i].correct)
      trueOrFalse();
  }

  // render correctness to css

  function trueOrFalse() {
    console.log("youre running trueOrFalse")

    if ((deck[i].correct === null) && ($(".incorrect-category").hasClass("answer-null"))) {
      console.log("null and we're good to go! I'm not doing shit");
    } else if (deck[i].correct === null) {
      console.log("if condition met")

// need a "this" statement for this...
// otherwise I'd have to segment this massive function across both incorrect and correct.

      $(".incorrect-category").toggleClass("answer-null");
      $(".incorrect-category").toggleClass("answer-false");
      $(".correct-category").toggleClass("answer-true");
      $(".correct-category").toggleClass("answer-false");

    } else if (deck[i].correct === false) {
      console.log("else if condition met")
      $(".incorrect-category").toggleClass("answer-false");
      $(".incorrect-category").toggleClass("answer-true");

    } else if (deck[i].correct === true) {
      console.log("else if condition 2 met")
      $(".correct-category").toggleClass("answer-false");
      $(".correct-category").toggleClass("answer-true");
    }
  }

// Defining listeners to trigger the functions

  // on click
  $(".move-right").click( moveRight );
  $(".move-left").click( moveLeft );
  $(".flip").click( flipCard );

  $(".incorrect-category").click( setIncorrect );
  $(".correct-category").click( setCorrect );
  $(".new-card").click( newCard );

  // on keypress
  $("body").keydown(function(e) {
    if(e.keyCode == 37) {
      moveLeft();
    }
  })

  $("body").keydown(function(e) {
    if(e.keyCode == 39) {
      moveRight();
    }
  })

  $("body").keydown(function(e) {
    if(e.keyCode == 38) {
      flipCard();
    }
  })

  $("body").keydown(function(e) {
    if(e.keyCode == 40) {
      flipCard();
    }
  })

  $("body").keydown(function(e) {
    if(e.keyCode == 191) {
      setIncorrect();
    }
  })

  $("body").keydown(function(e) {
    if(e.keyCode == 222) {
      setCorrect();
    }
  })

})
