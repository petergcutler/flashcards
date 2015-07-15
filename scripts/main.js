var flashcard = {

  // flashcard.deck contains the cards in the set
  deck: [
    {front: "Welcome to your card manager",
     back: "This is the back of your first card",
     correct: null},

    {front: "Here's your second card",
     back: "You guessed it, the back of your second card",
     correct: null},

    {front: "The front of card three",
     back: "the back of card 3",
     correct: null}],

  // flashcard.deckFocus, one day, will contain specially marked cards
  deckFocus: [],

  // cur is the current count or index of the card array
  cur: 0,

  flipCounter: true,

  // facefirst assigns which card face displays first, front or back
  facefirst: true,

  // els contains the elements on the page
  els: {
    displayFront: $(".flashcards-front-1"),
    displayBack: $(".flashcards-back-1"),
    displayIncor: $(".incorrect-category"),
    displayCor: $(".correct-category"),
    moveToRight: $(".move-right"),
    moveToLeft: $(".move-left"),
    currentFace: $(".flashcards-currentface"),
    flashcardBlock: $(".flashcards-block-1"),
    frontFirst: $("#front_first"),
    flipCard: $(".flip"),
    bigBody: $("body"),
    mkNewCard: $(".new-card")},

  // the primary function
  listen: function() {
    console.log("current face setting is " + flashcard.facefirst)
    // Rendering the cur count of i in the array on page load
    this.els.displayFront.html(flashcard.deck[flashcard.cur].front)
    this.els.displayBack.html(flashcard.deck[flashcard.cur].back)
    this.els.currentFace.html("front")

    // flipping the card
    function flipTheCard() {
      if (flashcard.flipCounter === true) {
        flashcard.flipCounter = false;
        flashcard.els.currentFace.html("back");
      } else if (flashcard.flipCounter === false) {
        flashcard.flipCounter = true;
        flashcard.els.currentFace.html("front");
      }
      flashcard.els.displayFront.toggleClass("flashcard-hidden")
      flashcard.els.displayBack.toggleClass("flashcard-hidden")
    }

    flashcard.els.flipCard.click( flipTheCard )
    flashcard.els.flashcardBlock.click( flipTheCard )

    flashcard.els.bigBody.keydown(function(e) {
      if(e.keyCode == 38) {
        flipTheCard();
      }
      if(e.keyCode == 40) {
        flipTheCard();
      }
    })

    // Defining the function to create a new card
    function newCard () {
      newfront = prompt("What do you want the front to say?");
      newback = prompt("What do you want the back to say?");

      flashcard.deck.push({front: newfront, back: newback, correct: null});
    }

    flashcard.els.mkNewCard.click( newCard );

    // Defining the function to render true/false/null to css
    function trueOrFalse() {
      flashcard.els.displayIncor.removeClass();
      flashcard.els.displayCor.removeClass();

        if (flashcard.deck[flashcard.cur].correct === null) {
          $("#incorrect").addClass("answer-null")
          $("#correct").addClass("answer-null")
        } if (flashcard.deck[flashcard.cur].correct === true) {
          $("#incorrect").addClass("answer-true")
          $("#correct").addClass("answer-true")
        } if (flashcard.deck[flashcard.cur].correct === false) {
          $("#incorrect").addClass("answer-false")
          $("#correct").addClass("answer-false")
        }
    }

    function setIncorrect () {
      if (flashcard.deck[flashcard.cur].correct === null) {
        flashcard.deck[flashcard.cur].correct = false;
      } else if (flashcard.deck[flashcard.cur].correct === false) {
        flashcard.deck[flashcard.cur].correct = null;
      } else if (flashcard.deck[flashcard.cur].correct === true) {
        flashcard.deck[flashcard.cur].correct = false;
      }
      trueOrFalse();
    }

    function setCorrect () {
      if (flashcard.deck[flashcard.cur].correct === null) {
        flashcard.deck[flashcard.cur].correct = true;
      } else if (flashcard.deck[flashcard.cur].correct === true) {
        flashcard.deck[flashcard.cur].correct = null;
      } else if (flashcard.deck[flashcard.cur].correct === false) {
        flashcard.deck[flashcard.cur].correct = true;
      }
      trueOrFalse();
    }

    // defining the functions to control movement left and right
    function displayCurrentFace() {
      flashcard.els.displayFront.removeClass("flashcard-hidden");
      flashcard.els.displayBack.removeClass("flashcard-hidden");
      if (flashcard.facefirst === true) {
        flashcard.flipCounter = true;
        flashcard.els.displayBack.addClass("flashcard-hidden");
        flashcard.els.displayFront.html(flashcard.deck[flashcard.cur].front);
        flashcard.els.currentFace.html("front");
      } else if (flashcard.facefirst === false) {
        flashcard.flipCounter = false;
        flashcard.els.displayFront.addClass("flashcard-hidden");
        flashcard.els.displayBack.html(flashcard.deck[flashcard.cur].back);
        flashcard.els.currentFace.html("back");
      }
      console.log("current face setting is " + flashcard.facefirst)
    }

    function moveRight() {
      // if current deck is at the end, set it to 0
      // otherwise, move a count up
      // update front html with new card
      // update back html with new card
      // run true or false
      if (flashcard.cur >= (flashcard.deck.length - 1)) {
        flashcard.cur = 0;
      } else {
        flashcard.cur++;
      }
      displayCurrentFace();
      trueOrFalse();
    }

    function moveLeft() {
      if (flashcard.cur === 0) {
        flashcard.cur = (flashcard.deck.length - 1);
      } else {
        flashcard.cur--;
      }
      displayCurrentFace()
      trueOrFalse();
    }

    // define function to assign class for front-first toggle
    function switchFace() {
      console.log("you ran switchFace")
      if (flashcard.facefirst === true) {
        flashcard.facefirst = false;
        flashcard.flipCounter = false;
        flashcard.els.currentFace.html("back");
        flashcard.els.displayFront.toggleClass("flashcard-hidden")
        flashcard.els.displayBack.toggleClass("flashcard-hidden")
        flashcard.els.frontFirst.toggleClass("displaying-front");
        } else if (flashcard.facefirst === false) {
        flashcard.facefirst = true;
        flashcard.flipCounter = true;
        flashcard.els.currentFace.html("front");
        flashcard.els.displayFront.toggleClass("flashcard-hidden")
        flashcard.els.displayBack.toggleClass("flashcard-hidden")
        flashcard.els.frontFirst.toggleClass("displaying-front");
        }
        console.log("current face setting is " + flashcard.facefirst)
    }
      flashcard.els.frontFirst.click( switchFace );

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
