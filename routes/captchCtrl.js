// routes
module.exports = {
    validate: function(req, res) {
        console.log('routing...');
        //params
        token = req.body.token

        console.log(`the token receiveed : ${token}`);
        return res.staus(200).json({ 'the token value :' : token });
      /*   if(token === null){
            return res.status(400).json({ 'error' : 'missing tokem'});
        }else{
            return res.status(200).json({'token is :' : token});
        } */
    }
}