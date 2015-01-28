Users = Meteor.users;

// Helpers
Users.helpers({
    gravatar: function() {
        var options = { size: 50, secure: true },
            email = this.emails[0].address;
        return Gravatar.imageUrl(email, options);
    }
});

// HOOKS
Users.before.insert(function(userId, doc) { });
