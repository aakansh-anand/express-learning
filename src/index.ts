import dotenv from "dotenv";
import app from "./app";

import { connectMongoDb } from "./db/mongo";
import { connectPostgres } from "./db/prisma";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT ?? 4000;

connectMongoDb().then(() => {
  connectPostgres().then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  });
});
