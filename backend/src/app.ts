import express from "express";

import { errorHandler } from "./middlewares/errorHandler.ts";
import routes from "./routes/routes.ts";

const app = express();

// Para entender JSON
app.use(express.json());

// Para entender formulários HTML
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api", routes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
