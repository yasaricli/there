Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/', {
    name: 'Map',
    template: 'map',
    waitOn: function() {
        return [
            Meteor.subscribe('userStatus'), // Online profile.status
            Meteor.subscribe('users')
        ]
    }
});
