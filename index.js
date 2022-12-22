import express from 'express'
import {pool} from './pgConfig.js'
const port = process.env.PORT || 8080
const app = express()
import async from 'async'

app.get('/', (req, res) =>
{
    const faculty_query = `select * from факультет;`
    const role_query = `select * from роль;`
    const student_query = `select фамилия, имя, факультет.название as факультет, роль.название as роль from студент, факультет, роль where студент.факультет_id = факультет.id and студент.роль_id = роль.id;`
    const problems_query = `select * from задание;`
    const grades_query = `select студент.фамилия, задание.название as задание, оценка from журнал, студент, задание where журнал.задание_id = задание.id and журнал.студент_id = студент.id;`

    var final = {};
    async.series({
        faculties: function(cb) {
            pool.query(faculty_query, function (err, resp){
                cb(err, resp)
            })
        },
        roles: function(cb){
            pool.query(role_query, function (err, resp){
                cb(err, resp)
            })
        },
        students: function(cb){
            pool.query(student_query, function (err, resp){
                cb(err, resp)
            })
        },
        problems: function(cb){
            pool.query(problems_query, function (err, resp){
                cb(err, resp)
            })
        },
        grades: function(cb){
            pool.query(grades_query, function (err, resp){
                cb(err, resp)
            })
        }
    }, function(err, resp) {
        if (!err) {
            res.render('problemset.ejs', {faculties: resp.faculties.rows, roles: resp.roles.rows, students: resp.students.rows, problems: resp.problems.rows, grades: resp.grades.rows})
        }
    });
})

app.listen(port, () => console.log('Приложение слушает порт:', port))