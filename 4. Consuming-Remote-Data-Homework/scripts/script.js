$('<div id="container">').appendTo($('body'));
$('body').ready(reloadBooks);

var resourceUrl, title, author, isbn, idBook;

resourceUrl = 'https://baas.kinvey.com/appdata/kid_Z1jKoxf9k-/books';

function reloadBooks() {
    $.ajax({
        type: 'GET',
        url: resourceUrl,
        headers: {
            'Authorization': 'Basic cGVzaG86MTIzNA=='
        },
        success: function (data) {
            $('#container').empty();
            for (var index in data) {
                var currentBook = $('<div>').addClass('book').attr('id', data[index]._id)
                    .append($('<div>').text('Title: ' + data[index].title))
                    .append($('<div>').text('Author: ' + data[index].author))
                    .append($('<div>').text('ISBN: ' + data[index].isbn))
                    .append($('<button type="button">').text('Delete').on('click', deleteBook))
                    .append($('<button type="button">').text('Edit').on('click', editBook));
                $('#container').append(currentBook);
            }
            var form = $('<form>').attr('id', 'form')
                .append($('<input type="text" id="title" placeholder="title">'))
                .append($('<input type="text" id="author" placeholder="author">'))
                .append($('<input type="text" id="isbn" placeholder="isbn">'))
                .append($('<button type="button" id="createBook">').text('Create Book').on('click', createBook));
            $('#container').append(form);
        },
        error: function () {
            $('body').append($('<div>').text('Something wrong happened'));
        }
    });
}

function createBook() {
    title = $('#title').val(),
    author = $('#author').val(),
    isbn = $('#isbn').val();

    $.ajax({
        type: 'POST',
        url: resourceUrl,
        headers: {
            'Authorization': 'Basic cGVzaG86MTIzNA=='
        },
        data: {'title': title, 'author': author, 'isbn': isbn},
        success: function (data) {
            reloadBooks();
        },
        error: function () {
            $('body').append($('<div>').text('Something wrong happened'));
        }
    });
}

function editBook() {
    idBook = this.parentNode.id;

    $('#' + idBook).append($('<input type="text" placeholder="title" id="editTitle">'))
        .append($('<input type="text" placeholder="author" id="editAuthor">'))
        .append($('<input type="text" placeholder="isbn" id="editIsbn">'))
        .append($('<button type="button">').text('Submit').on('click', edit));

    function edit() {
        title = $('#editTitle').val();
        author = $('#editAuthor').val();
        isbn = $('#editIsbn').val();

        $.ajax({
            type: 'PUT',
            url: resourceUrl + '/' + idBook,
            headers: {
                'Authorization': 'Basic cGVzaG86MTIzNA=='
            },
            data: {'title': title, 'author': author, 'isbn': isbn},
            success: function (data) {
                reloadBooks();
            },
            error: function () {
                $('body').append($('<div>').text('The book can be edited only by the person who created it. ' +
                    'Please, create a book and try to edit it again.'));
            }
        });
    }
}

function deleteBook() {
    idBook = this.parentNode.id;

    $.ajax({
        type: 'DELETE',
        url: resourceUrl + '/' + idBook,
        headers: {
            'Authorization': 'Basic cGVzaG86MTIzNA=='
        },
        success: function () {
            reloadBooks();
        },
        error: function () {
            $('body').append($('<div>').text('The books created directly from the base cannot be deleted. ' +
                'Create a book and then delete it. This is because of the authorization. Only the user who created ' +
                'the book can delete it.'));
        }
    });
}