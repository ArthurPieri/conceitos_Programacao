const express = require('express')
require('./db/mongoose')
const UserRouter = require('./routers/userRouter')
const TaskRouter = require('./routers/taskRouter')

const app = express()
const port = process.env.PORT || 3001


const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1024000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a Word Document'))
        }
        
        cb(undefined, true)
        // cb(new Error('File must be: .doc or .docx'))
        // cb(undefined, true)
        // cb(undefined, false)
    }
})
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})


app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
