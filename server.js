const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000; // You can change this port number as needed

// Serve static content based on different routes
app.use("/", express.static(path.join(__dirname, "bootstrap", "dist")));
app.use("/welcome", express.static(path.join(__dirname, "welcome", "dist")));
app.use("/music", express.static(path.join(__dirname, "music", "dist")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
