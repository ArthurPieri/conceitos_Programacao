const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`)
})

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
    res.send(`
        <html>
            <head>
                <meta charset='utf-8'>
            </head>
            <body>
                <h1> Listagem de livros </h1>
            </body>
        </html>
    `)
})

// const http = require('http')

// const servidor = http.createServer((req, res) => {

//     let html = ''
//     if(req.url == '/') {
//         html = `
            // <html>
            //     <head>
            //         <meta charset='utf-8'>
            //     </head>
            //     <body>
            //         <h1> Casa do código </h1>
            //     </body>
            // </html>
//         `
//     } else if (req.url == '/livros'){
//         html = `
//             <html>
//                 <head>
//                     <meta charset='utf-8'>
//                 </head>
//                 <body>
//                     <h1> Livros casa do código </h1>
//                 </body>
//             </html>
//         `
//     }
    
//     res.end(html)
// })
// servidor.listen(3000)