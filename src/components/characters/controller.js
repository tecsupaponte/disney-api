import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const sortQuery = async (req, res) => {
	const { query } = req

	if (query.name) {
		findByName(req, res)
	} else if (query.age) {
		findByAge(req, res)
	} else if (query.movies) {
		findByMovie(req, res)
	} else {
		findAll(req, res)
	}
}

export const findAll = async (req, res) => {

	try {
		const characters = await prisma.character.findMany({
			include: {
				movies: {
					select: {
						id: true,
						title: true,
						createdAt: true
					}
				}
			}
		})
		res.json({
			ok: true,
			data: characters,
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		})
	}
}

export const findByName = async (req, res) => {
	try {
		const characters = await prisma.character.findMany({
			include: {
				movies: true
			},
			where: {
				name: req.query.name
			}
		})
		res.json({
			ok: true,
			data: characters,
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		})
	}
}

export const findByAge = async (req, res) => {
	try {
		const characters = await prisma.character.findMany({
			include: {
				movies: true
			},
			where: {
				age: parseInt(req.query.age)
			}
		})
		res.json({
			ok: true,
			data: characters,
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		})
	}
}

export const findByMovie = async (req, res) => {
	try {
		const characters = await prisma.character.findMany({
			include: {
				movies: true
			},
			where: {
				age: parseInt(req.query.age)
			}
		})
		res.json({
			ok: true,
			data: characters,
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		})
	}
}

export const create = async (req, res) => {
	const { body } = req

	try {

		const character = await prisma.character.create({
			include: {
				movies: {
					select: {
						id: true,
						title: true,
						createdAt: true
					}
				}
			},
			data: {
				image: body.image,
				name: body.name,
				age: parseInt(body.age),
				weight: parseFloat(body.age),
				info: body.info,
				movies: {
					connect: body.movies
				}
			},
		})
		res.json({
			ok: true,
			data: character,
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		})
	}
}

export const update = async (req, res) => {
	const id = parseInt(req.params.id)
	const { body } = req

	try {
		const character = await prisma.character.update({
			where: { id: id },
			include: {
				movies: true
			},
			data: {
				image: body.image,
				name: body.name,
				age: parseInt(body.age),
				weight: parseFloat(body.weight),
				info: body.info,
				movies: {
					connect: body.movies
				}
			}
		})
		res.json({
			ok: true,
			data: character
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message
		})
	}
}

export const remove = async (req, res) => {
	const id = parseInt(req.params.id)

	try {
		const character = await prisma.character.delete({
			where: { id: id }
		})
		res.status(200).json({
			ok: true,
			data: "Character deleted."
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message
		})
	}
}