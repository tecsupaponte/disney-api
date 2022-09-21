import { PrismaClient } from "@prisma/client"
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export const findOne = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })
        const match = await bcrypt.compare(password, user.password)

        if (match) {
            const jwtToken = jwt.sign({
                id: user.id,
                email: user.email
            }, process.env.JWT_SECRET)
            res.json({ message: "Welcome Back!", token: jwtToken });
        }
        else {
            res.json({ ok: false, message: "password invalid"})
        }
        
    } catch (error) {
        res.json({
            ok: false,
            data: error.message,
        })
    }
}