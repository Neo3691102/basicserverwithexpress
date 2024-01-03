import express from "express";

const app = express();
const port = 5500;

app.get("/", (req, res) => {
    console.log(`${req.method} ${req.url}`);	
  res.send("Hello world! with Express and Typescript");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
