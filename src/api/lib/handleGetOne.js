'use strict';

/**
* Get the selected entry
* @param {object} request - contains the request
* @param {objec} response - contains the response
* @param {callback} next - calls the next function
*/

module.exports = (request,response,next) => {
  request.model.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
};