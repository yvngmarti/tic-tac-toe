let isPlayerOne = true;
let cells = document.getElementsByClassName('cell');

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', userCLick);
}

function userCLick(e) {
  let cellValue = e.target.innerHTML;
  if (!cellValue.length) {
    e.target.innerHTML = isPlayerOne ? 'X' : 'O';
    isPlayerOne = !isPlayerOne;

    checkLine(0, 1, 2);
    checkLine(3, 4, 5);
    checkLine(6, 7, 8);
    checkLine(0, 3, 6);
    checkLine(1, 4, 7);
    checkLine(2, 5, 8);
    checkLine(0, 4, 8);
    checkLine(2, 4, 6);
  }
}

function checkLine(v1, v2, v3) {
  if (
    cells[v1].innerHTML.length &&
    cells[v1].innerHTML === cells[v2].innerHTML &&
    cells[v2].innerHTML === cells[v3].innerHTML
  ) {
    showWinner(cells[v1].innerHTML);
  }
}

function showWinner(player) {
  document.querySelector('#results').innerHTML = player + ' win!';
}
