const express = require('express');
const app = express();
const appRouter = require('./router/appRouter');
const PORT = process.env.PORT || 3000;

appRouter(app);
//http://localhost:3001/error?id=100
app.listen(PORT, ()=>{
    console.log("Server started and running in port: " + PORT);
})

