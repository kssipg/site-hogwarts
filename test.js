const {pool} = require('./pgConfig')
pool.query('select * from задание;', (err, res)=>
	{
		if(err) console.log('Ошибка:', err)
		else
		{
			console.log(res.rows)
			pool.end()
		}
	}
)