import { Request, Response } from 'express'
export class GameController {
  public getData(req: Request, res: Response) {
    res.status(200).send({
      status: 'OK'
    })
  }

  public getGameSettings(req: Request, res: Response) {
    const colorList: Array<string> = [
      'CornflowerBlue',
      'DarkSlateGrey',
      'Lime',
      'Navy',
      'Orange',
      'Tomato'
    ]
    res.status(200).send({
      name: 'Game AI',
      color: colorList[Math.floor(Math.random() * colorList.length)]
    })
  }

  public getNextMove(req: Request, res: Response) {
    const board = req.body?.board
    const row = req.body?.row
    const decision = null
    let smartCol = 0,
      smartRow = [],
      nextRow = row
    if (decision === null) {
      const res = this.predictMoves(2, 'minor', board)
      if (res) {
        smartCol = board[res].lastIndexOf(0)
        nextRow = res
      } else {
        smartRow = board[row].filter((v, i) => v === 0)
        smartCol = Math.floor(Math.random() * smartRow.length)
      }
    }

    /**
     * smart logic nice to have
     *
     */
    res.status(200).send({
      row: row,
      col: smartCol
    })
  }

  private predictMoves(lt: number, type: string, arr: Array<[]>) {
    for (let i = 0; i < arr.length; i++) {
      const rowMatch = arr[i].join('').match(`0${1}${1}${1}`)
      if (rowMatch) {
        return i
      }
    }
  }
  private getColumns(arr: Array<[]>): Array<[]> {
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
}
