import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3001;

// تعریف درست filename و dirname برای ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WOLFRAM_API_KEY = "8XTHUG54WL";

app.use(cors());
app.use(express.json());

// سرو کردن فایل اصلی فرانت‌اند
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API Wolfram
app.get('/wolfram', async (req, res) => {
  const query = req.query.input;
  const url = https://api.wolframalpha.com/v2/query?input=${encodeURIComponent(query)}&format=plaintext&output=JSON&appid=${WOLFRAM_API_KEY};

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// سرو کردن سایر فایل‌های فرانت‌اند
app.use(express.static(__dirname));

// اجرای سرور
app.listen(PORT, () => console.log(Server running on port ${PORT}));
