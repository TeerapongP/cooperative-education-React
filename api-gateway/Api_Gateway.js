const express = require('express')
const cors = require('cors')
const tripsData = require('../json-server/db.json')

const PORT = 4000
const app = express()
app.use(cors())

app.get('/trips', (request, response) => {
    const keyword = request.query.keyword;
    if(keyword){
        response.send(tripsData.trips.filter(trip => trip.title.includes(keyword) || trip.description.includes(keyword) || trip.tags.includes(keyword)))
    }
    response.send(tripsData)

})
app.listen(PORT, () => {
    console.log('Start server at port 4000.')
})
