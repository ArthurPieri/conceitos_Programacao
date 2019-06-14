const db = require('../../config/database')

module.exports = app => {
    app.get('/', (req, res) => {
        res.send(`
            <html>
                <head>
                    <meta charset='utf-8'>
                </head>
                <body>
                    <h1> Casa do código </h1>
                </body>
            </html>
        `)
    })
    
    app.get('/livros', (req, res) => {
        db.all('SELECT * FROM livros', (erro, result) => {
            
            res.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: result
                }
            )
        })


    })
}

