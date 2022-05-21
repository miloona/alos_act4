import {
    validationResult
} from 'express-validator'

import {
    get_podcasts,
    get_podcast,
    add_podcast,
    update_podcast,
    delete_podcast
} from '../utils/database'

export default {
    get_all: (req, res) => {
        res.status(200).json(get_podcasts())
    },

    get: (req, res) => {
        const podcast = get_podcast(req.params.id)
        if (podcast)
            res.status(200).json(podcast)
        else res.status(404).json({
            error: 'Podcast Not Found'
        })
    },

    create: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const new_podcasts = add_podcast(req.body)

        res.status(201).json(new_podcasts)
    },

    update: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_podcasts = update_podcast(id, req.body)

        res.status(200).json(new_podcasts)
    },

    delete: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_podcasts = delete_podcast(id)

        res.status(200).json(new_podcasts)
    }
}