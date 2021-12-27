const express = require('express')
const bodyParser = require ('body-parser')
const {pool} = require('./pgConfig')
const port = process.env.PORT || 8080
const app = express()
app.use(bodyParser.urlencoded())

app.get('/', (req, res) =>
{
    const sql1 = `select * from задания;`

    pool.query(sql1, (err, resp) =>
    {
        if(err)
            console.log('Error:', err)
        else
        {
            res.render('problemset.ejs', {rows: resp.rows})
        }
    })

})

app.listen(port, ()=>
    console.log('Приложение слушает порт:', port)
    )
