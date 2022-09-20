import { PrismaClient } from "@prisma/client"
import { query } from "express"

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
                genres: true
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
    try {
        const { body } = req

        const movies = await prisma.movie.create({
            data: {
                title: req.body.title,
                release_date: "2012-04-23T18:25:43.511Z",
                rating: req.body.rating,
                genres: {
                    connect: [{ id: body.genres }]
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

    const id = Int(req.params)
    const { body } = req

    try {
        const movies = await prisma.movie.update({
            where: { id: id },
            data: {
                title: body.title
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
