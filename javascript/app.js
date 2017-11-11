$( () => {
  // console.log('Hey');

  const $row1 = $('<div>').addClass('row-1');
  const $row2 = $('<div>').addClass('row-2');
  const $row3 = $('<div>').addClass('row-3');

  $('.container').append($row1);
  $('.container').append($row2);
  $('.container').append($row3);

  const makeBoard = (row, boardId, sqId) => { //creates 1 board
    const $boardDiv = $('<div>').addClass('main-board').attr('id', boardId);
    row.append($boardDiv);
    for (let i = 0; i < 9; i ++) {
      let numValue = (i + 1);
      console.log(sqId);
      let positionClass = 'sq-' + (i + 1);
      let $square = $('<div>').addClass('square').addClass(positionClass).attr('id', sqId + numValue);
      $boardDiv.append($square);
    }
  }

  const makeRow = () => { //Makes 3 rows with 3 boards in each column
    for (let r = 0; r < 3; r++) {
      makeBoard($row1, ('r-1-board-' + (r + 1)), ('r1-B' + (r + 1) + '-Sq-'));
      makeBoard($row2, ('r-2-board-' + (r + 1)), ('r2-B' + (r + 1) + '-Sq-'));
      makeBoard($row3, ('r-3-board-' + (r + 1)), ('r3-B' + (r + 1) + '-Sq-'));
    }
  }

makeRow();

//============================
//= if statemesnts Game logic=
//============================
  // if (event.currentTarget === $('.sq-1') {
  //   runBoard1Row1();
  // } else if (event.currentTarget === $('.sq-2') {
  //   runBoard2Row1();
  // } else if (event.currentTarget === $('.sq-3') {
  //   runBoard3Row1();
  // } else if (event.currentTarget === $('.sq-4') {
  //   runBoard1Row2();
  // } else if (event.currentTarget === $('.sq-5') {
  //   runBoard2Row2();
  // } else if (event.currentTarget === $('.sq-6') {
  //   runBoard3Row2();
  // } else if (event.currentTarget === $('.sq-7') {
  //   runBoard1Row3();
  // } else if (event.currentTarget === $('.sq-8') {
  //   runBoard2Row3();
  // } else if (event.currentTarget === $('.sq-9') {
  //   runBoard3Row3();
  // }
//================================
//= End if statemesnts Game logic=
//================================


//Variables
  const $squares = $('.square');
  let toggle = true;
//Boards
  const $r1B1 = $('#r-1-board-1');
  const $r1B2 = $('#r-1-board-2');
  const $r1B3 = $('#r-1-board-3');
  const $r2B1 = $('#r-2-board-1');
  const $r2B2 = $('#r-2-board-2');
  const $r2B3 = $('#r-2-board-3');
  const $r3B1 = $('#r-3-board-1');
  const $r3B2 = $('#r-3-board-2');
  const $r3B3 = $('#r-3-board-3');

//Squares
  //-------Row1-Board1---------
  const $r1B1Square1 = $('#r1-B1-Sq-1');
  const $r1B1Square2 = $('#r1-B1-Sq-2');
  const $r1B1Square3 = $('#r1-B1-Sq-3');
  const $r1B1Square4 = $('#r1-B1-Sq-4');
  const $r1B1Square5 = $('#r1-B1-Sq-5');
  const $r1B1Square6 = $('#r1-B1-Sq-6');
  const $r1B1Square7 = $('#r1-B1-Sq-7');
  const $r1B1Square8 = $('#r1-B1-Sq-8');
  const $r1B1Square9 = $('#r1-B1-Sq-9');
  let row1Board1Clicks = 0;

  //-------Row1-Board2---------
  const $r1B2Square1 = $('#r1-B2-Sq-1');
  const $r1B2Square2 = $('#r1-B2-Sq-2');
  const $r1B2Square3 = $('#r1-B2-Sq-3');
  const $r1B2Square4 = $('#r1-B2-Sq-4');
  const $r1B2Square5 = $('#r1-B2-Sq-5');
  const $r1B2Square6 = $('#r1-B2-Sq-6');
  const $r1B2Square7 = $('#r1-B2-Sq-7');
  const $r1B2Square8 = $('#r1-B2-Sq-8');
  const $r1B2Square9 = $('#r1-B2-Sq-9');
  let row1Board2Clicks = 0;

  //-------Row1-Board3---------
  const $r1B3Square1 = $('#r1-B3-Sq-1');
  const $r1B3Square2 = $('#r1-B3-Sq-2');
  const $r1B3Square3 = $('#r1-B3-Sq-3');
  const $r1B3Square4 = $('#r1-B3-Sq-4');
  const $r1B3Square5 = $('#r1-B3-Sq-5');
  const $r1B3Square6 = $('#r1-B3-Sq-6');
  const $r1B3Square7 = $('#r1-B3-Sq-7');
  const $r1B3Square8 = $('#r1-B3-Sq-8');
  const $r1B3Square9 = $('#r1-B3-Sq-9');
  let row1Board3Clicks = 0;

  //-------Row2-Board1---------
  const $r2B1Square1 = $('#r2-B1-Sq-1');
  const $r2B1Square2 = $('#r2-B1-Sq-2');
  const $r2B1Square3 = $('#r2-B1-Sq-3');
  const $r2B1Square4 = $('#r2-B1-Sq-4');
  const $r2B1Square5 = $('#r2-B1-Sq-5');
  const $r2B1Square6 = $('#r2-B1-Sq-6');
  const $r2B1Square7 = $('#r2-B1-Sq-7');
  const $r2B1Square8 = $('#r2-B1-Sq-8');
  const $r2B1Square9 = $('#r2-B1-Sq-9');
  let row2Board1Clicks = 0;

  //-------Row2-Board2---------
  const $r2B2Square1 = $('#r2-B2-Sq-1');
  const $r2B2Square2 = $('#r2-B2-Sq-2');
  const $r2B2Square3 = $('#r2-B2-Sq-3');
  const $r2B2Square4 = $('#r2-B2-Sq-4');
  const $r2B2Square5 = $('#r2-B2-Sq-5');
  const $r2B2Square6 = $('#r2-B2-Sq-6');
  const $r2B2Square7 = $('#r2-B2-Sq-7');
  const $r2B2Square8 = $('#r2-B2-Sq-8');
  const $r2B2Square9 = $('#r2-B2-Sq-9');
  let row2Board2Clicks = 0;

  //-------Row2-Board3---------
  const $r2B3Square1 = $('#r2-B3-Sq-1');
  const $r2B3Square2 = $('#r2-B3-Sq-2');
  const $r2B3Square3 = $('#r2-B3-Sq-3');
  const $r2B3Square4 = $('#r2-B3-Sq-4');
  const $r2B3Square5 = $('#r2-B3-Sq-5');
  const $r2B3Square6 = $('#r2-B3-Sq-6');
  const $r2B3Square7 = $('#r2-B3-Sq-7');
  const $r2B3Square8 = $('#r2-B3-Sq-8');
  const $r2B3Square9 = $('#r2-B3-Sq-9');
  let row2Board3Clicks = 0;

  //-------Row3-Board1---------
  const $r3B1Square1 = $('#r3-B1-Sq-1');
  const $r3B1Square2 = $('#r3-B1-Sq-2');
  const $r3B1Square3 = $('#r3-B1-Sq-3');
  const $r3B1Square4 = $('#r3-B1-Sq-4');
  const $r3B1Square5 = $('#r3-B1-Sq-5');
  const $r3B1Square6 = $('#r3-B1-Sq-6');
  const $r3B1Square7 = $('#r3-B1-Sq-7');
  const $r3B1Square8 = $('#r3-B1-Sq-8');
  const $r3B1Square9 = $('#r3-B1-Sq-9');
  let row3Board1Clicks = 0;

  //-------Row3-Board2---------
  const $r3B2Square1 = $('#r3-B2-Sq-1');
  const $r3B2Square2 = $('#r3-B2-Sq-2');
  const $r3B2Square3 = $('#r3-B2-Sq-3');
  const $r3B2Square4 = $('#r3-B2-Sq-4');
  const $r3B2Square5 = $('#r3-B2-Sq-5');
  const $r3B2Square6 = $('#r3-B2-Sq-6');
  const $r3B2Square7 = $('#r3-B2-Sq-7');
  const $r3B2Square8 = $('#r3-B2-Sq-8');
  const $r3B2Square9 = $('#r3-B2-Sq-9');
  let row3Board2Clicks = 0;

  //-------Row3-Board3---------
  const $r3B3Square1 = $('#r3-B3-Sq-1');
  const $r3B3Square2 = $('#r3-B3-Sq-2');
  const $r3B3Square3 = $('#r3-B3-Sq-3');
  const $r3B3Square4 = $('#r3-B3-Sq-4');
  const $r3B3Square5 = $('#r3-B3-Sq-5');
  const $r3B3Square6 = $('#r3-B3-Sq-6');
  const $r3B3Square7 = $('#r3-B3-Sq-7');
  const $r3B3Square8 = $('#r3-B3-Sq-8');
  const $r3B3Square9 = $('#r3-B3-Sq-9');
  let row3Board3Clicks = 0;

  const gamePlay = (sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9, clickCount) => {
    if ($(event.currentTarget).text() === '') {
      clickCount += 1;
      console.log(clickCount);

      if (toggle === true) {
        // console.log('I was clicked');
        $(event.currentTarget).text('x');
        toggle = false;
      } else if (toggle === false) {
        $(event.currentTarget).text('o');
        toggle = true;
      }

      } else {
        return false;
      };

      if (sq1.text() !== '' && sq2.text() !== '' && sq3.text() !== '') {
        if(sq1.text() === sq2.text() && sq1.text() === sq3.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if (sq4.text() !== '' && sq5.text() !== '' && sq6.text() !== '') {
        if(sq4.text() === sq5.text() && sq4.text() === sq6.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if (sq7.text() !== '' && sq8.text() !== '' && sq9.text() !== '') {
        if(sq7.text() === sq8.text() && sq7.text() === sq9.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if (sq1.text() !== '' && sq4.text() !== '' && sq7.text() !== '') {
        if(sq1.text() === sq4.text() && sq1.text() === sq7.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if (sq2.text() !== '' && sq5.text() !== '' && sq8.text() !== '') {
        if(sq2.text() === sq5.text() && sq2.text() === sq8.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if (sq3.text() !== '' && sq6.text() !== '' && sq9.text() !== '') {
        if(sq3.text() === sq6.text() && sq3.text() === sq9.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if (sq1.text() !== '' && sq5.text() !== '' && sq9.text() !== '') {
        if(sq1.text() === sq5.text() && sq1.text() === sq9.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }

        }
      }
      if (sq3.text() !== '' && sq5.text() !== '' && sq7.text() !== '') {
        if(sq3.text() === sq5.text() && sq3.text() === sq7.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if (clickCount === 9) {
        alert('Tie');
      }
  };

  const boardDirectory = () => {
    if (event.currentTarget === $('.sq-1')) {
      runBoard1Row1();
    } else if (event.currentTarget === $('.sq-2')) {
      runBoard2Row1();
    } else if (event.currentTarget === $('.sq-3')) {
      runBoard3Row1();
    } else if (event.currentTarget === $('.sq-4')) {
      runBoard1Row2();
    } else if (event.currentTarget === $('.sq-5')) {
      runBoard2Row2();
    } else if (event.currentTarget === $('.sq-6')) {
      runBoard3Row2();
    } else if (event.currentTarget === $('.sq-7')) {
      runBoard1Row3();
    } else if (event.currentTarget === $('.sq-8')) {
      runBoard2Row3();
    } else if (event.currentTarget === $('.sq-9')) {
      runBoard3Row3();
    }
  };

  const greyOut = (highlightedB, b1, b2, b3, b4 , b5 , b6 , b7, b8) => { //Grey's out the squares of the boards that are not in play, and hoghlights the one that is
  highlightedB.css('background', 'yellow');

  b1.children().css('background', 'grey');
  b2.children().css('background', 'grey');
  b3.children().css('background', 'grey');
  b4.children().css('background', 'grey');
  b5.children().css('background', 'grey');
  b6.children().css('background', 'grey');
  b7.children().css('background', 'grey');
  b8.children().css('background', 'grey');
  }

const runBoard1Row1 = () => {
  greyOut($r1B1, $r1B2, $r1B3, $r2B1, $r2B2, $r2B3, $r3B1, $r3B2, $r3B3);
  $squares.on('click', () => {
    boardDirectory();
    gamePlay($r1B1Square1, $r1B1Square2, $r1B1Square3, $r1B1Square4, $r1B1Square5, $r1B1Square6, $r1B1Square7, $r1B1Square8, $r1B1Square9, row1Board1Clicks);
  });
};

const runBoard2Row1 = () => {
  greyOut($r1B2, $r1B1, $r1B3, $r2B1, $r2B2, $r2B3, $r3B1, $r3B2, $r3B3);
  $squares.on('click', () => {
    boardDirectory();
    gamePlay($r1B2Square1, $r1B2Square2, $r1B2Square3, $r1B2Square4, $r1B2Square5, $r1B2Square6, $r1B2Square7, $r1B2Square8, $r1B2Square9, row1Board2Clicks);
  });
};

const runBoard3Row1 = () => {
  greyOut($r1B3, $r1B1, $r1B2, $r2B1, $r2B2, $r2B3, $r3B1, $r3B2, $r3B3);
  $squares.on('click', () => {
    boardDirectory();
    gamePlay($r1B3Square1, $r1B3Square2, $r1B3Square3, $r1B3Square4, $r1B3Square5, $r1B3Square6, $r1B3Square7, $r1B3Square8, $r1B3Square9, row1Board3Clicks);
  });
};

const runBoard1Row2 = () => {
  greyOut($r2B1, $r1B1, $r1B2, $r1B3, $r2B2, $r2B3, $r3B1, $r3B2, $r3B3);
  $squares.on('click', () => {
    boardDirectory();
    gamePlay($r2B1Square1, $r2B1Square2, $r2B1Square3, $r2B1Square4, $r2B1Square5, $r2B1Square6, $r2B1Square7, $r2B1Square8, $r2B1Square9, row2Board1Clicks);
  });
}

const runBoard2Row2 = () => {
  greyOut($r2B2, $r1B1, $r1B2, $r1B3, $r2B1, $r2B3, $r3B1, $r3B2, $r3B3);
  $squares.on('click', () => {
    boardDirectory();
    gamePlay($r2B2Square1, $r2B2Square2, $r2B2Square3, $r2B2Square4, $r2B2Square5, $r2B2Square6, $r2B2Square7, $r2B2Square8, $r2B2Square9, row2Board2Clicks);
  });
}

const runBoard3Row2 = () => {
  greyOut($r2B3, $r1B1, $r1B2, $r1B3, $r2B2, $r2B1, $r3B1, $r3B2, $r3B3);
  $squares.on('click', () => {
    boardDirectory();
    gamePlay($r2B3Square1, $r2B3Square2, $r2B3Square3, $r2B3Square4, $r2B3Square5, $r2B3Square6, $r2B3Square7, $r2B3Square8, $r2B3Square9, row2Board3Clicks);
  });
}

const runBoard1Row3 = () => {
  greyOut($r3B1, $r1B1, $r1B2, $r1B3, $r2B1, $r2B2, $r2B3, $r3B2, $r3B3);
  $squares.on('click', () => {
    boardDirectory();
    gamePlay($r3B1Square1, $r3B1Square2, $r3B1Square3, $r3B1Square4, $r3B1Square5, $r3B1Square6, $r3B1Square7, $r3B1Square8, $r3B1Square9, row3Board1Clicks);
  });
}

const runBoard2Row3 = () => {
  greyOut($r3B2, $r1B1, $r1B2, $r1B3, $r2B1, $r2B2, $r2B3, $r3B1, $r3B3);
  $squares.on('click', () => {
    boardDirectory();
    gamePlay($r3B2Square1, $r3B2Square2, $r3B2Square3, $r3B2Square4, $r3B2Square5, $r3B2Square6, $r3B2Square7, $r3B2Square8, $r3B2Square9, row3Board2Clicks);
  });
}

const runBoard3Row3 = () => {
  greyOut($r3B3, $r1B1, $r1B2, $r1B3, $r2B1, $r2B2, $r2B3, $r3B1, $r3B2);
  $squares.on('click', () => {
    boardDirectory();
    gamePlay($r3B3Square1, $r3B3Square2, $r3B3Square3, $r3B3Square4, $r3B3Square5, $r3B3Square6, $r3B3Square7, $r3B3Square8, $r3B3Square9, row3Board3Clicks);
  });
}

const startGame = () => {
  runBoard2Row2();
};

startGame();

});
