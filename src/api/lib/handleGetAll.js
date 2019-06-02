'use strict';
/**
* Gets all the data
* @param {object} request - contains the request
* @param {object} response - contains the response
* @param {callback} next - calls the next function
*/

module.exports = (request,response,next) => {
  request.model.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
};