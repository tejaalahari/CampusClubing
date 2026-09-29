const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    message: "CampusConnect Backend is running!"
  });
});

app.get("/api/clubs", (req, res) => {
  res.json([
    {
      id: 1,
      name: "CodeCraft Club",
      category: "Coding",
      members: 85
    },
    {
      id: 2,
      name: "Sports United",
      category: "Sports",
      members: 120
    },
    {
      id: 3,
      name: "Creative Arts Society",
      category: "Arts",
      members: 65
    },
    {
      id: 4,
      name: "Startup Hub",
      category: "Entrepreneurship",
      members: 55
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});