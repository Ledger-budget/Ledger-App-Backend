import "dotenv/config";
import app from "./app.js";
import pool from "./db/pool.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Connected to Ledger_Budget_app database!");
    console.log("Database Time:", result.rows[0].now);

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);

    process.exit(1);
  }
};

startServer();
