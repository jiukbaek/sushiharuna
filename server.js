import express from "express";
import path from "path";
import cors from "cors";

const env = process.env.NODE_ENV;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(env === "dev" ? 8080 : 80, () => {
  console.log(`Start Server-${env}`);
});
