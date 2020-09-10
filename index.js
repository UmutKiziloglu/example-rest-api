const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.header("Content-Type",'application/json');

    var randomS = ["Hello", "World"];

    let result = Math.floor(Math.random() * randomS.length);

    const data = {      
        response : randomS[result]
    }
    res.send(JSON.stringify(data, null, 4));
})

app.listen(3000)