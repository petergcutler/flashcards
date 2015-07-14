var flashcard = {
  // flashcard.deck contains the cards in the set
  deck: [
    {front: "front of 1",
     back: "back of 1",
     correct: null},

    {front: "front of 2",
     back: "back of 2",
     correct: null},

    {front: "front of 3",
     back: "back of 3",
     correct: null}],
  // flashcard.deckFocus, one day, will contain specially marked cards
  deckFocus: [],
  // cur is the current count or index of the card array
  cur: 0,
  // els contains the elements on the page
  els: {
    displayFront: $(".flashcards-front-1"),
    displayBack: $(".flashcards-back-1"),
    displayIncor: $(".incorrect-category"),
    displayCor: $(".correct-category"),
    moveToRight: $(".move-right"),
    moveToLeft: $(".move-left"),
    flipCard: $(".flip"),
    bigBody: $("body"),
    mkNewCard: $(".new-card")},
  // the primary function
  listen: function() {

    // Rendering the cur count of i in the array on page load
    this.els.displayFront.html(flashcard.deck[flashcard.cur].front)
    this.els.displayBack.html(flashcard.deck[flashcard.cur].back)

    // flipping the card
    function flipTheCard() {
      flashcard.els.displayFront.toggleClass("flashcard-hidden")
      flashcard.els.displayBack.toggleClass("flashcard-hidden")
    }
    this.els.flipCard.click( flipTheCard )
    this.els.bigBody.keydown(function(e) {
      if(e.keyCode == 38) {
        console.log("pressed 38")
        flipTheCard();
      }
    })
    this.els.bigBody.keydown(function(e) {
      if(e.keyCode == 40) {
        flipTheCard();
      }
    })

    // Defining the function to create a new card
    function newCard () {
      newfront = prompt("What do you want the front to say?");
      newback = prompt("What do you want the back to say?");

      flashcard.deck.push({front: newfront, back: newback, correct: null});
      console.log(flashcard.deck);
    }
    this.els.mkNewCard.click( newCard );

    // Defining the functions to increase/decrease i ; move card right/left
    this.els.moveToRight.click(function moveToRight() {

    })
  }
}
flashcard.listen();

  console.log("ready!");

// Defining the functions to increase/decrease i ; move card right/left

  function moveRight() {
    trueOrFalse();
    if (flashcard.cur >= (flashcard.deck.length - 1)) {
      flashcard.cur = 0;
    } else {
      flashcard.cur++;
    }
    flashcard.els.displayFront.html(flashcard.deck[flashcard.cur].front);
    flashcard.els.displayBack.html(flashcard.deck[flashcard.cur].back);
  }

  function moveLeft() {
    trueOrFalse();
    if (flashcard.cur === 0) {
      flashcard.cur = (flashcard.deck.length - 1);
    } else {
      flashcard.cur--;
    }
    flashcard.els.displayFront.html(flashcard.deck[flashcard.cur].front);
    flashcard.els.displayBack.html(flashcard.deck[flashcard.cur].back);
  }

// Defining the function to evaluate .correct settings

  // set the true/false value of .correct

  function setIncorrect () {
    if (flashcard.deck[flashcard.cur].correct === null) {
      console.log("Clicked incorrect. Status was null. Switching to false")
      flashcard.deck[flashcard.cur].correct = false;
    } else if (flashcard.deck[flashcard.cur].correct === false) {
      console.log("Clicked incorrect. Status was false. Switching to null")
      flashcard.deck[flashcard.cur].correct = null;
      }
      console.log("Status ends at: " + flashcard.deck[flashcard.cur].correct)
      trueOrFalse();
  }

  function setCorrect () {
    if (flashcard.deck[flashcard.cur].correct === null) {
      console.log("Clicked correct. Status was null. Switching to true")
      flashcard.deck[flashcard.cur].correct = true;
      } else if (flashcard.deck[flashcard.cur].correct === true) {
      console.log("Clicked correct. Status was true. Switching to null")
      flashcard.deck[flashcard.cur].correct = null;
      }
      console.log("Status ends at: " + flashcard.deck[flashcard.cur].correct)
      trueOrFalse();
  }

  // render correctness to css

  function trueOrFalse() {
    console.log("youre running trueOrFalse")

    if ((flashcard.deck[flashcard.cur].correct === null) && (flashcard.els.displayIncor.hasClass("answer-null"))) {
      console.log("null and we're good to go! I'm not doing shit");

    } else if ((flashcard.deck[flashcard.cur].correct === null) && (flashcard.els.displayIncor.hasClass("answer-false")))  {
      console.log("if condition met");
      flashcard.els.displayIncor.toggleClass("answer-false");
      flashcard.els.displayIncor.toggleClass("answer-null");

    } else if ((flashcard.deck[flashcard.cur].correct === null) && (flashcard.els.displayIncor.hasClass("answer-true")))  {
        console.log("if condition met");
        flashcard.els.displayIncor.toggleClass("answer-true");
        flashcard.els.displayIncor.toggleClass("answer-null");

// need a "this" statement for this...
// otherwise I'd have to segment this massive function across both incorrect and correct.

    } else if (flashcard.deck[flashcard.cur].correct === false) {
      console.log("else if condition met")
      flashcard.els.displayIncor.toggleClass("answer-false");
      flashcard.els.displayIncor.toggleClass("answer-true");

    } else if (flashcard.deck[flashcard.cur].correct === true) {
      console.log("else if condition 2 met")
      flashcard.els.displayCor.toggleClass("answer-false");
      flashcard.els.displayCor.toggleClass("answer-true");
    }
  }

// Defining listeners to trigger the functions

  // on click
  flashcard.els.moveToRight.click( moveRight );
  flashcard.els.moveToLeft.click( moveLeft );

  flashcard.els.displayIncor.click( setIncorrect );
  flashcard.els.displayCor.click( setCorrect );

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
    if(e.keyCode == 191) {
      setIncorrect();
    }
  })

  $("body").keydown(function(e) {
    if(e.keyCode == 222) {
      setCorrect();
    }
  })
