var App = Ember.Application.create();

App.Store = DS.Store.extend({
    revision: 12,
    adapter: DS.FixtureAdapter.create()
});


//utl.loadTemplate(EmberApp, url, name);
//utl.loadTemplate(App, 'assets/templates/application.handlebars', 'application');

