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












// Route Handlers

// /**
//  * Gets all the data
//  * @param {object} request - contains the request
//  * @param {object} response - contains the response
//  * @param {callback} next - calls the next function
//  */
// function handleGetAll(request,response,next) {
//   request.model.get()
//     .then( data => {
//       const output = {
//         count: data.length,
//         results: data,
//       };
//       response.status(200).json(output);
//     })
//     .catch( next );
// }

// /**
//  * Get the selected entry
//  * @param {object} request - contains the request
//  * @param {objec} response - contains the response
//  * @param {callback} next - calls the next function
//  */
// function handleGetOne(request,response,next) {
//   request.model.get(request.params.id)
//     .then( result => response.status(200).json(result[0]) )
//     .catch( next );
// }

// /**
//  * Controls the flow of adding an entry to the database
//  * @param {object} request - contains the request
//  * @param {object} response - contains the response
//  * @param {callback} next - calls the next function
//  */
// function handlePost(request,response,next) {
//   request.model.post(request.body)
//     .then( result => response.status(200).json(result) )
//     .catch( next );
// }

// /**
//  * Controls the flow of updating an entry in the database
//  * @param {object} request - contains the request
//  * @param {object} response - contains the repsonse
//  * @param {callback} next - calls the next function
//  */
// function handlePut(request,response,next) {
//   request.model.put(request.params.id, request.body)
//     .then( result => response.status(200).json(result) )
//     .catch( next );
// }

// /**
//  * Controls the flow of deleting an entry from the database
//  * @param {obejct} request - contains the request
//  * @param {object} response - contains the response
//  * @param {*} next - calls the next function
//  */
// function handleDelete(request,response,next) {
//   request.model.delete(request.params.id)
//     .then( result => response.status(200).json(result) )
//     .catch( next );
// }


