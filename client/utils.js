var root = this;

root.Utils = {
    changePosition: function(doc) {
        var el = $('#' + doc._id);
            animateOptions = {};

        // Position animate
        el.animate({
            top: doc.profile.pos.y,
            left: doc.profile.pos.x
        }, animateOptions);
    },
    isAuthenticated: function(callback) {
        var user = Meteor.user();
        if (user&& callback) callback(user);
    },
    randomOffset: function() {
        var size = 50,
            map = $('#Map'),
            x = (Math.random() * (map.width() - size)),
            y = (Math.random() * (map.height() - size));
        return {
            x: x.toFixed(),
            y: y.toFixed()
        }
    }
};

/*
*
* Called whenever a new user is created. Return the new user object,
* or throw an Error to abort the creation.
*/
Accounts.createUser = _.wrap(Accounts.createUser, function(createUser, user) {

    // random positions
    user.profile = { pos: Utils.randomOffset() };

    // Now call the original create user function with
    // the original user object
    createUser(user);
});
