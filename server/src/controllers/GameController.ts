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
    const smartRow = board[row].filter((v, i) => {
      if (v === 0) return i
    })
    const smartCol = Math.floor(Math.random() * smartRow.length)
    res.status(200).send({
      row: row,
      col: smartCol
    })
  }
}
