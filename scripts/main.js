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

    {front: "front of 4",
     back: "back of 4",
     correct: null},

    {front: "front of 5",
     back: "back of 5",
     correct: null}
  ];

// setting the counter to first index

  var i = 0;

// the click events for increase i / move card right

  $(".move-right").click(function() {
    if (i >= (deck.length - 1)) {
      i = 0;
    } else {
      i++;
    }
    $(".flashcards-front-1").html(deck[i].front);
    $(".flashcards-back-1").html(deck[i].back);
  })

// the click events for decrease i / move card left

  $(".move-left").click(function() {
    if (i === 0) {
      i = 4;
    } else {
      i--;
    }
    $(".flashcards-front-1").html(deck[i].front);
    $(".flashcards-back-1").html(deck[i].back);
  })

// Here we're displaying the initial card content from deck on page load

  $(".flashcards-front-1").html(deck[i].front)
  $(".flashcards-back-1").html(deck[i].back)

// Here we're allowing the user to flip the current card

  $(".flip").click(function() {
    $(".flashcards-front-1").toggleClass("flashcard-hidden")
    $(".flashcards-back-1").toggleClass("flashcard-hidden")
  })

// Here we're setting up our correctness evaluation

  $(".incorrect-category").click(function() {
    if (deck[i].correct === null) {
      console.log("Clicked incorrect. Status was null. Switching to false")
      deck[i].correct = false
    } else if (deck[i].correct === false) {
      console.log("Clicked incorrect. Status was false. Switching to null")
      deck[i].correct = null
    }
    console.log(deck[i].correct)
    trueOrFalse();
  })

  $(".correct-category").click(function() {
    // set deck[i].correct to true
    // render the current setting of deck[i].correct to both in/correct buttons
    if (deck[i].correct === null) {
      console.log("Clicked correct. Status was null. Switching to true")
      deck[i].correct = true;
    } else if (deck[i].correct === true) {
      console.log("Clicked correct. Status was true. Switching to null")
      deck[i].correct = null;
    }
    console.log(deck[i].correct)
    trueOrFalse();
  })

// Here we're defining the conditions for true/false responses to be displayed

  function trueOrFalse() {
    console.log("youre running trueOrFalse")

    if (deck[i].correct === null) {
      console.log("if condition met")

      $(".incorrect-category").toggleClass("answer-full");
      $(".incorrect-category").toggleClass("answer-empty");
      $(".correct-category").toggleClass("answer-full");
      $(".correct-category").toggleClass("answer-empty");

    } else if (deck[i].correct === false) {
      console.log("else if condition met")
      $(".incorrect-category").toggleClass("answer-empty");
      $(".incorrect-category").toggleClass("answer-full");

    } else if (deck[i].correct === true) {
      console.log("else if condition 2 met")
      $(".correct-category").toggleClass("answer-empty");
      $(".correct-category").toggleClass("answer-full");
    }
  }
})
