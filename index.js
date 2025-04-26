const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("My app working...");
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running");
})