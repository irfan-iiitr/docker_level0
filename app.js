const express = require('express');
const config = require('./src/config/config')
const routes = require('./src/routes/route');

const app = express();
const port = process.env.PORT || 3000;

console.log(`Starting ${config.appName} application...`);

// app.use('/api', routes);
app.get('/',(req, res) =>{
  res.send('Hello World from Irfan');
})

app.listen(port, () => {
  console.log(`${config.appName} listening at http://localhost:${port}`);
});


//docker build

// docker build -t hiteshchoudhary/hey-nodejs:0.0.1.RELEASE .
//username 
// .last dot- path of file to search
//hey-nodejs - folder name
//docker build -t irfaniiitr/hello-node:0.0.1.RELEASE .


//docker container run -d -p 3000:3000 hiteshchoudhary/hey-nodejs:0.0.1.RELEASE
