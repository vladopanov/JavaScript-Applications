// Знам, че куцо съм го направил, но съм на ски в Алпите
var isStopped = false;

function countDown() {
    var radios = document.getElementsByName('peak');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].value === localStorage['peak']) {
            radios[i].checked = true;
            break;
        }
    }
    var radios = document.getElementsByName('creation');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].value === localStorage['creation']) {
            radios[i].checked = true;
            break;
        }
    }
    var radios = document.getElementsByName('dish');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].value === localStorage['dish']) {
            radios[i].checked = true;
            break;
        }
    }

    var minutes = 5;
    var seconds = 0;

        setInterval(function () {
            if (!isStopped) {
                document.getElementById('timer').innerText = minutes + ":" + seconds;
                if (seconds === 0) {
                    seconds = 59;
                    minutes--;
                } else {
                    seconds--;
                }
            }
        }, 1000)
}

function radioClicked(id) {
    var answer = id.value;
    var question = id.name;
    localStorage.setItem(question, answer);
}

function displayAnswers() {
    var result = document.createElement('div');
    var one = document.getElementById('first').innerText + ": " + localStorage.getItem('peak') + '\n';
    var two = document.getElementById('second').innerText + ": " + localStorage.getItem('creation') + '\n';
    var three = document.getElementById('third').innerText + ": " + localStorage.getItem('dish');
    result.innerText = one + two + three;
    document.body.appendChild(result);
    isStopped = true;
}