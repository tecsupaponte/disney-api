import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const sortQuery = async (req, res) => {
	const { query } = req

	if (query.name) {
		findByName(req, res)
	} else if (query.genre) {
		findByGenre(req, res)
	} else if (query.order) {
		findAndSortByDate(req, res)
	} else {
		findAll(req, res)
	}

}

export const findAll = async (req, res) => {

	try {
		const movies = await prisma.movie.findMany({
			include: {
				genres: true,
				characters: true
			}
		})
		res.json({
			ok: true,
			data: movies,
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
		const movies = await prisma.movie.findMany({
			include: {
				characters: true,
				genres: true
			},
			where: {
				title: req.query.name
			}
		})
		res.json({
			ok: true,
			data: movies,
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		})
	}
}

export const findAndSortByDate = async (req, res) => {

	try {
		const movies = await prisma.movie.findMany({
			orderBy: {
				createdAt: req.query.order
			}
		})
		res.json({
			ok: true,
			data: movies,
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		})
	}
}

export const findByGenre = async (req, res) => {

	try {
		const movies = await prisma.movie.findMany({
			include: {
				genres: true
			},
			where: {
				genres: {
					some: {
						id: parseInt(req.query.genre)
					}
				}
			}
		})
		res.json({
			ok: true,
			data: movies,
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
	const { genres } = req.body

	try {
		const movies = await prisma.movie.create({
			include: {
				genres: true,
				characters: true
			},
			data: {
				title: body.title,
				rating: parseFloat(body.rating),
				genres: {
					connect: genres
				}
			}
		})
		res.json({
			ok: true,
			data: movies,
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
		const movies = await prisma.movie.update({
			include: {
				genres: true,
				characters: true
			},
			where: { id: id },
			data: {
				title: body.title,
				rating: parseFloat(body.rating),
				genres: {
					connect: body.genres
				},
				characters: {
					connect: body.characters
				}
			}
		})
		res.json({
			ok: true,
			data: movies,
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message,
		})
	}
}

export const remove = async (req, res) => {
	const id = parseInt(req.params.id)

	try {
		const movie = await prisma.movie.delete({
			where: { id: id }
		})
		res.status(200).json({
			ok: true,
			data: "Movie deleted."
		})
	} catch (error) {
		res.json({
			ok: false,
			data: error.message
		})
	}
}
