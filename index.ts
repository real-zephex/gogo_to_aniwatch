import express from "express";
import { gogoDetails } from "./src/request";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/:gogoid", async (req, res) => {
  const { gogoid } = req.params;
  const data = await gogoDetails(gogoid);
  // Check if data is null and send appropriate response
  if (data) {
    res.status(200).type("json").send(data);
  } else {
    res.status(404).send("Data not found");
  }
});

app.listen(port, () => {
  console.log("Server is running at port", port);
});
