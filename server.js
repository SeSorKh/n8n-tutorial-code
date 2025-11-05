const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Config endpoint - serves webhook URL to frontend
app.get('/config', (req, res) => {
    res.json({ 
        webhookUrl: process.env.WEBHOOK_URL || '' 
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Chatbot server is running!' });
});

// Start server
app.listen(PORT, () => {
    console.log('🤖 ====================================');
    console.log('🤖  Chatbot Server Started!');
    console.log('🤖 ====================================');
    console.log(`🌐  Local:   http://localhost:${PORT}`);
    console.log(`🌐  Network: http://YOUR_IP:${PORT}`);
    console.log('🤖 ====================================');
    console.log('📝  Press Ctrl+C to stop the server');
    console.log('');
});