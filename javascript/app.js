$( () => {
  // console.log('Hey');

  for (i = 0; i < 9; i++) {
    if (i < 3){
      let boardId = 'board-row-1-' + (i + 1);
      boardId.toString();
      let $board-Row-1 = $('<div>').addClass('board').attr('id', boardId);
    }

    $('.board').append($square);
    for (let i=0; i<9; i++){
      let id = 'id' + (i + 1);
      id.toString();
        let $square = $('<div>').addClass('square').attr('id', id);
          // $('.board').append($square);
          // $('#container').append($('.board'));
    }
  };
  // for (let i=0; i<9; i++){
  //   let id = 'id' + (i + 1);
  //   id.toString();
  //     let $square = $('<div>').addClass('square').attr('id', id);
  //       $('.board').append($square);
  // }
//Variables
  const $place = $('.square');
  let toggle = true;
  const $box1 = $('#1');
  const $box2 = $('#2');
  const $box3 = $('#3');
  const $box4 = $('#4');
  const $box5 = $('#5');
  const $box6 = $('#6');
  const $box7 = $('#7');
  const $box8 = $('#8');
  const $box9 = $('#9');
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
