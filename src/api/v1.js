'use strict';

/**
 * API Router Module (V1)
 * Integrates with various models through a common Interface (.get(), .post(), .put(), .delete())
 * @module src/api/v1
 */

// const cwd = process.cwd();
const express = require('express');
const modelFinder = require(`../middleware/model-finder.js`);
const apiRouter = express.Router();

// Evaluate the model, dynamically
apiRouter.param('model', modelFinder);


// Route Handlers
const auth = require('../auth-server/auth/middleware.js');
const handleGetAll = require('./lib/handleGetAll.js');
const handlePost = require('./lib/handlePost.js');
const handleGetOne = require('./lib/handleGetOne.js');
const handlePut = require('./lib/handlePut.js');
const handleDelete = require('./lib/handleDelete.js');

// API Routes 
apiRouter.get('/api/v1/:model', auth(), handleGetAll);
apiRouter.post('/api/v1/:model', auth('create'), handlePost);
apiRouter.get('/api/v1/:model/:id', auth(), handleGetOne);
apiRouter.put('/api/v1/:model/:id', auth('update'), handlePut);
apiRouter.delete('/api/v1/:model/:id', auth('delete'), handleDelete);

module.exports = apiRouter;
