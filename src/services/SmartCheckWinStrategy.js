const getColumns = function(arr) {
  const cols = []
  for (let j = 0; j < arr[0].length; j++) {
    const col = []
    for (let k = 0; k < arr.length; k++) {
      col.push(arr[k][j])
    }
    cols.push(col)
  }
  return cols
}

const getDiags = function(arr) {
  const diags = []
  for (let i = -5; i < 7; i++) {
    const group = []
    for (let j = 0; j < 6; j++) {
      if (i + j >= 0 && i + j < 7) {
        group.push(arr[j][i + j])
      }
    }
    diags.push(group)
  }
  for (let i = 0; i < 12; i++) {
    const group = []
    for (let j = 5; j >= 0; j--) {
      if (i - j >= 0 && i - j < 7) {
        group.push(arr[j][i - j])
      }
    }
    diags.push(group)
  }
  return diags.filter(function(a) {
    return a.length > 3
  })
}

const strategy = (board) => {
  const columns = getColumns(board) // alte and flip
  const diags = getDiags(board) // for diagonal
  let winner = 0 // none wins

  for (let i = 0; i < board.length; ++i) {
    const isHorizontalMatch = board[i].join('').match(/1{4}|2{4}/)
    if (isHorizontalMatch) {
      isHorizontalMatch[0].indexOf('1') > -1 ? (winner = 1) : (winner = 2)
    }
  }

  for (let j = 0; j < columns.length; j++) {
    const iscolMatch = columns[j].join('').match(/1{4}|2{4}/)
    if (iscolMatch) {
      iscolMatch[0].indexOf('1') > -1 ? (winner = 1) : (winner = 2)
    }
  }
  for (let l = 0; l < diags.length; l++) {
    const diagMatch = diags[l].join('').match(/1{4}|2{4}/)
    if (diagMatch) {
      diagMatch[0].indexOf('1') > -1 ? (winner = 1) : (winner = 2)
    }
  }

  return winner
}

export default strategy
