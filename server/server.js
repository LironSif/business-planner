import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import businessPlanRoutes from "./routes/businessPlanRoutes.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;
const BASE_SERVER_URL = process.env.BASE_SERVER_URL;
const CLIENT_PORT = process.env.CLIENT_PORT;
const DEPLOY_CLIENT = process.env.DEPLOY_CLIENT;

const allowedOrigins = [
  "http://localhost:5173",
  `${BASE_SERVER_URL}:${CLIENT_PORT}`,
  `${DEPLOY_CLIENT}`, // Fixed the typo here
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", businessPlanRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
