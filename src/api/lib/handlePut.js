'use strict';

/**
* Controls the flow of updating an entry in the database
* @param {object} request - contains the request
* @param {object} response - contains the repsonse
* @param {callback} next - calls the next function
*/

module.exports = (request,response,next) => {
  request.model.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
};