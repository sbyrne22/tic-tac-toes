# tic-tac-toes
A nested tic-tac-toe game

# Instructions--

The object of the game is to get 3 in a row, though there's a catch. The board is made up of 9 tic-tac-toe boards. You must win a board for your piece to place there, win 3 boards in a row either horizontally, vertically, or diagonally and you win the game. Wait! there's more, at the start of the game only the middle board is active and depending where you place your piece a different board will be active. Think of each small board as a directory of the big board, if you place your piece in the top right corner of a small board, then the next player has to place their piece in the board located in the top right corner. If the board you're supposed to go to has been completed then all the boards that have not been completed will be active for the next players' turn. Player 1 is 'X's and player 2 is 'O's and remember 'X' goes first!

# Built With
### Languages
- HTML, CSS, Javascript, and jQuery
### Text Editor
- Atom

# My Process--
First I dynamically created the board in jQuery. The board consists of 9 tic-tac-toe boards and while to boards are being created they are each given a unique ID. I then made the text toggle from placing x's to o's every time the user clicks on an open square that has no text Next I determined when a either x's or o's won on a board, or if there was a tie on a board and if then then I gave that board a class of done which would stop if from being active again. Then I made it so when a square was clicked the next active board would be the board that takes up that spot on the big board. After that I made a start game function that would make the middle board be the first board that's active. Next I wrote a function that would determine if a board had tied and then if the entire game was a tie. If x's or O's won, the game will let the users know accordingly as well as if the game ties. Then the remaining boards will not be active thanks to the endGame function. The next thing I did was make the game re-playable by putting everything that runs the game and creates the board inside a function and then calling that function when the user('s) click on the play again button.

# In The Future--
I had planned to make a scoresheet that would update after each round and I would like to add that in the future.

# Author
- Sean Byrne

# Link to Live Site
- https://sbyrne22.github.io/tic-tac-toes/
