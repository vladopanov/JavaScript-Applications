(function() {
    var router = Sammy(function () {
        var selector = '#hello';
        this.get('#/Gosho', function() {
            $(selector).html('Hello, Gosho');
        });
        this.get('#/Mariyka', function() {
            $(selector).html('Hello, Mariyka');
        });
        this.get('#/Pesho', function() {
            $(selector).html('Hello, Pesho');
        });
    });
    router.run('#/');
}());