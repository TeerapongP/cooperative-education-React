const express = require('express')
const tripsData = require('../json-server/db.json')
const PORT = 4000
const app = express()

app.get('/trips', (req, res) => {
    const keyword = req.query.keyword;
    res.json(tripsData.trips.filter(trip => trip.title.includes(keyword) | trip.description.includes(keyword) | trip.tags.includes(keyword)))
})
app.listen(PORT, () => {
    console.log('Start server at port 4000.')
})
