// src/server.js
import app from "./app";

// @ts-ignore
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));