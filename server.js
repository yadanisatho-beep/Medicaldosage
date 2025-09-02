import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

// This will change later with database system
const drugs = [
  { id: 1, name: "TEST1", genericName: "Acetaminophen", dosage: "500mg",contraindication: "แพ้ยา, ใช้ด้วยความระวังในผู้ป่วยโรคตับรุนแรง" },
  { id: 2, name: "TEST2", genericName: "Ibuprofen", dosage: "500mg",contraindication: "แพ้ยา, ใช้ด้วยความระวังในผู้ป่วยโรคตับรุนแรง" },
  { id: 3, name: "TEST3", genericName: "Wow", dosage: "200mg",contraindication: "แพ้ยา, ใช้ด้วยความระวังในผู้ป่วยโรคตับรุนแรง" },
  { id: 4, name: "TEST4", genericName: "GEN", dosage: "250mg",contraindication: "แพ้ยา, ใช้ด้วยความระวังในผู้ป่วยโรคตับรุนแรง" },
];

// API endpoint
app.get("/api/drugs", (req, res) => {
  res.json(drugs);
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
