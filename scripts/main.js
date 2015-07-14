var flashcard = {
  // flashcard.deck contains the cards in the set
  deck: [
    {front: "Welcome to your card manager.",
     back: "I see you found the back of the card.",
     correct: null},

    {front: "Ah. You clicked next.",
     back: "You knew what would happen here.",
     correct: null},

    {front: "Try making a new card. Nothing to see here.",
     back: "Or here. New cards, remember?",
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
    flashcard.els.displayFront.html(flashcard.deck[flashcard.cur].front)
    flashcard.els.displayBack.html(flashcard.deck[flashcard.cur].back)

    // flipping the card
    function flipTheCard() {
      flashcard.els.displayFront.toggleClass("flashcard-hidden")
      flashcard.els.displayBack.toggleClass("flashcard-hidden")
    }
    flashcard.els.flipCard.click( flipTheCard )
    flashcard.els.bigBody.keydown(function(e) {
      if(e.keyCode == 38) {
        flipTheCard();
      }
    })
    flashcard.els.bigBody.keydown(function(e) {
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
    flashcard.els.mkNewCard.click( newCard );

    // Defining the function to render true/false/null to css
    function trueOrFalse() {
      console.log("youre running trueOrFalse")

        if ((flashcard.deck[flashcard.cur].correct === null) && (flashcard.els.displayIncor.hasClass("answer-empty"))) {
        console.log("doing nothing");
      } if ((flashcard.deck[flashcard.cur].correct === null) && (flashcard.els.displayIncor.hasClass("answer-full"))) {
        flashcard.els.displayIncor.toggleClass("answer-full");
        flashcard.els.displayIncor.toggleClass("answer-empty");
      } if ((flashcard.deck[flashcard.cur].correct === null) && (flashcard.els.displayCor.hasClass("answer-empty"))) {
        console.log("doing nothing");
      } if ((flashcard.deck[flashcard.cur].correct === null) && (flashcard.els.displayCor.hasClass("answer-full"))) {
        flashcard.els.displayCor.toggleClass("answer-full");
        flashcard.els.displayCor.toggleClass("answer-empty");

      } if ((flashcard.deck[flashcard.cur].correct === true) && (flashcard.els.displayIncor.hasClass("answer-empty"))) {
        console.log("doing nothing");
      } if ((flashcard.deck[flashcard.cur].correct === true) && (flashcard.els.displayIncor.hasClass("answer-full"))) {
        flashcard.els.displayIncor.toggleClass("answer-full");
        flashcard.els.displayIncor.toggleClass("answer-empty");
      } if ((flashcard.deck[flashcard.cur].correct === true) && (flashcard.els.displayCor.hasClass("answer-empty"))) {
        flashcard.els.displayCor.toggleClass("answer-empty");
        flashcard.els.displayCor.toggleClass("answer-full");
      } if ((flashcard.deck[flashcard.cur].correct === true) && (flashcard.els.displayCor.hasClass("answer-full"))) {
        console.log("doing nothing");

      } if ((flashcard.deck[flashcard.cur].correct === false) && (flashcard.els.displayIncor.hasClass("answer-empty"))) {
        flashcard.els.displayIncor.toggleClass("answer-empty");
        flashcard.els.displayIncor.toggleClass("answer-full");
      } if ((flashcard.deck[flashcard.cur].correct === false) && (flashcard.els.displayIncor.hasClass("answer-full"))) {
        console.log("doing nothing");
      } if ((flashcard.deck[flashcard.cur].correct === false) && (flashcard.els.displayCor.hasClass("answer-empty"))) {
        console.log("doing nothing");
      } if ((flashcard.deck[flashcard.cur].correct === false) && (flashcard.els.displayCor.hasClass("answer-full"))) {
        flashcard.els.displayCor.toggleClass("answer-full");
        flashcard.els.displayCor.toggleClass("answer-empty");
      }
    }

    function setIncorrect () {
      if (flashcard.deck[flashcard.cur].correct === null) {
        console.log("Clicked incorrect. Status was null. Switching to false")
        flashcard.deck[flashcard.cur].correct = false;
      } else if (flashcard.deck[flashcard.cur].correct === false) {
        console.log("Clicked incorrect. Status was false. Switching to null")
        flashcard.deck[flashcard.cur].correct = null;
      } else if (flashcard.deck[flashcard.cur].correct === true) {
        console.log("Clicked incorrect. Status was true. Switching to false")
        flashcard.deck[flashcard.cur].correct = false;
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
      } else if (flashcard.deck[flashcard.cur].correct === false) {
        console.log("Clicked correct. Status was false. Switching to true")
        flashcard.deck[flashcard.cur].correct = true;
      }
      console.log("Status ends at: " + flashcard.deck[flashcard.cur].correct)
      trueOrFalse();
    }

    function moveRight() {
      if (flashcard.cur >= (flashcard.deck.length - 1)) {
        flashcard.cur = 0;
      } else {
        flashcard.cur++;
      }
      flashcard.els.displayFront.html(flashcard.deck[flashcard.cur].front);
      flashcard.els.displayBack.html(flashcard.deck[flashcard.cur].back);
      trueOrFalse();
    }

    function moveLeft() {
      if (flashcard.cur === 0) {
        flashcard.cur = (flashcard.deck.length - 1);
      } else {
        flashcard.cur--;
      }
      flashcard.els.displayFront.html(flashcard.deck[flashcard.cur].front);
      flashcard.els.displayBack.html(flashcard.deck[flashcard.cur].back);
      trueOrFalse();
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
  }
}
flashcard.listen();

  console.log("ready!");

// Defining the functions to increase/decrease i ; move card right/left



// Defining the function to evaluate .correct settings

  // set the true/false value of .correct



  // render correctness to css
  //
  // function trueOrFalse() {
  //   console.log("youre running trueOrFalse")
  //
  //   if (flashcard.deck[flashcard.cur].correct === null) {
  //
  //   } else if ((flashcard.deck[flashcard.cur].correct === null) && (flashcard.els.displayIncor.hasClass("answer-false")))  {
  //     console.log("if condition met");
  //     flashcard.els.displayIncor.toggleClass("answer-false");
  //     flashcard.els.displayIncor.toggleClass("answer-null");
  //
  //   } else if ((flashcard.deck[flashcard.cur].correct === null) && (flashcard.els.displayIncor.hasClass("answer-true")))  {
  //       console.log("if condition met");
  //       flashcard.els.displayIncor.toggleClass("answer-true");
  //       flashcard.els.displayIncor.toggleClass("answer-null");
  //
  //   } else if (flashcard.deck[flashcard.cur].correct === false) {
  //     console.log("else if condition met")
  //     flashcard.els.displayIncor.toggleClass("answer-false");
  //     flashcard.els.displayIncor.toggleClass("answer-true");
  //
  //   } else if (flashcard.deck[flashcard.cur].correct === true) {
  //     console.log("else if condition 2 met")
  //     flashcard.els.displayCor.toggleClass("answer-false");
  //     flashcard.els.displayCor.toggleClass("answer-true");
  //   }
  // }
