// netlify/functions/api.js - Wrapper pour compatibilité API
const submitOrderHandler = require('./submit-order').handler;

exports.handler = async (event, context) => {
  // Parse the path to handle different API routes
  const path = event.path || event.rawUrl || '';
  
  console.log('📡 API Function called with path:', path);
  console.log('🔧 Method:', event.httpMethod);
  
  // Handle CORS for all requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Route: /api/orders (POST) - Submit order
    if (path.includes('/orders') && event.httpMethod === 'POST') {
      console.log('📦 Routing to order submission handler');
      return await submitOrderHandler(event, context);
    }
    
    // Route: /api/ping (GET) - Health check
    if (path.includes('/ping') && event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          message: 'Netlify API Function Active - Belkhadir Poterie', 
          timestamp: new Date().toISOString(),
          environment: process.env.NODE_ENV 
        })
      };
    }
    
    // Route: /api/demo (GET) - Demo endpoint
    if (path.includes('/demo') && event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: 'Demo API endpoint working',
          timestamp: new Date().toISOString()
        })
      };
    }
    
    // 404 for unknown routes
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ 
        error: 'Route not found',
        path: path,
        method: event.httpMethod 
      })
    };
    
  } catch (error) {
    console.error('❌ API Error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};
