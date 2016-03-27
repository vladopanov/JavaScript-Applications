var string = `[{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"},
{"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"},
{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}]`;

var cars = JSON.parse(string);

$('body').append($('<table>').append($('<tr>')));
for(var key in cars[0]) {
    var th = $('tr').append('<th>' + key + '</th>');
}

for(var key in cars) {
    var tr = $('<tr>');
    var car = cars[key];
    for (value in car) {
        var prop = (car[value]);
        tr.append($('<td>' + prop + '</td>'));
    }
    $('tbody').append(tr);
}