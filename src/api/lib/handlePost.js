'use strict';

/**
* Controls the flow of adding an entry to the database
* @param {object} request - contains the request
* @param {object} response - contains the response
* @param {callback} next - calls the next function
*/

module.exports = (request,response,next) => {
  request.model.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
};