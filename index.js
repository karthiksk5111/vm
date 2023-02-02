const express = require('express');
const mongo = require("./mongodb")
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');



const users=require("./routes/users");
app.use(express.json());
app.use(users)


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });

     