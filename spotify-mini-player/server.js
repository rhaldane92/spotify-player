const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve all files in the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Redirect root URL to player.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "player.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
