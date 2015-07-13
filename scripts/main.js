// pseudocode

/*

### Project Description

Pre-load your app with some data, and let the user flip through them quickly
(back or front), and use the keyboard flip the card, and to mark whether they
got it right or not. Track which cards were incorrect, and re-display them until
the user gets them right!

#### Bonus:

* Track scores over time (even if the page is reloaded) Include images on one or
* both sides of the flash card Let the user add flash cards (don't need to be
* saved across refreshes)

### Methods from project details

On the page:

TITLE
"flashcards" title and a short description for context.


CARD CONTENT
main content of card, front-side
main content of card, back-side

"front" indicator on front-side
"back" indicator on back-side

top left a grayed-out X in a circle to indicate whether marked correct.
top right a grayed-out CHECKMARK in a circle to indidcate whether marked incorrect.


DIRECTIONS IN FOOTER OF PAGE
tile: " <-- / --> " for change between cards

tile: " ^ / v ", for flip cards

tile: " / ", apply checkmark for mark card answer as correct

tile: " . ", apply x-sign for mark card answer as incorrect


SPECIAL BUTTONS
shuffle, clickable icon and hotkey reference
front-first toggle button.
  when on, all cards show the front-side first
  when off, all cards show the back-side first


INTERACTIVITY


### User Stories:

As a user, I want to be able to be able to browse flashcards by "question" or
"answer" to deepen understanding of topics.

As a user, I want my flipping experience to be animated but quick (< 400ms) for
a more meaningful and tactile user experience.

As a user, I want to be able to use my keyboard to trigger the card flips for
more control and easier/speedier input.

As a user, I want to be able to mark whether or not I got my flashcard correct
for better tracking/analysis of my performance.

As a user, I want to be able to sort the cards I answered incorrectly so that I
may specifically repeat those cards.

*/

$(document).ready(function() {

  console.log("ready!");

// deck contains the cards in the set

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

  var i = 0;

  $(".move-right").click(function() {
    if (i >= (deck.length - 1)) {
      i = 0;
    } else {
      i++;
    }
    $(".flashcards-front-1").html(deck[i].front);
    $(".flashcards-back-1").html(deck[i].back);
  })

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
    // set deck[i].correct to false
    // render the current setting of deck[i].correct to both in/correct buttons
    if (deck[i].correct === null) {
      console.log("incorrect. status was null. switching to false")
      deck[i].correct = false
    } else if (deck[i].correct === false) {
      console.log("incorrect. status was false. switching to null")
      deck[i].correct = null
    }
    console.log(deck[i].correct)
    trueOrFalse();
  })

  $(".correct-category").click(function() {
    // set deck[i].correct to true
    // render the current setting of deck[i].correct to both in/correct buttons
    if (deck[i].correct === null) {
      console.log("correct. status was null. switching to true")
      deck[i].correct = true;
    } else if (deck[i].correct === true) {
      console.log("correct. status was true. switching to null")
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


// Here we're listening for events to alter our content

//   function listen () {
//
//       $(".incorrect-category").click(function() {
//         // set deck[i].correct to false
//         // render the current setting of deck[i].correct to both in/correct buttons
//         deck[i].correct = false;
//         trueOrFalse();
//       })
//
//       $(".correct-category").click(function() {
//         // set deck[i].correct to true
//         // render the current setting of deck[i].correct to both in/correct buttons
//         deck[i].correct = true;
//         trueOrFalse();
//       })
//
//       function trueOrFalse() {
//         if (deck[i].correct === null) {
//           $(".correct-category", ".incorrect-category").addClass("answer-empty");
//         } else if (deck[i].correct === false) {
//           $(".correct-category", ".incorrect-category").addClass("answer-empty");
//         } else if (deck[i].correct === true) {
//           $(".correct-category", ".incorrect-category").addClass("answer-full");
//         }
//       }
//
//       $(".move-right").click(function() {
//         // set loop to i++
//         // render deck[i].front to flashcards-front-1 html
//         // render deck[i].back to flashcards-back-1 html
//       })
//
//       $(".move-left").click(function() {
//         // set loop to i--
//         // render deck[i].front to flashcards-front-1 html
//         // render deck[i].back to flashcards-back-1 html
//       })
//     }
// });


  // $(".correct-category").click(function() {
  //   $(this).toggleClass("answer-true")
  //   $(this).toggleClass("answer-false")
  // })
  //
  // $(".incorrect-category").click(function() {
  //   $(this).toggleClass("answer-true")
  //   $(this).toggleClass("answer-false")
  // })

  // $(".move-right").click(function() {
  //   jQuery.each(deck, function(index, value) {
  //     $(".flashcards-front-1").html(value.front);
  //     $(".flashcards-back-1").html(value.back);
  //   })
  // })
  //
  // $(".move-right").click(function() {
  //   jQuery.each(deck, function(index, value) {
  //     $(".flashcards-front-1").html(value.front);
  //     $(".flashcards-back-1").html(value.back);
  //   })
  // })

  // $(".move-right").click(function() {
  //   for (var i = 0; i < 5; i++) {
  //     $(".flashcards-front-1").html(deck[i].front);
  //     $(".flashcards-back-1").html(deck[i].back);
  //   }
  // })
  //
  // $(".move-left").click(function(){
  //   for (var i = 0; i <5; i--) {
  //     $(".flashcards-front-1").html(deck[i].front);
  //     $(".flashcards-back-1").html(deck[i].back);
  //   }
  // })
