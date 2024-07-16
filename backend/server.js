// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World from Backend!');
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// backend/server.js
// Import necessary modules (already included in your server.js)

// Mock data (replace with database integration later)
let notifications = [
    { id: 1, message: 'Notification 1' },
    { id: 2, message: 'Notification 2' },
    { id: 3, message: 'Notification 3' }
  ];
  
  // Endpoint to get all notifications
  app.get('/api/notifications', (req, res) => {
    res.json(notifications);
  });


// Endpoint to add a new notification
app.post('/api/notifications', (req, res) => {
    const newNotification = {
      id: notifications.length + 1,
      message: req.body.message
    };
    notifications.push(newNotification);
    res.status(201).json(newNotification);
  });


  
// Endpoint to delete a notification by ID
app.delete('/api/notifications/:id', (req, res) => {
  const id = parseInt(req.params.id);
  notifications = notifications.filter(notification => notification.id !== id);
  res.status(200).json({ message: 'Notification deleted' });
});
