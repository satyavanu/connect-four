import { Request, Response, NextFunction } from "express";
import { GameController } from "../../controllers/GameController";

export class Routes { 
    
    public gameController: GameController = new GameController();
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {  
            console.log('I am here ')          
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        
        app.route('/api/settings')
            .get((req: Request, res: Response, next: NextFunction) => {
                next();                     
            }, this.gameController.getGameSettings)
            .post(this.gameController.getData);
        
        app.route('/api/computer')
            .post((req: Request, res: Response, next: NextFunction) => {
                next();                     
            }, this.gameController.getNextMove);

    }
}