import express from "express";
import cors from "cors";

const app: express.Application = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require("./routes/contact")(app);

app.listen(process.env.PORTFOLIO_PORT || 5000, () =>
  console.log(`Listening on port ${process.env.PORTFOLIO_PORT || 5000}`)
);
