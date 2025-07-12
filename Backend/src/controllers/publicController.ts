import { Request, Response } from "express"
import userModel from "../models/user.model"



export const publicController = async (req: Request, res: Response) => {
    try {
        const page=(req.query.page)
        const publicUsers = await userModel.find({ profileType: "public" })





    } catch (error) {

    }
}