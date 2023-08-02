// src/server.js
import app from "./app";

// @ts-ignore
const PORT = process.env.EXPRESS_APP_PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));