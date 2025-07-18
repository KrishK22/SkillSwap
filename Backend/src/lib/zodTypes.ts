import { z } from 'zod';

export const createUserSchema = z.object({
    fullName: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string()
})

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string()
}) 
