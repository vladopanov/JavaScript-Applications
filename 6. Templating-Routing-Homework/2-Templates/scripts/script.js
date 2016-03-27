$.get('templates/template.html', function (template) {
    var json = { people: [
        { "name": 'Garry Finch', "jobTitle": 'Front End Technical Lead', "website": 'http://website.com'},
        { "name": 'Bob McFray', "jobTitle": 'Photographer', "website": 'http://goo.gle'},
        { "name": 'Jenny O\'Sullivan', "jobTitle": 'LEGO Geek', "website": 'http://stackoverflow.com'}
        ]
    };

    var output = Mustache.render(template, json);
    $('#table').html(output);
})