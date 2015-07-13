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

  var deck = [
   {front: "Giraffes are hoofed animals, of this class",
    back: "Ungulates",
    correct: null},

   {front: "Giraffes are mammals of this class, a latin word meaning -to chew over and over again-",
    back: "ruminants",
    correct: null},

   {front: "The giraffe's species name, camelopardalis, elides these two other animal names",
    back: "Camel and leopard",
    correct:null},

    {front: "front of 4",
     back: "back of 4",
     correct: null}
  ];

  $(".flashcards-front-1").html(deck[0].front);
  $(".flashcards-back-1").html(deck[0].back);

  $(".toggle-flip").click(function() {
    $(".flashcards-front-1").toggleClass("flashcard-hidden")
    $(".flashcards-back-1").toggleClass("flashcard-hidden")
  })

  $(".correct-category").click(function() {
    $(this).toggleClass("answer-true")
    $(this).toggleClass("answer-false")
  })

  $(".incorrect-category").click(function() {
    $(this).toggleClass("answer-true")
    $(this).toggleClass("answer-false")
  })

  // $(".toggle-right").click(function() {
  //   jQuery.each(deck, function(index, value) {
  //     $(".flashcards-front-1").html(value.front);
  //     $(".flashcards-back-1").html(value.back);
  //   })
  // })
  //
  // $(".toggle-right").click(function() {
  //   jQuery.each(deck, function(index, value) {
  //     $(".flashcards-front-1").html(value.front);
  //     $(".flashcards-back-1").html(value.back);
  //   })
  // })

  $(".toggle-right").click(function() {
    for (var i = 0; i < 4; i++) {
      $(".flashcards-front-1").html(deck[i].front);
      $(".flashcards-back-1").html(deck[i].back);
    }
  })

  $(".toggle-left").click(function(){
    for (var i = 0; i <4; i--) {
      $(".flashcards-front-1").html(deck[i].front);
      $(".flashcards-back-1").html(deck[i].back);
    }
  })

});
