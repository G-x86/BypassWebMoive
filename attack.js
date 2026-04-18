const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 1235;

// ✅ เปิด CORS ให้ทุก origin
app.use(cors());
app.use('/public', express.static('public'));
app.get('/api/proxy', async (req, res) => {
  try {
    const targetUrl = req.query.url;
    if (!targetUrl) return res.status(400).send('url missing');

    const response = await fetch(targetUrl);
    const text = await response.text();

    res.set('Content-Type', 'text/html');
    res.send(text);
  } catch (err) {
    console.error(err);
    res.status(500).send('proxy fetch failed');
  }
});

app.listen(PORT,   '0.0.0.0',() => {
  console.log(`Proxy server listening on http://localhost:${PORT}`);
});