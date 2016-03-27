var app = app || {};

app.booksViews = (function () {
    function showAllBooks(selector, data) {
        $.get('templates/books.html', function (templ) {
            var rendered = Mustache.render(templ, data);
            $(selector).html(rendered);
            $('#addNewBook').on('click', function(e) {
                Sammy(function () {
                    this.trigger('redirectUrl', {url:'#/addNewBook'});
                });
            });
            $('.deleteBook').on('click', function(e) {
                var bookId = $(this).parent().attr('data-id');
                Sammy(function () {
                    this.trigger('deleteBook', {bookId: bookId})
                });
            });
            $('.editBook').on('click', function(e) {
                var bookId = $(this).parent().attr('data-id');
                app.bookIdToEdit = bookId;
                Sammy(function () {
                    this.trigger('redirectUrl', {url:'#/editBook'});
                });
            });
        });
    }

    function showAddNewBook(selector) {
        $.get('templates/addNewBook.html', function (templ) {
            $(selector).html(templ);
            $('#addNewBook').on('click', function() {
                var title = $('#title').val(),
                author = $('#author').val(),
                isbn = $('#isbn').val();
                Sammy(function () {
                    this.trigger('add-new-book', {title: title, author: author, isbn: isbn});
                });
            });
        });
    }

    function showEditBook(selector) {
        $.get('templates/editBook.html', function (templ) {
            $(selector).html(templ);
            $('#editBook').on('click', function() {
                var title = $('#title').val(),
                    author = $('#author').val(),
                    isbn = $('#isbn').val();
                Sammy(function () {
                    this.trigger('editBook', {title: title, author: author, isbn: isbn});
                });
            });
        });
    }

    return {
        load: function () {
            return {
                showAllBooks: showAllBooks,
                showAddNewBook: showAddNewBook,
                showEditBook: showEditBook
            }
        }
    }
}());