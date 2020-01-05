/**
 * MensajeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    create: function(req, res) {
            console.log(req.body);
        sails.sockets.join(req, 'funSockets');

        // Broadcast a notification to all the sockets who have joined
        // the "funSockets" room, excluding our newly added socket:
        sails.sockets.broadcast('funSockets', 'create', req.body, req);

    }
    
  

};

