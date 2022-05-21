import {
    body,
    param,
    check
} from 'express-validator'

function check_if_date(string) {
    return !isNaN(new Date(string).getDate())
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export default {
    get_podcast: [
        param('id').isString().trim()
    ],
    create_podcast: [
        body('name').isString().trim().customSanitizer(value => capitalize(value)),
        body('status').isString().trim().customSanitizer(value => capitalize(value)).isIn(['Ongoing', 'Completed', 'Hiatus']),
        body('listeners').isNumeric().toInt(),
        body('picture').isURL(),
        body('about').isString().trim(),
        body('releaseDate').custom(value => check_if_date(value)),
        body('category').isString().trim().toLowerCase().isIn(['fiction', 'series', 'interviews']),
        body('hosts').isArray(),
        check('hosts.*.id').isInt(),
        check('hosts.*.name').isString().trim().customSanitizer(value => capitalize(value)).isAlpha("en-US", {
            "ignore": [" ", "-", "'"]
        }).trim()

    ],
    update_podcast: [
        body('name').optional().isString().trim().customSanitizer(value => capitalize(value)),
        body('status').optional().isString().trim().customSanitizer(value => capitalize(value)).isIn(['Ongoing', 'Completed', 'Hiatus']),
        body('listeners').optional().isNumeric().toInt(),
        body('picture').optional().isURL(),
        body('about').optional().isString().trim(),
        body('releaseDate').optional().custom(value => check_if_date(value)),
        body('category').optional().isString().trim().toLowerCase().isIn(['fiction', 'series', 'interviews']),
        body('hosts').optional().isArray(),
        check('hosts.*.id').optional().isInt(),
        check('hosts.*.name').optional().isString().trim().customSanitizer(value => capitalize(value)).isAlpha("en-US", {
            "ignore": [" ", "-", "'"]
        }).trim(),
        param('id').isString().trim()
    ],
    delete_podcast: [
        param('id').isString().trim()
    ],
    // hosts
    create_host: [
        body('name').isString().trim().customSanitizer(value => capitalize(value)),
        body('email').trim().isEmail()
    ]
}