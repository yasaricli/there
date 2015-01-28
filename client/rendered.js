Template.map.rendered = function() {

    // OBSERVE ONLINE USERS
    Users.find({}).observe({
        added: function(doc) {

            // change position
            Utils.changePosition(doc);
        },

        // doc is old data.
        changed: function(userId, doc) {
            var user = Users.findOne(doc._id);

            // change position
            Utils.changePosition(user);
        }
    });

    // User ONLINE STATUS CHANGE
    $(window).focus(function() {
        Utils.isAuthenticated(function(user) {
            Users.update(user._id, {
                $set: {
                    'profile.status': 'online'
                }
            });
        });
    });

    // User BUSY STATUS CHANGE
    $(window).blur(function() {
        Utils.isAuthenticated(function(user) {
            Users.update(user._id, {
                $set: {
                    'profile.status': 'busy'
                }
            });
        });
    });
};
