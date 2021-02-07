var express = require('express');
var captchaCtrl = require('./routes/captchCtrl');

// router
exports.router = (function() {
    console.log('trying to route...');
    
    var apiRouter = express.Router();
 
    // captcha routes
    apiRouter.route('/api/validate').post(captchaCtrl.validate);

    return apiRouter;

})();