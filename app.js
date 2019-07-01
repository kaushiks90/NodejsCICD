const express = require('express');
const app = express();
app.get('/home', (req, res) => {
  res.json('Hello World');
});

const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port}`);