import { Request, Response} from "express";
import * as service from "../services/clubs-service";

//ver async
export const getClubs = async (req: Request, res: Response) => {
    const response = await service.getClubsService();
    res.status(response.statusCode).json(response.body);

};