import { Handler } from '@netlify/functions';
import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';

// Import routes
import { handleDemo } from '../../server/routes/demo';
import { submitOrder } from '../../server/routes/orders';

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://belkhadir-poterie.netlify.app', 'https://belkhadir-poterie.com']
    : ['http://localhost:8080', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check
app.get('/ping', (_req, res) => {
  res.json({ 
    message: 'Netlify API Function Active - Belkhadir Poterie', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV 
  });
});

// Demo route
app.get('/demo', handleDemo);

// Orders API - Main route for WhatsApp notifications
app.post('/orders', submitOrder);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl,
    method: req.method 
  });
});

// Error handler
app.use((error: any, req: any, res: any, next: any) => {
  console.error('API Error:', error);
  res.status(500).json({ 
    error: 'Internal server error',
    message: error.message 
  });
});

// Export as Netlify Function
export const handler: Handler = serverless(app);
