Template.map.events({
    'click #Map': function(event, t) {
        var user = Meteor.user();
        if (user) {
            Users.update(user._id, {
                $set: {
                    'profile.pos': {
                        x: event.offsetX,
                        y: event.offsetY
                    }
                }
            });
        }
    },
    'click li': function(event) {
        event.stopPropagation();
    }
});
