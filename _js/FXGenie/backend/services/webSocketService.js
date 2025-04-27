const WebSocket = require('ws');

const startWebSocketServer = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.send(JSON.stringify({ message: 'Welcome to FXGenie Real-Time Forex Rates' }));

    // Simulate real-time forex rates
    setInterval(() => {
      const rates = { USD: Math.random() * 100, EUR: Math.random() * 100 };
      ws.send(JSON.stringify({ rates }));
    }, 5000);

    ws.on('close', () => console.log('Client disconnected'));
  });
};

module.exports = { startWebSocketServer };