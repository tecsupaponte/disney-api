import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const findAll = async (req, res) => {
	try {
		const genres = await prisma.genre.findMany({
			include: {
				movies: true
			}
		})
		res.json({
			ok: true,
			data: genres,
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		})
	}
}

export const create = async (req, res) => {
	try {
		const { body } = req
		const genre = await prisma.genre.create({
			data: {
				...body,
			},
		})
		res.json({
			ok: true,
			data: genre,
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		})
	}
}