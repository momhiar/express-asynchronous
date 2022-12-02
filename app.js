const Express = require("express");
require('dotenv').config();

const app = Express();
const port = process.env.PORT | 3000


app.use("/", (req, res, next) => {
  res.status(200).send("<h1>Hello World</h1>");
  res.end()
});

app.listen(port, () => {
    console.log(`server is running and listening on port ${port}`)
})