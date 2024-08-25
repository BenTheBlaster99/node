const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


const names = ['Alice', 'Bob', 'Charlie', 'Daisy', 'Eve', 'Frank', 'Grace', 'Hannah', 'Isaac', 'Jack', 'Kathy', 'Liam'];


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/random-name', (req, res) => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  res.json({ name: randomName });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
