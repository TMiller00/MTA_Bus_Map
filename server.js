const express = require('express');
const request = require('request');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mtaURL = 'https://bustime.mta.info/api/siri/vehicle-monitoring.json?key=' + process.env.MTA_KEY + '&version=2&VehicleMonitoringDetailLevel=calls&MaximumNumberOfCallsOnwards=3';

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.set('port', (process.env.PORT || 5000));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', (req, res) => {
  req.pipe(request(mtaURL)).pipe(res);
})

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
