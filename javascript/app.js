$( () => {
  // console.log('Hey');

  const $column1 = $('<div>').addClass('column-1');
  const $column2 = $('<div>').addClass('column-2');
  const $column3 = $('<div>').addClass('column-3');

  $('.container').append($column1);
  $('.container').append($column2);
  $('.container').append($column3);

  const makeBoard = (column, boardId, sqId) => { //creates 1 board
    const $boardDiv = $('<div>').addClass('main-board').attr('id', boardId);
    column.append($boardDiv);
    for (let i = 0; i < 9; i ++) {

      sqId += i + 1;
      // sqId.toString();
      console.log(sqId);
      let positionClass = 'sq-' + (i + 1);
      let $square = $('<div>').addClass('square').addClass(positionClass).attr('id', sqId);
      $boardDiv.append($square);
    }
  }

  const makeColumn = () => { //Makes 3 columns with 3 boards in each column
    for (let c = 0; c < 3; c++) {
      makeBoard($column1, ('c-1-board-' + (c + 1)), ('c1-B' + (c + 1) + '-Sq-'));
      makeBoard($column2, ('c-2-board-' + (c + 1)));
      makeBoard($column3, ('c-3-board-' + (c + 1)));
    }
  }

  // const make9Boards = () => {
  //   for (let b = 0; b < 9; b++) {
  //
  //   }
  // }
makeColumn();

//Variables
  const $place = $('.square');
  let toggle = true;
  const $box1 = $('#sq-1');
  const $box2 = $('#sq-2');
  const $box3 = $('#sq-3');
  const $box4 = $('#sq-4');
  const $box5 = $('#sq-5');
  const $box6 = $('#sq-6');
  const $box7 = $('#sq-7');
  const $box8 = $('#sq-8');
  const $box9 = $('#sq-9');
  let clicks = 0;

  const xAndO = (event) => {
    if ($(event.currentTarget).text() === '') {
      clicks += 1;
      console.log(clicks);

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
      const board1 = () => {}
      if ($box1.text() !== '' && $box2.text() !== '' && $box3.text() !== '') {
        if($box1.text() === $box2.text() && $box1.text() === $box3.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if ($box4.text() !== '' && $box5.text() !== '' && $box6.text() !== '') {
        if($box4.text() === $box5.text() && $box4.text() === $box6.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if ($box7.text() !== '' && $box8.text() !== '' && $box9.text() !== '') {
        if($box7.text() === $box8.text() && $box7.text() === $box9.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if ($box1.text() !== '' && $box4.text() !== '' && $box7.text() !== '') {
        if($box1.text() === $box4.text() && $box1.text() === $box7.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if ($box2.text() !== '' && $box5.text() !== '' && $box8.text() !== '') {
        if($box2.text() === $box5.text() && $box2.text() === $box8.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if ($box3.text() !== '' && $box6.text() !== '' && $box9.text() !== '') {
        if($box3.text() === $box6.text() && $box3.text() === $box9.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if ($box1.text() !== '' && $box5.text() !== '' && $box9.text() !== '') {
        if($box1.text() === $box5.text() && $box1.text() === $box9.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }

        }
      }
      if ($box3.text() !== '' && $box5.text() !== '' && $box7.text() !== '') {
        if($box3.text() === $box5.text() && $box3.text() === $box7.text()) {
          if (toggle === false){
            alert("X's Win!")
            console.log("you Win");
          } else if (toggle === true) {
            alert("O's Win!")
            console.log("you Win");
          }
        }
      }
      if (clicks === 9) {
        alert('Tie');
      }
  };

  $place.on('click', xAndO);
});




//------------------------------------------Past Attempts

// for (i = 0; i < 9; i++) {

  // if (i < 3){ //creates boards in column 1
  //   let boardId = 'board-column-1-' + (i + 1);
  //   boardId.toString();
  //   let $boardColumn1 = $('<div>').addClass('board').attr('id', boardId);
  //   $column1.append($boardColumn1);
  //
  //   if (i === 0) { //Create board 1 in column 1
  //   for (let b=0; b<9; b++){
  //     let id = 'sq-board-1-' + (b + 1);
  //     id.toString();
  //       let $square = $('<div>').addClass('square').attr('id', id);
  //         $boardColumn1.append($square);
  //     }
  //   }
  //   if (i === 1) { //Create board 2 in column 1
  //   for (let b=0; b<9; b++){
  //     let id = 'sq-board-2-' + (b + 1);
  //     id.toString();
  //       let $square = $('<div>').addClass('square').attr('id', id);
  //         $boardColumn1.append($square);
  //     }
  //   }
  //   if (i === 2) { //Create board 3 in column 1
  //   for (let b=0; b<9; b++){
  //     let id = 'sq-board-3-' + (b + 1);
  //     id.toString();
  //       let $square = $('<div>').addClass('square').attr('id', id);
  //         $boardColumn1.append($square);
  //     }
  //   }
  // } else if (i < 6){ //creates boards in column 2
  //     let boardId = 'board-column-2-' + (i + 1);
  //     boardId.toString();
  //     let $boardColumn1 = $('<div>').addClass('board').attr('id', boardId);
  //     $column2.append($boardColumn1);
  //
  //     if (i === 0) { //Create board 1 in column 2
  //     for (let b=0; b<9; b++){
  //       let id = 'sq-board-1-' + (b + 1);
  //       id.toString();
  //         let $square = $('<div>').addClass('square').attr('id', id);
  //           $boardColumn1.append($square);
  //       }
  //     }
  //     if (i === 1) { //Create board 2 in column 2
  //     for (let b=0; b<9; b++){
  //       let id = 'sq-board-2-' + (b + 1);
  //       id.toString();
  //         let $square = $('<div>').addClass('square').attr('id', id);
  //           $boardColumn1.append($square);
  //       }
  //     }
  //     if (i === 2) { //Create board 3 in column 2
  //     for (let b=0; b<9; b++){
  //       let id = 'sq-board-3-' + (b + 1);
  //       id.toString();
  //         let $square = $('<div>').addClass('square').attr('id', id);
  //           $boardColumn1.append($square);
  //       }
  //     }
  //   } else if (i < 9){ //creates boards in column 3
  //       let boardId = 'board-column-3-' + (i + 1);
  //       boardId.toString();
  //       let $boardColumn1 = $('<div>').addClass('board').attr('id', boardId);
  //       $column1.append($boardColumn1);
  //
  //       if (i === 0) { //Create board 1 in column 3
  //       for (let b=0; b<9; b++){
  //         let id = 'sq-board-1-' + (b + 1);
  //         id.toString();
  //           let $square = $('<div>').addClass('square').attr('id', id);
  //             $boardColumn1.append($square);
  //         }
  //       }
  //       if (i === 1) { //Create board 2 in column 3
  //       for (let b=0; b<9; b++){
  //         let id = 'sq-board-2-' + (b + 1);
  //         id.toString();
  //           let $square = $('<div>').addClass('square').attr('id', id);
  //             $boardColumn1.append($square);
  //         }
  //       }
  //       if (i === 2) { //Create board 3 in column 3
  //       for (let b=0; b<9; b++){
  //         let id = 'sq-board-3-' + (b + 1);
  //         id.toString();
  //           let $square = $('<div>').addClass('square').attr('id', id);
  //             $boardColumn1.append($square);
  //       }
  //     }
  //   }
// };
// for (let i=0; i<9; i++){
//   let id = 'id' + (i + 1);
//   id.toString();
//     let $square = $('<div>').addClass('square').attr('id', id);
//       $('.board').append($square);
// }
