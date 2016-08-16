'use strict'

const db = require('db-hafas')



const err400 = (msg) => {
	const e = new Error(msg)
	e.statusCode = 400
	return e
}



module.exports = (req, res, next) => {
	if ('string' !== typeof req.query.query)
		return next(err400('missing query parameter.'))

	db.locations(req.query.query)
	.then((data) => {res.json(data)}, next)
	.catch(next)
}
