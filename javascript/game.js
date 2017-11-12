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


//Variables------------------------------------------------------
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

const runGame = () => { //Game Logic
  if ($(event.currentTarget).text() === '') {


    //Enter Code Here
    if (!$(event.currentTarget).hasClass('done')) {
      if ($(event.currentTarget).parent().hasClass('active')){

        if (toggle === true) {
          $(event.currentTarget).text('x');
          toggle = false;
        } else if (toggle === false) {
          $(event.currentTarget).text('o');
          toggle = true;
        }

        if ($(event.currentTarget).hasClass('sq-1')) {
          greyOut($r1B1, $r1B2, $r1B3, $r2B1, $r2B2, $r2B3, $r3B1, $r3B2, $r3B3);
          gamePlay($r1B1Square1, $r1B1Square2, $r1B1Square3, $r1B1Square4, $r1B1Square5, $r1B1Square6, $r1B1Square7, $r1B1Square8, $r1B1Square9, row1Board1Clicks);

        } else if ($(event.currentTarget).hasClass('sq-2')) {
          greyOut($r1B2, $r1B1, $r1B3, $r2B1, $r2B2, $r2B3, $r3B1, $r3B2, $r3B3);
          gamePlay($r1B2Square1, $r1B2Square2, $r1B2Square3, $r1B2Square4, $r1B2Square5, $r1B2Square6, $r1B2Square7, $r1B2Square8, $r1B2Square9, row1Board2Clicks);

        } else if ($(event.currentTarget).hasClass('sq-3')) {
          greyOut($r1B3, $r1B1, $r1B2, $r2B1, $r2B2, $r2B3, $r3B1, $r3B2, $r3B3);
          gamePlay($r1B3Square1, $r1B3Square2, $r1B3Square3, $r1B3Square4, $r1B3Square5, $r1B3Square6, $r1B3Square7, $r1B3Square8, $r1B3Square9, row1Board3Clicks);

        } else if ($(event.currentTarget).hasClass('sq-4')) {
          greyOut($r2B1, $r1B1, $r1B2, $r1B3, $r2B2, $r2B3, $r3B1, $r3B2, $r3B3);
          gamePlay($r2B1Square1, $r2B1Square2, $r2B1Square3, $r2B1Square4, $r2B1Square5, $r2B1Square6, $r2B1Square7, $r2B1Square8, $r2B1Square9, row2Board1Clicks);

        } else if ($(event.currentTarget).hasClass('sq-5')) {
          greyOut($r2B2, $r1B1, $r1B2, $r1B3, $r2B1, $r2B3, $r3B1, $r3B2, $r3B3);
          gamePlay($r2B2Square1, $r2B2Square2, $r2B2Square3, $r2B2Square4, $r2B2Square5, $r2B2Square6, $r2B2Square7, $r2B2Square8, $r2B2Square9, row2Board2Clicks);

        } else if ($(event.currentTarget).hasClass('sq-6')) {
          greyOut($r2B3, $r1B1, $r1B2, $r1B3, $r2B2, $r2B1, $r3B1, $r3B2, $r3B3);
          gamePlay($r2B3Square1, $r2B3Square2, $r2B3Square3, $r2B3Square4, $r2B3Square5, $r2B3Square6, $r2B3Square7, $r2B3Square8, $r2B3Square9, row2Board3Clicks);

        } else if ($(event.currentTarget).hasClass('sq-7')) {
          greyOut($r3B1, $r1B1, $r1B2, $r1B3, $r2B1, $r2B2, $r2B3, $r3B2, $r3B3);
          gamePlay($r3B1Square1, $r3B1Square2, $r3B1Square3, $r3B1Square4, $r3B1Square5, $r3B1Square6, $r3B1Square7, $r3B1Square8, $r3B1Square9, row3Board1Clicks);

        } else if ($(event.currentTarget).hasClass('sq-8')) {
          greyOut($r3B2, $r1B1, $r1B2, $r1B3, $r2B1, $r2B2, $r2B3, $r3B1, $r3B3);
          gamePlay($r3B2Square1, $r3B2Square2, $r3B2Square3, $r3B2Square4, $r3B2Square5, $r3B2Square6, $r3B2Square7, $r3B2Square8, $r3B2Square9, row3Board2Clicks);

        } else if ($(event.currentTarget).hasClass('sq-9')) {
          greyOut($r3B3, $r1B1, $r1B2, $r1B3, $r2B1, $r2B2, $r2B3, $r3B1, $r3B2);
          gamePlay($r3B3Square1, $r3B3Square2, $r3B3Square3, $r3B3Square4, $r3B3Square5, $r3B3Square6, $r3B3Square7, $r3B3Square8, $r3B3Square9, row3Board3Clicks);
        }

        //End Code Here
      };
    };
  };
};

const greyOut = (highlightedB, b2, b3, b4, b5 , b6 , b7 , b8, b9) => { //Grey's out the squares of the boards that are not in play, and hoghlights the one that is as well as make it active
    highlightedB.addClass('active');
    highlightedB.children().addClass('sq-active');
    highlightedB.children().removeClass('inActive');


    b2.children().removeClass('sq-active');
    b2.children().addClass('inActive');
      b2.removeClass('active');


    b3.children().removeClass('sq-active');
    b3.children().addClass('inActive');
      b3.removeClass('active');


    b4.children().removeClass('sq-active');
    b4.children().addClass('inActive');
      b4.removeClass('active');


    b5.children().removeClass('sq-active');
    b5.children().addClass('inActive');
      b5.removeClass('active');


    b6.children().removeClass('sq-active');
    b6.children().addClass('inActive');
      b6.removeClass('active');


    b7.children().removeClass('sq-active');
    b7.children().addClass('inActive');
      b7.removeClass('active');


    b8.children().removeClass('sq-active');
    b8.children().addClass('inActive');
      b8.removeClass('active');


    b9.children().removeClass('sq-active');
    b9.children().addClass('inActive');
      b9.removeClass('active');
      
  };

const newGame = () => {
  greyOut($r2B2, $r1B1, $r1B2, $r1B3, $r2B1, $r2B3, $r3B1, $r3B2, $r3B3);
};

  newGame();
  $squares.on('click', runGame);

});