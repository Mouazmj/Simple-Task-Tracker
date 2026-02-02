const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.urlencoded({ extended: true }))

const tasks = [
    { id: 1, title: 'Träna', priority: 'Hög', completed: false },
    { id: 2, title: 'Äta', priority: 'Medium', completed: true },
    { id: 3, title: 'Diska', priority: 'Låg', completed: false }
]

app.use(morgan('dev'))

app.get('/', (req, res) => {

})

app.get('/add', (req, res) => {

})

app.post('/add', (req, res) => {

})