var app = app || {};

app.booksModel = (function () {
    function BooksModel(requester) {
        this._requester = requester;
        this.serviceUrl = requester.baseUrl + 'appdata/' + requester.appId + '/books';
    }

    BooksModel.prototype.getAllBooks = function () {
        return this._requester.get(this.serviceUrl, true);
    };

    BooksModel.prototype.addNewBook = function(data) {
        return this._requester.post(this.serviceUrl, data, true);
    };

    BooksModel.prototype.editBook = function(data) {
        var editUrl = this.serviceUrl + '/' + app.bookIdToEdit;
        return this._requester.put(editUrl, data, true);
    };

    BooksModel.prototype.deleteBook = function(data) {
        var deleteUrl = this.serviceUrl + '/' + data.bookId;
        return this._requester.delete(deleteUrl, true);
    };

    return {
        load: function (requester) {
            return new BooksModel(requester);
        }
    }
}());