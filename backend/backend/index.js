const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());   // 👈 CORS enable karein
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "🚀 Backend Running Successfully!" });
});

app.listen(5000, () => console.log(`✅ Server running on port 5000`));
