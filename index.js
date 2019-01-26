import express from 'express'
import bodyParser from 'body-parser'
import router from './todo/routes/app'
import fs from 'fs'
import hbs from 'hbs'

const PORT = 8080
const app = express()

hbs.registerPartials(__dirname + '/todo/views/partials')
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})
app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(express.static(__dirname + '/todo/public'))
app.set('views', __dirname + '/todo/views');

/**
 * Registering middlewares
 */
app.use((req, res, next) =>{

    fs.appendFileSync('log', `${new Date().toString()} ${req.method} ${req.url} \n`, (err)=>{
        console.log('unable to log time')
    })
    return next()
})
app.use(router)
app.listen(process.env.PORT || PORT, ()=>{
console.log(`yay the server is running on port ${PORT}`)
})



