var express = require('express');
var router = express.Router();
var getty = require('../node_modules/gettyimages-api');
var credentials = { apiKey: "9gydgjbpck44x4wcn4nf8yxd", apiSecret: "MdjSQNHUFnhGZN74bYAF4DeYAnZawvdh929fK3KmhDtHc",
    username: "atousley", password: "abt86427" };
var client = new getty (credentials);

router.get('/', function(req, res) {
    client.search().images().creative().withPageSize(3).withPhrase('travel chicago')
        .execute(function(err, response) {
            if (err) throw err
            //console.log(JSON.stringify(response.images[]));
            res.send(response.images);
        });
});

module.exports = router;