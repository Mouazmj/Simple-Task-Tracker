const express = require('express')
const app = express()
const morgan = require('morgan')

const tasks = [
    { id: 1, title: 'Träna', priority: 'Hög', completed: false },
    { id: 2, title: 'Äta', priority: 'Medel', completed: true },
    { id: 3, title: 'Diska', priority: 'Låg', completed: false }
]