var utl = {};

utl.loadTemplate = function (app, url, name, callback) {
    if (app.TEMPLATES === undefined) app.TEMPLATES = {};

    $.get(url, function(data) {
        $(data).filter('script[type="text/x-handlebars"]').each(function() {
            templateName = $(this).attr('data-template-name');
            app.TEMPLATES[templateName] = Ember.Handlebars.compile($(this).html());
        });
        
        if (callback) callback();
    });
}