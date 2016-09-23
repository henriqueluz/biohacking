import path from 'path';
import express from 'express';

const app = express();

const publicURL = path.resolve(path.join('public'));

app.use(express.static(publicURL));

app.get('/activities.json', (req, res) => {

  res.send([
    {
      id: 30,
      date: new Date,
      type: {
        description: 'MEETING'
      },
      description: 'Reunião as 13'
    },
    {
      id: 36,
      date: new Date,
      type: {
        description: 'WORKOUT'
      },
      description: '#fikgrandeporra #saimonstro #birl'
    },
  ]);

});

app.get('/count.json', (req, res) => {

  res.send({
    count: 10
  });

});

app.get('*', (req, res) => {

  res.sendFile(`${publicURL}/index.html`);

});

app.listen(9090);

console.log("Started");
