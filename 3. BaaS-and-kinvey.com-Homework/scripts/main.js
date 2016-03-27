$('body').ready(function() {
    $('<div id="container">').appendTo($('body'));
    reloadCountries();
});

var baseUrl = 'https://baas.kinvey.com/appdata/kid_Zk1qYysfyZ',
    countryCollection = '/Country',
    townCollection = '/Town',
    userCredentials = 'Basic dmxhZG86MTIz';

function reloadCountries() {
    $.ajax({
        type: 'GET',
        url: baseUrl + countryCollection,
        headers: {
            Authorization: userCredentials
        },
        success: function(data) {
            $('#container').empty();
            for (var index in data) {
                var currentCountry = $('<div>').text(data[index].name);
                $('#container').append(currentCountry);
            }
        },
        error: function(err) {
            $('body').append('<div>').text('Bad request');
        }
    });
}