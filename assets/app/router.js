App.Router.map(function () {
    this.route('index');
});




App.IndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {

    }
});


App.IndexRoute = Ember.Route.extend({
    model: function() { },

    setupController: function(controller, model) {
        controller.set('content', model);
    }
});
