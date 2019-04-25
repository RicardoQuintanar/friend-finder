var friends = require('../data/friends')

function apiRoutes(app) {
    app.get('/api/friends', function (req, res) {
        return res.json(friends);
    });
    app.post('/api/friends', function (req, res) {
        var userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        for (var i = 0; i < req.body.scores.length; i++) {
            userData.scores[i] = parseInt(req.body.scores[i]);
        };
        var scoreDiffs = [];
        for (var x = 0; x < friends.length; x++) {
            var diff = 0;
            for (var z = 0; z < friends[x].scores.length; z++) {
                diff += Math.abs(friends[x].scores[z] - userData.scores[z]);
            };
            scoreDiffs.push(diff);
        };


        var matchIndex = scoreDiffs.indexOf(Math.min(...scoreDiffs));


        var match = friends[matchIndex];

        friends.push(userData);

        return res.json(match);
    });
};

module.exports = apiRoutes;