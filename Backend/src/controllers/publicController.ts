import { Request, Response } from "express"
import userModel from "../models/user.model"



export const publicController = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const search = req.query.search
    const limit = 5;

    const skipCount = (page - 1) * limit;
    try {
        if (!search) {
            const publicUsers = await userModel.find({ profileType: "public" }).skip(skipCount).limit(limit);
            const totalUsers = await userModel.countDocuments({ profile: "public" });

            const totalPages = Math.ceil(totalUsers / limit);

            res.status(200).json({
                totalUsers,
                page,
                totalPages,
                publicUsers,
            });
        }
        const filter = {
            profileType: "public",
            $or: [{
                skillsOffered: {
                    "$regex": search,
                    "$options": "i"
                }
            }]
        }

        const publicUsers = await userModel.find(filter).skip(skipCount).limit(limit);
        const totalUsers = await userModel.countDocuments({ filter });
        const totalPages = Math.ceil(totalUsers / limit);

        res.status(200).json({
            totalUsers,
            page,
            totalPages,
            publicUsers,
        });

    } catch (error: any) {
        res.status(500).json({ error: error.message || "Internal server error" });
    }
}