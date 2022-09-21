import { PrismaClient } from "@prisma/client"
import * as bcrypt from "bcrypt"

const prisma = new PrismaClient()

export const create = async (req, res) => {
	const { body } = req
	const hashedPassword = await bcrypt.hash(body.password, 10)

	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: hashedPassword,
			},
		})
		res.json({
			ok: true,
			data: {
				email: user.email
			}
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		})
	}
}
