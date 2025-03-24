import express from "express";
import cors from "cors";
import fs from "fs";
// import sample from "../backend/sample/sample.json"  assert {type: 'json'}

let sample = JSON.parse(fs.readFileSync("../backend/sample/sample.json"));

let app = express();
app.use(express.json());
app.use(cors());
let port = 8080;
app.get("/api/v1/", (req, res) => {
  res.send(sample);
});

app.listen(port, () => {
  console.log(`app running on port...${port}`);
});
