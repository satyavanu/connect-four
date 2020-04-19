const strategy = ({ board, r, c, player }) => {
  let discs = 0
  for (let i = 0; i < board[r].length; ++i) {
    discs = board[r][i] == player ? discs + 1 : 0
    if (discs >= 4) {
      console.log('player won', player)
      return player
    }
  }

  //different rows, same column = vertically
  discs = 0
  for (let j = 0; j < board.length; ++j) {
    discs = board[j][c] == player ? discs + 1 : 0
    if (discs >= 4) {
      console.log('player won', player)
      return player
    }
  }

  // diagonally from current chip to bottom left ...
  discs = 1
  for (
    let i = 1;
    r - i >= 0 && c - i >= 0 && board[r - i][c - i] == player;
    ++i
  ) {
    discs++
  }
  // ... and from current chip to top right
  for (
    let i = 1;
    r + i < board.length &&
    c + i < board[r + i].length &&
    board[r + i][c + i] == player;
    ++i
  ) {
    discs++
  }
  if (discs >= 4) {
    console.log('player won', player)
    return player
  }

  // diagonally from current chip to bottom right ...
  discs = 1
  for (
    let i = 1;
    r - i >= 0 && c + i < board[r - i].length && board[r - i][c + i] == player;
    ++i
  ) {
    discs++
  }
  // ... and from current chip to top left
  for (
    let i = 1;
    r + i < board.length && c - i >= 0 && board[r + i][c - i] == player;
    ++i
  ) {
    discs++
  }
  if (discs >= 4) {
    console.log('player won', player)
    return player
  }
}

export default strategy
