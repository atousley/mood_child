var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Vision = require('../models/visionBoard');


router.post('/:id', function(req, res) {
    var newVision = new Vision({
        "date": Date(),
        "current_book": {
            "title": req.body.title,
            "author": req.body.author
        },
        "reading_list": [
            {
                "title": req.body.title1,
                "author": req.body.author1
            },
            {
                "title": req.body.title2,
                "author": req.body.author2
            },
            {
                "title": req.body.title3,
                "author": req.body.author3
            },
            {
                "title": req.body.title4,
                "author": req.body.author4
            },
            {
                "title": req.body.title5,
                "author": req.body.author5
            }
        ],
        "delight": [
            {"delight": req.body.delight1},
            {"delight": req.body.delight2},
            {"delight": req.body.delight3},
            {"delight": req.body.delight4},
            {"delight": req.body.delight5},
            {"delight": req.body.delight6},
            {"delight": req.body.delight7},
            {"delight": req.body.delight8}
        ],
        "thoughts": [
            {"thought": req.body.thought1},
            {"thought": req.body.thought2},
            {"thought": req.body.thought3},
            {"thought": req.body.thought4}
        ],
        "travel": [
            {"travel": req.body.travel1},
            {"travel": req.body.travel2},
            {"travel": req.body.travel3},
            {"travel": req.body.travel4},
            {"travel": req.body.travel5}
        ],
        "current_career": [
            {"objective": req.body.current_career1},
            {"objective": req.body.current_career2},
            {"objective": req.body.current_career3}
        ],
        "future_career": [
            {"objective": req.body.future_career1},
            {"objective": req.body.future_career2},
            {"objective": req.body.future_career3},
            {"objective": req.body.future_career4},
            {"objective": req.body.future_career5}
        ]
    });

    User.findById(req.params.id, function (err, result) {

        result.visionboard.push(newVision);

        result.save(function(err, result){
            if(err) {
                console.log(err);
            }
            res.send(result);
        });

    });

});
module.exports = router;