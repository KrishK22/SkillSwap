import { axiosInstance } from "@/lib/utils";
import { create } from 'zustand'


export const usePublicStore = create((set, get) => ({
    getAllusers: async (pageno: Number) => {
        try {
            const res = await axiosInstance.get(`/public/list?page=${pageno}`);
            const users = res.data;
            return users;

        } catch (error) {
            console.log("Error in get_ALL_USERS", error)
        }
    }
}))
