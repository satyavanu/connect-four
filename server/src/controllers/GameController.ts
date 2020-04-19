import { Request, Response } from 'express';

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

}