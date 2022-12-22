//Импортируем класс Pool из модуля pg
import pg from "pg"
const {Pool} = pg

//Создаём пул соединений с сервером.
export const pool = new Pool({connectionString: "postgres://hogwarts_lyik_user:WylzxD8hdbDQeT2x80HynSMmom61cm8M@dpg-cei12rla499fabgd5ib0-a.oregon-postgres.render.com/hogwarts_lyik",
	    ssl: { rejectUnauthorized: false}
})