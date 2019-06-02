'use strict';


/**
* Controls the flow of deleting an entry from the database
* @param {obejct} request - contains the request
* @param {object} response - contains the response
* @param {*} next - calls the next function
*/
module.exports = (request,response,next) => {
  request.model.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
};