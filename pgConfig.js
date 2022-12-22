//Импортируем класс Pool из модуля pg
const {Pool} = require("pg")

//Создаём пул соединений с сервером.
const pool = new Pool({connectionString: process.env.DB_URL,
	    ssl: { rejectUnauthorized: false}
})

module.exports.pool = pool