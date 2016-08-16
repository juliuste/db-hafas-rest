'use strict'

const db = require('db-hafas')



const err400 = (msg) => {
	const e = new Error(msg)
	e.statusCode = 400
	return e
}



module.exports = (req, res, next) => {
	if ('string' !== typeof req.query.q)
		return next(err400('missing q parameter.'))

	db.locations(req.query.q)
	.then((data) => {res.json(data)}, next)
	.catch(next)
}
