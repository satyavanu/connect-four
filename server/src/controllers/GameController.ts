import { Request, Response } from 'express';
import * as bodyParser from "body-parser";
export class GameController {


    constructor() {

    }

    public getData(req: Request, res: Response) {
        res.send('Hello World!')
    }

    public getGameSettings(req: Request, res: Response) {
        let colorList: Array<string> = ['CornflowerBlue', 'DarkSlateGrey', 'Lime', 'Navy', 'Orange', 'Tomato'];
        res.status(200).send({
            name: 'Game AI',
            color: colorList[Math.floor(Math.random() * colorList.length)]
        })
    }


    public getNextMove(req: Request, res: Response) {
        let board = req.body?.board;
        let row = req.body?.row;
        console.log(board);
    }

}