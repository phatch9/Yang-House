const express = require('express');
const app = express();
const port = process.env.PORT || 5005;

app.get('/', (req, res) => {
  res.send('Hello from the YangHouse server!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
