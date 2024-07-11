const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve các file tĩnh từ thư mục public
app.use(express.static('my-node-app'));

// Route chính để gửi file index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
