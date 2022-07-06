let players = ['x', 'o'];
let activePlayer = 0;

let cells = 3;
let board = [];

function startGame() {
  for (let i = 0; i < cells; i++) {
    board[i] = [];
    for (let j = 0; j < cells; j++) {
      board[i][j] = '';
    }
  }
  parseInt((Math.random() * 10)) % 2;  //activePlayer = 0;
  renderBoard(board);
}

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);

  function check() {
    let count = 0;
    for (j = 0; j < cells; j++) {
      let countHorizontal = 0;
      let countVertical = 0;
      let countDiagonalLeft = 0;
      let countDiagonalRight = 0;
      
	  for (let i = 0; i < cells; i++) {    
        if (board[j][i] == players[activePlayer]) {
          countHorizontal += 1;
        }
        
		if (board[i][j] == players[activePlayer]) {
          countVertical += 1;
        }
        
		if (board[i][i] == players[activePlayer]) {
          countDiagonalLeft += 1;
        }
        
		let index = board[i].length - 1 - i;  
        
		if (board[i][index] == players[activePlayer]) {
          countDiagonalRight += 1;
        }
        
		if (board[j][i] == players[0] || board[j][i] == players[1]) {
          count += 1;
        }
      }
      
	  if (countHorizontal == cells   || countVertical == cells ||
		  countDiagonalLeft == cells || countDiagonalRight == cells) {
        showWinner(activePlayer);
      }
    }
  }
  
  check();

  activePlayer = activePlayer ? 0 : 1;
};


/* первоначальный вариант, чуток подправил. убрал фукнцию check()
по этой ссылке https://repl.it/@KvashninMA/CompassionateConstantMolecule
код не видно в общих файлах (не факт я увидел, но мож другие не увидят). создал имя не присваивая (авто подстановка), файлы заполнил
провери, вышел. и только по этой ссылке можно попасть с данный репл

let players = ['x', 'o'];
let activePlayer = 0;

let cells = 3;
let board = [];

function startGame() {
  for (let i = 0; i < cells; i++) {
    board[i] = [];
    for (let j = 0; j < cells; j++) {
      board[i][j] = '';
    }
  }
  activePlayer = 0;
  renderBoard(board);
}

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);

    let count = 0;
    for (j = 0; j < cells; j++) {
      let countHorizontal = 0;
      let countVertical = 0;
      let countDiagonalLeft = 0;
      let countDiagonalRight = 0;
      
	  for (let i = 0; i < cells; i++) {    
        if (board[j][i] == players[activePlayer]) {
          countHorizontal += 1;
        }
        
		if (board[i][j] == players[activePlayer]) {
          countVertical += 1;
        }
        
		if (board[i][i] == players[activePlayer]) {
          countDiagonalLeft += 1;
        }
        
		let index = board[i].length - 1 - i;  
        
		if (board[i][index] == players[activePlayer]) {
          countDiagonalRight += 1;
        }
        
		if (board[j][i] == players[0] || board[j][i] == players[1]) {
          count += 1;
        }
      }
      
	  if (countHorizontal == cells   || countVertical == cells ||
		  countDiagonalLeft == cells || countDiagonalRight == cells) {
        showWinner(activePlayer);
      }
    }
  activePlayer = activePlayer ? 0 : 1;
};

*/