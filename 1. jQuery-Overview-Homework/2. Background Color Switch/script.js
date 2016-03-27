$('#btn').on('click', changeBackground);

function changeBackground() {
    var cl = '.' + $('#cl').val();
    var color = $('#color').val();

    $(cl).css('background', color);
}