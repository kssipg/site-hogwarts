//Импортируем класс Pool из модуля pg
import pg from "pg"
const {Pool} = pg

//Создаём пул соединений с сервером.
export const pool = new Pool({connectionString: process.env.DB_URL,
	    ssl: { rejectUnauthorized: false}
})