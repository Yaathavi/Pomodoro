const express = require ("express");
const app = express();
const port = process.env.PORT || 5000

app.get('/', (req,res) => {
    res.send('')

})

app.listen(port, () => console.log(`Listening on port ${port}!`)); //starts a server and listens on port 5000 for connections.


