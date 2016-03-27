function onLoad() {
    if (!localStorage.length) {
        var name = window.prompt('Please, enter your name!');
        if (name != null) {
            localStorage.setItem('name', name);
            localStorage.setItem('sessions', 1);
        } else {
            window.alert('The name must not be empty');
        }
    } else {
        window.alert('Hello, ' + localStorage.getItem('name'));
        localStorage.setItem('sessions', Number(localStorage.getItem('sessions')) + 1);
    }

    if (!sessionStorage.counter) {
        sessionStorage.setItem('counter', 0);
    }
    var currentCount = parseInt(sessionStorage.getItem('counter'));
    currentCount += 1;
    sessionStorage.setItem('counter', currentCount);
    document.getElementById('countSessions').innerHTML = 'Session visits: ' + currentCount;
    document.getElementById('countVisits').innerHTML = 'Total visits: ' + localStorage.getItem('sessions');

    //console.log(localStorage.getItem('sessions'));
}