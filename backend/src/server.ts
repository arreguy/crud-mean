import express from "express";
import cors from "cors";

const PORT = 5000;
const app = express();

app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})